/* Scene 5: Certificate Verification via Trust Chain — Detailed */
const Scene5 = {
  totalSteps: 10,

  steps: [
    {
      zh: '前置知識：數位簽章的原理 —— 簽署方（CA）用自己的 Private Key 對資料的 Hash 加密，產生「數位簽章」。驗證方（瀏覽器）用 CA 的 Public Key 解密簽章，再與自己計算的 Hash 比對。',
      en: 'Background: Digital Signature — The signer (CA) encrypts the data\'s hash with its Private Key to create a "digital signature." The verifier (browser) decrypts the signature with the CA\'s Public Key, then compares it with its own computed hash.'
    },
    {
      zh: '瀏覽器連線到 https://www.example.com，伺服器回傳「憑證鏈」：End-Entity 憑證 + Intermediate CA 憑證。Root CA 憑證已預裝在瀏覽器/OS 信任存放區中，不需要傳送。',
      en: 'Browser connects to https://www.example.com. The server returns a "certificate chain": End-Entity cert + Intermediate CA cert. Root CA cert is pre-installed in the browser/OS trust store — no need to transmit.'
    },
    {
      zh: '開始驗證 EE 憑證 ── 瀏覽器從 EE 憑證取出「Issuer」欄位，得知是由 DigiCert Intermediate CA 簽發。接著從 ICA 憑證中取出 ICA 的 Public Key。',
      en: 'Start verifying EE cert — Browser extracts the "Issuer" field from the EE cert, identifying DigiCert Intermediate CA as the signer. Then extracts the ICA\'s Public Key from the ICA certificate.'
    },
    {
      zh: '瀏覽器從 EE 憑證中取出兩個東西：① TBS Data（To Be Signed，待簽資料 = 除簽章外的所有憑證內容）② Digital Signature（CA 簽署時用 CA Private Key 加密的 Hash）。',
      en: 'Browser extracts two things from the EE cert: ① TBS Data (To Be Signed = all cert content except the signature) ② Digital Signature (the hash encrypted by CA\'s Private Key during signing).'
    },
    {
      zh: '核心驗證：瀏覽器用 ICA 的 Public Key 解密 Signature → 取回 Hash A。同時自行對 TBS Data 計算 Hash → 得到 Hash B。比對 Hash A === Hash B → ✅ 簽章有效！EE 憑證確實由 ICA 簽發且未被篡改。',
      en: 'Core verification: Browser decrypts Signature with ICA\'s Public Key → gets Hash A. Also computes its own hash of TBS Data → gets Hash B. Compare Hash A === Hash B → ✅ Signature valid! EE cert was indeed signed by ICA and hasn\'t been tampered with.'
    },
    {
      zh: '接下來驗證 ICA 憑證 ── 瀏覽器從 ICA 憑證取出「Issuer」→ DigiCert Root CA。從信任存放區找到 Root CA 憑證，取出 Root CA 的 Public Key。',
      en: 'Next, verify ICA cert — Browser extracts "Issuer" from ICA cert → DigiCert Root CA. Finds the Root CA cert in the trust store and extracts Root CA\'s Public Key.'
    },
    {
      zh: '同樣的流程：取出 ICA 的 TBS Data + Signature。用 Root CA 的 Public Key 解密 Signature → Hash C。自行計算 ICA TBS Data 的 Hash → Hash D。Hash C === Hash D → ✅ ICA 憑證有效！',
      en: 'Same process: Extract ICA\'s TBS Data + Signature. Decrypt Signature with Root CA\'s Public Key → Hash C. Compute hash of ICA TBS Data → Hash D. Hash C === Hash D → ✅ ICA cert is valid!'
    },
    {
      zh: 'Root CA 是信任鏈的最頂端（信任錨點）。它的憑證是「自簽章」的（用自己的 Private Key 簽署），且已預裝在瀏覽器/OS 的信任清單中。Root CA 在清單中 → 整條信任鏈成立！',
      en: 'Root CA is the top of the trust chain (trust anchor). Its certificate is "self-signed" (signed with its own Private Key) and pre-installed in the browser/OS trust list. Root CA is in the list → the entire trust chain is established!'
    },
    {
      zh: '除了簽章驗證，瀏覽器還檢查：有效期間（Not Before / Not After）、網域匹配（CN / SAN 包含連線網域）、撤銷狀態（CRL / OCSP）、金鑰用途（Key Usage）。',
      en: 'Besides signature verification, the browser also checks: Validity period (Not Before / Not After), Domain match (CN / SAN contains the connecting domain), Revocation status (CRL / OCSP), Key usage.'
    },
    {
      zh: '🔒 全部驗證通過！瀏覽器確認憑證可被信任，建立安全的 TLS 加密連線。如果任何一個步驟失敗 → ⚠️ 瀏覽器顯示「不安全」警告並阻止連線。',
      en: '🔒 All verifications passed! Browser confirms the certificate is trusted and establishes a secure TLS encrypted connection. If any step fails → ⚠️ browser shows "Not Secure" warning and blocks the connection.'
    }
  ],

  render(container) {
    container.innerHTML = `
      <div style="width:100%;max-width:960px">
        <div style="display:flex;align-items:flex-start;gap:16px;justify-content:center">

          <!-- Left column: Certificate Chain -->
          <div style="flex:1;min-width:0;max-width:420px;display:flex;flex-direction:column;gap:6px">

            <!-- Prerequisite: Digital Signature -->
            <div id="s5-prereq" style="opacity:0;padding:10px 14px;background:rgba(139,92,246,0.08);border:1px solid var(--accent-purple);border-radius:10px;margin-bottom:4px">
              <div style="font-size:12px;font-weight:700;color:var(--accent-purple);margin-bottom:6px">
                <span class="zh">🔐 數位簽章原理</span>
                <span class="en">Digital Signature Principle</span>
              </div>
              <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;font-size:11px">
                <span style="padding:3px 8px;background:rgba(239,68,68,0.1);border:1px solid var(--accent-red);border-radius:4px;color:var(--accent-red)">🗝️ CA Private Key</span>
                <span style="color:var(--text-dim)">+ Hash(Data) →</span>
                <span style="padding:3px 8px;background:rgba(59,130,246,0.1);border:1px solid var(--accent-blue);border-radius:4px;color:var(--accent-blue)">📝 Signature</span>
              </div>
              <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;font-size:11px;margin-top:6px">
                <span style="padding:3px 8px;background:rgba(16,185,129,0.1);border:1px solid var(--accent-green);border-radius:4px;color:var(--accent-green)">🔑 CA Public Key</span>
                <span style="color:var(--text-dim)">+ Signature →</span>
                <span style="padding:3px 8px;background:rgba(6,182,212,0.1);border:1px solid var(--accent-cyan);border-radius:4px;color:var(--accent-cyan)">#️⃣ Hash</span>
                <span style="color:var(--text-dim)">→ 比對 Compare</span>
              </div>
            </div>

            <!-- Server label -->
            <div id="s5-server-label" style="opacity:0;text-align:center;font-size:11px;color:var(--text-dim)">
              <span>🖥️</span>
              <span class="zh">伺服器回傳憑證鏈</span>
              <span class="en">Server returns certificate chain</span>
            </div>

            <!-- EE Certificate -->
            <div class="entity-box" id="s5-ee-cert" style="opacity:0;padding:10px 14px;border-color:var(--accent-blue)">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
                <span style="font-size:20px">📜</span>
                <div>
                  <div style="font-size:12px;font-weight:700;color:var(--accent-blue)"><span class="zh">終端實體憑證</span><span class="en">End-Entity Certificate</span></div>
                  <div style="font-size:10px;color:var(--text-secondary)">Subject: www.example.com</div>
                </div>
              </div>
              <div id="s5-ee-issuer-row" style="font-size:10px;color:var(--text-secondary);opacity:0">
                Issuer: <span style="color:var(--accent-purple);font-weight:600;text-decoration:underline" id="s5-ee-issuer">DigiCert Intermediate CA</span>
              </div>
              <div id="s5-ee-tbs" style="opacity:0;margin-top:6px;padding:6px 10px;background:rgba(6,182,212,0.06);border:1px dashed var(--accent-cyan);border-radius:6px;font-size:10px">
                <div style="color:var(--accent-cyan);font-weight:600;margin-bottom:2px">📄 TBS Data (To Be Signed)</div>
                <div style="color:var(--text-dim);font-family:var(--font-mono);font-size:9px">Version, Serial, Issuer, Validity, Subject, Public Key, Extensions...</div>
              </div>
              <div id="s5-ee-sig" style="opacity:0;margin-top:4px;padding:6px 10px;background:rgba(59,130,246,0.06);border:1px dashed var(--accent-blue);border-radius:6px;font-size:10px">
                <div style="color:var(--accent-blue);font-weight:600;margin-bottom:2px"><span class="zh">📝 數位簽章</span><span class="en">📝 Digital Signature</span></div>
                <div style="color:var(--text-dim);font-family:var(--font-mono);font-size:9px">7a:3b:c2:91:f4:d8:2e:a5:b7:... (<span class="zh">由 ICA Private Key 加密的 Hash</span><span class="en">Hash encrypted by ICA Private Key</span>)</div>
              </div>
            </div>

            <!-- ICA Certificate -->
            <div class="entity-box" id="s5-ica-cert" style="opacity:0;padding:10px 14px;border-color:var(--accent-purple)">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
                <span style="font-size:20px">📋</span>
                <div>
                  <div style="font-size:12px;font-weight:700;color:var(--accent-purple)"><span class="zh">中繼 CA 憑證</span><span class="en">Intermediate CA Certificate</span></div>
                  <div style="font-size:10px;color:var(--text-secondary)">Subject: DigiCert Intermediate CA</div>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
                <span class="key-badge public" style="padding:2px 8px;font-size:10px;margin:0" id="s5-ica-pubkey">🔑 <span class="zh">ICA 公鑰</span><span class="en">ICA Public Key</span></span>
              </div>
              <div id="s5-ica-issuer-row" style="font-size:10px;color:var(--text-secondary);margin-top:4px;opacity:0">
                Issuer: <span style="color:var(--accent-yellow);font-weight:600;text-decoration:underline" id="s5-ica-issuer">DigiCert Root CA</span>
              </div>
              <div id="s5-ica-tbs" style="opacity:0;margin-top:6px;padding:6px 10px;background:rgba(6,182,212,0.06);border:1px dashed var(--accent-cyan);border-radius:6px;font-size:10px">
                <div style="color:var(--accent-cyan);font-weight:600;margin-bottom:2px">📄 ICA TBS Data</div>
                <div style="color:var(--text-dim);font-family:var(--font-mono);font-size:9px">Version, Serial, Issuer, Validity, Subject, Public Key...</div>
              </div>
              <div id="s5-ica-sig" style="opacity:0;margin-top:4px;padding:6px 10px;background:rgba(139,92,246,0.06);border:1px dashed var(--accent-purple);border-radius:6px;font-size:10px">
                <div style="color:var(--accent-purple);font-weight:600;margin-bottom:2px"><span class="zh">📝 ICA 簽章</span><span class="en">📝 ICA Signature</span></div>
                <div style="color:var(--text-dim);font-family:var(--font-mono);font-size:9px">a1:e9:4f:... (<span class="zh">由 Root CA Private Key 加密的 Hash</span><span class="en">Hash encrypted by Root CA Private Key</span>)</div>
              </div>
            </div>

            <!-- Root CA Certificate -->
            <div class="entity-box" id="s5-root-cert" style="opacity:0;padding:10px 14px;border-color:var(--accent-yellow);background:rgba(245,158,11,0.04)">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
                <span style="font-size:20px">🏛️</span>
                <div>
                  <div style="font-size:12px;font-weight:700;color:var(--accent-yellow)"><span class="zh">根 CA 憑證</span><span class="en">Root CA Certificate</span></div>
                  <div style="font-size:10px;color:var(--text-secondary)">Subject: DigiCert Root CA</div>
                </div>
              </div>
              <div style="font-size:10px;color:var(--text-secondary)">
                Issuer: <span style="color:var(--accent-yellow)">DigiCert Root CA (<span class="zh">自簽章</span><span class="en">Self-Signed</span>)</span>
              </div>
              <div style="display:flex;align-items:center;gap:6px;margin-top:4px;flex-wrap:wrap">
                <span class="key-badge public" style="padding:2px 8px;font-size:10px;margin:0" id="s5-root-pubkey">🔑 <span class="zh">Root 公鑰</span><span class="en">Root Public Key</span></span>
                <span id="s5-trust-badge" style="opacity:0;font-size:9px;padding:2px 8px;background:rgba(245,158,11,0.15);color:var(--accent-yellow);border-radius:4px">
                  ⭐ 預裝於瀏覽器 Pre-installed in Browser
                </span>
              </div>
            </div>
          </div>

          <!-- Right column: Verification Process -->
          <div style="flex:1;min-width:0;max-width:480px;display:flex;flex-direction:column;gap:8px">

            <!-- Verification title -->
            <div id="s5-verify-title" style="opacity:0;text-align:center;font-size:13px;font-weight:700;color:var(--accent-cyan);padding:6px">
              <span class="zh">🔍 驗證過程</span>
              <span class="en">Verification Process</span>
            </div>

            <!-- EE Verification Detail -->
            <div id="s5-ee-verify" style="opacity:0;padding:12px 14px;background:var(--bg-card);border:1px solid var(--border-color);border-radius:10px">
              <div style="font-size:11px;font-weight:700;color:var(--accent-blue);margin-bottom:8px">
                <span class="zh">驗證 End-Entity 憑證</span>
                <span class="en">Verify EE Certificate</span>
              </div>
              <!-- Step A: Decrypt -->
              <div style="display:flex;align-items:center;gap:6px;font-size:10px;margin-bottom:6px;flex-wrap:wrap">
                <span class="key-badge public" style="padding:2px 6px;font-size:9px;margin:0">🔑 ICA PubKey</span>
                <span style="color:var(--text-dim)">解密 Decrypt</span>
                <span style="padding:2px 6px;background:rgba(59,130,246,0.1);border:1px solid var(--accent-blue);border-radius:4px;color:var(--accent-blue);font-size:9px">📝 Signature</span>
                <span style="color:var(--text-dim)">→</span>
                <span id="s5-hashA" style="padding:2px 8px;background:rgba(245,158,11,0.1);border:1px solid var(--accent-yellow);border-radius:4px;color:var(--accent-yellow);font-family:var(--font-mono);font-size:9px">#️⃣ Hash A: 9f3a...</span>
              </div>
              <!-- Step B: Compute -->
              <div style="display:flex;align-items:center;gap:6px;font-size:10px;margin-bottom:6px;flex-wrap:wrap">
                <span style="color:var(--text-dim)">SHA-256(</span>
                <span style="padding:2px 6px;background:rgba(6,182,212,0.1);border:1px solid var(--accent-cyan);border-radius:4px;color:var(--accent-cyan);font-size:9px">📄 TBS Data</span>
                <span style="color:var(--text-dim)">) →</span>
                <span id="s5-hashB" style="padding:2px 8px;background:rgba(245,158,11,0.1);border:1px solid var(--accent-yellow);border-radius:4px;color:var(--accent-yellow);font-family:var(--font-mono);font-size:9px">#️⃣ Hash B: 9f3a...</span>
              </div>
              <!-- Compare -->
              <div id="s5-ee-compare" style="opacity:0;text-align:center;padding:6px;background:rgba(16,185,129,0.1);border:1px solid var(--accent-green);border-radius:6px;font-size:11px">
                <span style="color:var(--accent-green);font-weight:700">Hash A === Hash B ✅</span>
                <div style="font-size:10px;color:var(--accent-green);margin-top:2px">
                  <span class="zh">簽章有效！憑證由 ICA 簽發且未被篡改</span>
                  <span class="en">Signature valid! Cert signed by ICA, not tampered</span>
                </div>
              </div>
            </div>

            <!-- ICA Verification Detail -->
            <div id="s5-ica-verify" style="opacity:0;padding:12px 14px;background:var(--bg-card);border:1px solid var(--border-color);border-radius:10px">
              <div style="font-size:11px;font-weight:700;color:var(--accent-purple);margin-bottom:8px">
                <span class="zh">驗證 Intermediate CA 憑證</span>
                <span class="en">Verify ICA Certificate</span>
              </div>
              <!-- Step A: Decrypt -->
              <div style="display:flex;align-items:center;gap:6px;font-size:10px;margin-bottom:6px;flex-wrap:wrap">
                <span class="key-badge public" style="padding:2px 6px;font-size:9px;margin:0">🔑 Root PubKey</span>
                <span style="color:var(--text-dim)">解密 Decrypt</span>
                <span style="padding:2px 6px;background:rgba(139,92,246,0.1);border:1px solid var(--accent-purple);border-radius:4px;color:var(--accent-purple);font-size:9px">📝 ICA Sig</span>
                <span style="color:var(--text-dim)">→</span>
                <span id="s5-hashC" style="padding:2px 8px;background:rgba(245,158,11,0.1);border:1px solid var(--accent-yellow);border-radius:4px;color:var(--accent-yellow);font-family:var(--font-mono);font-size:9px">#️⃣ Hash C: b2e7...</span>
              </div>
              <!-- Step B: Compute -->
              <div style="display:flex;align-items:center;gap:6px;font-size:10px;margin-bottom:6px;flex-wrap:wrap">
                <span style="color:var(--text-dim)">SHA-256(</span>
                <span style="padding:2px 6px;background:rgba(6,182,212,0.1);border:1px solid var(--accent-cyan);border-radius:4px;color:var(--accent-cyan);font-size:9px">📄 ICA TBS</span>
                <span style="color:var(--text-dim)">) →</span>
                <span id="s5-hashD" style="padding:2px 8px;background:rgba(245,158,11,0.1);border:1px solid var(--accent-yellow);border-radius:4px;color:var(--accent-yellow);font-family:var(--font-mono);font-size:9px">#️⃣ Hash D: b2e7...</span>
              </div>
              <!-- Compare -->
              <div id="s5-ica-compare" style="opacity:0;text-align:center;padding:6px;background:rgba(16,185,129,0.1);border:1px solid var(--accent-green);border-radius:6px;font-size:11px">
                <span style="color:var(--accent-green);font-weight:700">Hash C === Hash D ✅</span>
                <div style="font-size:10px;color:var(--accent-green);margin-top:2px">
                  <span class="zh">ICA 憑證有效！由受信任的 Root CA 簽發</span>
                  <span class="en">ICA cert valid! Signed by trusted Root CA</span>
                </div>
              </div>
            </div>

            <!-- Root CA Trust -->
            <div id="s5-root-trust" style="opacity:0;padding:10px 14px;background:rgba(245,158,11,0.06);border:1px solid var(--accent-yellow);border-radius:10px;text-align:center">
              <div style="font-size:20px;margin-bottom:4px">🏛️</div>
              <div style="font-size:11px;font-weight:700;color:var(--accent-yellow)">
                <span class="zh">Root CA = 信任錨點 (Trust Anchor)</span>
                <span class="en">Root CA = Trust Anchor</span>
              </div>
              <div style="font-size:10px;color:var(--text-secondary);margin-top:4px">
                <span class="zh">自簽章 + 預裝於瀏覽器/OS → 整條信任鏈成立</span>
                <span class="en">Self-signed + Pre-installed → Entire chain trusted</span>
              </div>
            </div>

            <!-- Extra checks -->
            <div id="s5-extra-checks" style="opacity:0;padding:10px 14px;background:var(--bg-card);border:1px solid var(--border-color);border-radius:10px">
              <div style="font-size:11px;font-weight:600;color:var(--accent-cyan);margin-bottom:6px">
                <span class="zh">📋 額外安全檢查</span>
                <span class="en">Additional Security Checks</span>
              </div>
              <div style="display:flex;gap:6px;flex-wrap:wrap">
                <span style="padding:3px 8px;background:rgba(6,182,212,0.08);border:1px solid var(--accent-cyan);border-radius:5px;font-size:10px;color:var(--accent-cyan)">🕐 有效期間 Validity</span>
                <span style="padding:3px 8px;background:rgba(6,182,212,0.08);border:1px solid var(--accent-cyan);border-radius:5px;font-size:10px;color:var(--accent-cyan)">🌐 網域匹配 Domain</span>
                <span style="padding:3px 8px;background:rgba(6,182,212,0.08);border:1px solid var(--accent-cyan);border-radius:5px;font-size:10px;color:var(--accent-cyan)">📋 CRL/OCSP</span>
                <span style="padding:3px 8px;background:rgba(6,182,212,0.08);border:1px solid var(--accent-cyan);border-radius:5px;font-size:10px;color:var(--accent-cyan)">🔑 Key Usage</span>
              </div>
            </div>

            <!-- Final -->
            <div id="s5-final" style="opacity:0;text-align:center;padding:12px;background:rgba(16,185,129,0.08);border:2px solid var(--accent-green);border-radius:12px">
              <div style="font-size:32px;margin-bottom:4px">🔒</div>
              <div class="zh" style="font-size:14px;color:var(--accent-green);font-weight:700">全部驗證通過！安全連線已建立</div>
              <div class="en" style="font-size:11px;color:var(--accent-green)">All verifications passed! Secure connection established</div>
              <div style="margin-top:6px;font-size:10px;color:var(--accent-red)">
                <span class="zh">⚠️ 任一步驟失敗 → 瀏覽器顯示「不安全」警告</span>
                <span class="en">⚠️ Any step fails → Browser shows "Not Secure" warning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  activate(step) {
    const prereq = document.getElementById('s5-prereq');
    const serverLabel = document.getElementById('s5-server-label');
    const eeCert = document.getElementById('s5-ee-cert');
    const eeIssuerRow = document.getElementById('s5-ee-issuer-row');
    const eeTbs = document.getElementById('s5-ee-tbs');
    const eeSig = document.getElementById('s5-ee-sig');
    const icaCert = document.getElementById('s5-ica-cert');
    const icaPubkey = document.getElementById('s5-ica-pubkey');
    const icaIssuerRow = document.getElementById('s5-ica-issuer-row');
    const icaTbs = document.getElementById('s5-ica-tbs');
    const icaSig = document.getElementById('s5-ica-sig');
    const rootCert = document.getElementById('s5-root-cert');
    const trustBadge = document.getElementById('s5-trust-badge');
    const verifyTitle = document.getElementById('s5-verify-title');
    const eeVerify = document.getElementById('s5-ee-verify');
    const eeCompare = document.getElementById('s5-ee-compare');
    const icaVerify = document.getElementById('s5-ica-verify');
    const icaCompare = document.getElementById('s5-ica-compare');
    const rootTrust = document.getElementById('s5-root-trust');
    const extraChecks = document.getElementById('s5-extra-checks');
    const final = document.getElementById('s5-final');

    switch(step) {
      case 0:
        // Show digital signature prerequisite
        prereq.style.opacity = '1';
        prereq.classList.add('anim-fade-in');
        break;

      case 1:
        // Server returns chain
        serverLabel.style.opacity = '1';
        serverLabel.classList.add('anim-fade-in');
        eeCert.style.opacity = '1';
        eeCert.classList.add('anim-fade-in-left');
        setTimeout(() => {
          icaCert.style.opacity = '1';
          icaCert.classList.add('anim-fade-in-left');
        }, 300);
        setTimeout(() => {
          rootCert.style.opacity = '1';
          rootCert.classList.add('anim-fade-in-left');
          trustBadge.style.opacity = '1';
        }, 600);
        break;

      case 2:
        // Show EE Issuer + highlight ICA PubKey
        eeIssuerRow.style.opacity = '1';
        eeIssuerRow.classList.add('anim-fade-in');
        icaPubkey.style.animation = 'glowGreen 2s ease infinite';
        icaPubkey.style.transform = 'scale(1.1)';
        verifyTitle.style.opacity = '1';
        verifyTitle.classList.add('anim-fade-in');
        break;

      case 3:
        // Show TBS Data + Signature from EE cert
        icaPubkey.style.animation = '';
        icaPubkey.style.transform = '';
        eeTbs.style.opacity = '1';
        eeTbs.classList.add('anim-fade-in');
        setTimeout(() => {
          eeSig.style.opacity = '1';
          eeSig.classList.add('anim-fade-in');
        }, 400);
        break;

      case 4:
        // Show EE verification detail + result
        eeVerify.style.opacity = '1';
        eeVerify.classList.add('anim-fade-in-right');
        setTimeout(() => {
          eeCompare.style.opacity = '1';
          eeCompare.classList.add('anim-scale-in');
          eeCert.style.borderColor = 'var(--accent-green)';
          eeCert.style.boxShadow = '0 0 12px rgba(16,185,129,0.2)';
        }, 800);
        break;

      case 5:
        // Show ICA Issuer + highlight Root PubKey
        icaIssuerRow.style.opacity = '1';
        icaIssuerRow.classList.add('anim-fade-in');
        const rootPubkey = document.getElementById('s5-root-pubkey');
        rootPubkey.style.animation = 'glowGreen 2s ease infinite';
        rootPubkey.style.transform = 'scale(1.1)';
        icaTbs.style.opacity = '1';
        icaTbs.classList.add('anim-fade-in');
        setTimeout(() => {
          icaSig.style.opacity = '1';
          icaSig.classList.add('anim-fade-in');
          rootPubkey.style.animation = '';
          rootPubkey.style.transform = '';
        }, 400);
        break;

      case 6:
        // Show ICA verification detail + result
        icaVerify.style.opacity = '1';
        icaVerify.classList.add('anim-fade-in-right');
        setTimeout(() => {
          icaCompare.style.opacity = '1';
          icaCompare.classList.add('anim-scale-in');
          icaCert.style.borderColor = 'var(--accent-green)';
          icaCert.style.boxShadow = '0 0 12px rgba(16,185,129,0.2)';
        }, 800);
        break;

      case 7:
        // Root CA trust anchor
        rootTrust.style.opacity = '1';
        rootTrust.classList.add('anim-scale-in');
        rootCert.style.borderColor = 'var(--accent-green)';
        rootCert.style.boxShadow = '0 0 12px rgba(245,158,11,0.3)';
        trustBadge.style.animation = 'pulse 2s ease infinite';
        break;

      case 8:
        // Extra checks
        extraChecks.style.opacity = '1';
        extraChecks.classList.add('anim-fade-in-right');
        break;

      case 9:
        // Final result
        final.style.opacity = '1';
        final.classList.add('anim-scale-in');
        setTimeout(() => {
          final.style.animation = 'glowGreen 3s ease infinite';
        }, 600);
        break;
    }
  }
};
