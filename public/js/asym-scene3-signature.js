/* Asymmetric Scene 3: Digital Signature Flow */
const AsymScene3 = {
  totalSteps: 5,

  steps: [
    {
      zh: 'Alice 想向 Bob 證明一份文件確實是她發出的，且內容未被篡改。這需要用到「數位簽章」。',
      en: 'Alice wants to prove to Bob that a document was indeed sent by her and hasn\'t been tampered with. This requires a "Digital Signature."'
    },
    {
      zh: '簽章過程：Alice 先對文件內容計算 Hash（雜湊摘要），然後用自己的 Private Key 加密這個 Hash → 產生「數位簽章」。',
      en: 'Signing process: Alice first computes a Hash (digest) of the document, then encrypts this Hash with her own Private Key → producing the "Digital Signature."'
    },
    {
      zh: 'Alice 將「原始文件 + 數位簽章」一起傳送給 Bob。文件本身不加密（簽章的目的是驗證，不是保密）。',
      en: 'Alice sends the "original document + digital signature" together to Bob. The document itself is not encrypted (signing is for verification, not secrecy).'
    },
    {
      zh: 'Bob 驗證簽章：① 用 Alice 的 Public Key 解密簽章 → 取回 Hash A。② 自行對文件計算 Hash → 得到 Hash B。③ 比對 Hash A === Hash B → ✅ 簽章有效！',
      en: 'Bob verifies: ① Decrypt signature with Alice\'s Public Key → get Hash A. ② Compute hash of document → get Hash B. ③ Compare Hash A === Hash B → ✅ Signature valid!'
    },
    {
      zh: '數位簽章提供三大保證：完整性（文件未被篡改）、身份驗證（確認是 Alice 發出的）、不可否認性（Alice 無法否認，因為只有她有 Private Key）。',
      en: 'Digital signatures provide three guarantees: Integrity (document not tampered), Authentication (confirms Alice sent it), Non-repudiation (Alice cannot deny it — only she has the Private Key).'
    }
  ],

  render(container) {
    container.innerHTML = `
      <div style="width:100%;max-width:900px">
        <div style="display:flex;align-items:flex-start;justify-content:center;gap:20px">

          <!-- Left: Signing Process -->
          <div style="flex:1;max-width:400px;display:flex;flex-direction:column;gap:8px">
            <div style="text-align:center;font-size:12px;font-weight:700;color:var(--accent-purple);padding:4px;opacity:0" id="asym3-sign-title">
              <span class="zh">✍️ Alice 簽章過程</span>
              <span class="en">Alice's Signing Process</span>
            </div>

            <!-- Alice + Document -->
            <div id="asym3-alice" style="opacity:0;display:flex;align-items:center;gap:12px;padding:10px 14px;background:var(--bg-card);border:1px solid var(--border-color);border-radius:10px">
              <div style="font-size:32px">👩</div>
              <div>
                <div class="zh" style="font-weight:600;font-size:13px">Alice</div>
                <div class="en" style="font-size:10px">Signer 簽署方</div>
              </div>
              <div style="margin-left:auto;padding:6px 10px;background:rgba(6,182,212,0.08);border:1px solid var(--accent-cyan);border-radius:6px">
                <div style="font-size:14px;text-align:center">📄</div>
                <div style="font-size:9px;color:var(--accent-cyan)">Document</div>
              </div>
            </div>

            <!-- Hash computation -->
            <div id="asym3-hash" style="opacity:0;padding:10px 14px;background:rgba(6,182,212,0.06);border:1px dashed var(--accent-cyan);border-radius:8px">
              <div style="display:flex;align-items:center;gap:8px;font-size:10px;flex-wrap:wrap">
                <span style="color:var(--text-dim)">SHA-256(</span>
                <span style="padding:2px 6px;background:rgba(6,182,212,0.1);border:1px solid var(--accent-cyan);border-radius:4px;color:var(--accent-cyan);font-size:9px">📄 Document</span>
                <span style="color:var(--text-dim)">) →</span>
                <span style="padding:2px 8px;background:rgba(245,158,11,0.1);border:1px solid var(--accent-yellow);border-radius:4px;color:var(--accent-yellow);font-family:var(--font-mono);font-size:9px">#️⃣ Hash: a3f7...</span>
              </div>
            </div>

            <!-- Private Key signing -->
            <div id="asym3-signing" style="opacity:0;padding:10px 14px;background:rgba(139,92,246,0.06);border:1px solid var(--accent-purple);border-radius:8px">
              <div style="display:flex;align-items:center;gap:8px;font-size:10px;flex-wrap:wrap">
                <span style="padding:2px 6px;background:rgba(239,68,68,0.1);border:1px solid var(--accent-red);border-radius:4px;color:var(--accent-red);font-size:9px">🗝️ Alice PrivKey</span>
                <span style="color:var(--text-dim)">加密 Encrypt</span>
                <span style="padding:2px 6px;background:rgba(245,158,11,0.1);border:1px solid var(--accent-yellow);border-radius:4px;color:var(--accent-yellow);font-size:9px">#️⃣ Hash</span>
                <span style="color:var(--text-dim)">→</span>
                <span style="padding:2px 8px;background:rgba(139,92,246,0.1);border:1px solid var(--accent-purple);border-radius:4px;color:var(--accent-purple);font-family:var(--font-mono);font-size:9px">📝 Signature</span>
              </div>
            </div>

            <!-- Send -->
            <div id="asym3-send" style="opacity:0;text-align:center;padding:8px;background:rgba(59,130,246,0.06);border:1px solid var(--accent-blue);border-radius:8px">
              <div style="font-size:10px;color:var(--accent-blue);font-weight:600;margin-bottom:4px">
                <span class="zh">📤 傳送給 Bob</span>
                <span class="en">Send to Bob</span>
              </div>
              <div style="display:flex;gap:8px;justify-content:center;font-size:10px">
                <span style="padding:2px 8px;background:rgba(6,182,212,0.1);border:1px solid var(--accent-cyan);border-radius:4px;color:var(--accent-cyan)">📄 Document</span>
                <span style="color:var(--text-dim)">+</span>
                <span style="padding:2px 8px;background:rgba(139,92,246,0.1);border:1px solid var(--accent-purple);border-radius:4px;color:var(--accent-purple)">📝 Signature</span>
              </div>
            </div>
          </div>

          <!-- Right: Verification Process -->
          <div style="flex:1;max-width:440px;display:flex;flex-direction:column;gap:8px">
            <div style="text-align:center;font-size:12px;font-weight:700;color:var(--accent-green);padding:4px;opacity:0" id="asym3-verify-title">
              <span class="zh">🔍 Bob 驗證過程</span>
              <span class="en">Bob's Verification Process</span>
            </div>

            <div id="asym3-verify" style="opacity:0;padding:12px 14px;background:var(--bg-card);border:1px solid var(--border-color);border-radius:10px">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
                <div style="font-size:28px">👨</div>
                <div>
                  <div class="zh" style="font-weight:600;font-size:13px">Bob</div>
                  <div class="en" style="font-size:10px">Verifier 驗證方</div>
                </div>
              </div>

              <!-- Step 1: Decrypt -->
              <div style="margin-bottom:8px;padding:8px;background:rgba(16,185,129,0.04);border-radius:6px">
                <div style="font-size:10px;color:var(--accent-green);font-weight:600;margin-bottom:4px">① 解密簽章 Decrypt Signature</div>
                <div style="display:flex;align-items:center;gap:4px;font-size:9px;flex-wrap:wrap">
                  <span style="padding:2px 6px;background:rgba(16,185,129,0.1);border:1px solid var(--accent-green);border-radius:4px;color:var(--accent-green)">🔑 Alice PubKey</span>
                  <span style="color:var(--text-dim)"><span class="zh">解密</span><span class="en">Decrypt</span></span>
                  <span style="padding:2px 6px;background:rgba(139,92,246,0.1);border:1px solid var(--accent-purple);border-radius:4px;color:var(--accent-purple)">📝 Sig</span>
                  <span style="color:var(--text-dim)">→</span>
                  <span style="padding:2px 6px;background:rgba(245,158,11,0.1);border:1px solid var(--accent-yellow);border-radius:4px;color:var(--accent-yellow);font-family:var(--font-mono)">Hash A</span>
                </div>
              </div>

              <!-- Step 2: Compute -->
              <div style="margin-bottom:8px;padding:8px;background:rgba(6,182,212,0.04);border-radius:6px">
                <div style="font-size:10px;color:var(--accent-cyan);font-weight:600;margin-bottom:4px">② 自行計算 Hash Compute Hash</div>
                <div style="display:flex;align-items:center;gap:4px;font-size:9px;flex-wrap:wrap">
                  <span style="color:var(--text-dim)">SHA-256(</span>
                  <span style="padding:2px 6px;background:rgba(6,182,212,0.1);border:1px solid var(--accent-cyan);border-radius:4px;color:var(--accent-cyan)">📄 Doc</span>
                  <span style="color:var(--text-dim)">) →</span>
                  <span style="padding:2px 6px;background:rgba(245,158,11,0.1);border:1px solid var(--accent-yellow);border-radius:4px;color:var(--accent-yellow);font-family:var(--font-mono)">Hash B</span>
                </div>
              </div>

              <!-- Step 3: Compare -->
              <div id="asym3-compare" style="opacity:0;text-align:center;padding:8px;background:rgba(16,185,129,0.1);border:1px solid var(--accent-green);border-radius:6px">
                <div style="font-size:11px;color:var(--accent-green);font-weight:700">Hash A === Hash B ✅</div>
                <div style="font-size:9px;color:var(--accent-green);margin-top:2px">
                  <span class="zh">簽章有效！文件由 Alice 發出且未被篡改</span>
                  <span class="en">Valid! Document is from Alice and untampered</span>
                </div>
              </div>
            </div>

            <!-- Three guarantees -->
            <div id="asym3-guarantees" style="opacity:0;display:flex;gap:6px;flex-wrap:wrap;justify-content:center">
              <div style="padding:6px 10px;background:rgba(16,185,129,0.08);border:1px solid var(--accent-green);border-radius:8px;font-size:10px;text-align:center">
                <div style="color:var(--accent-green);font-weight:600">🛡️ 完整性</div>
                <div class="en" style="font-size:9px">Integrity</div>
              </div>
              <div style="padding:6px 10px;background:rgba(59,130,246,0.08);border:1px solid var(--accent-blue);border-radius:8px;font-size:10px;text-align:center">
                <div style="color:var(--accent-blue);font-weight:600">👤 身份驗證</div>
                <div class="en" style="font-size:9px">Authentication</div>
              </div>
              <div style="padding:6px 10px;background:rgba(139,92,246,0.08);border:1px solid var(--accent-purple);border-radius:8px;font-size:10px;text-align:center">
                <div style="color:var(--accent-purple);font-weight:600">📜 不可否認</div>
                <div class="en" style="font-size:9px">Non-repudiation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  activate(step) {
    switch(step) {
      case 0:
        const alice = document.getElementById('asym3-alice');
        const signTitle = document.getElementById('asym3-sign-title');
        alice.style.opacity = '1'; alice.classList.add('anim-fade-in-left');
        signTitle.style.opacity = '1';
        break;
      case 1:
        const hash = document.getElementById('asym3-hash');
        const signing = document.getElementById('asym3-signing');
        hash.style.opacity = '1'; hash.classList.add('anim-fade-in');
        setTimeout(() => { signing.style.opacity = '1'; signing.classList.add('anim-fade-in'); }, 400);
        break;
      case 2:
        const send = document.getElementById('asym3-send');
        send.style.opacity = '1'; send.classList.add('anim-fade-in-up');
        break;
      case 3:
        const verifyTitle = document.getElementById('asym3-verify-title');
        const verify = document.getElementById('asym3-verify');
        const compare = document.getElementById('asym3-compare');
        verifyTitle.style.opacity = '1';
        verify.style.opacity = '1'; verify.classList.add('anim-fade-in-right');
        setTimeout(() => { compare.style.opacity = '1'; compare.classList.add('anim-scale-in'); }, 800);
        break;
      case 4:
        const guar = document.getElementById('asym3-guarantees');
        guar.style.opacity = '1'; guar.classList.add('anim-fade-in-up');
        break;
    }
  }
};
