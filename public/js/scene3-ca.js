/* Scene 3: CA Authorization Process */
const Scene3 = {
  totalSteps: 7,

  steps: [
    {
      zh: '申請者將 CSR 提交給憑證授權機構 (CA)。CA 是受信任的第三方機構，負責驗證並簽署憑證。',
      en: 'The applicant submits the CSR to a Certificate Authority (CA). The CA is a trusted third party responsible for validating and signing certificates.'
    },
    {
      zh: 'CA 首先驗證 CSR 中的資訊。依據驗證等級不同，分為三種類型：',
      en: 'The CA first validates the information in the CSR. There are three validation levels:'
    },
    {
      zh: 'DV (Domain Validation)：僅驗證網域控制權（最基本，如 Let\'s Encrypt）。OV：額外驗證組織身份。EV：最嚴格驗證，包含法律實體確認。',
      en: 'DV (Domain Validation): Only verifies domain ownership (basic, e.g., Let\'s Encrypt). OV: Additional organization identity verification. EV: Strictest level, includes legal entity confirmation.'
    },
    {
      zh: '驗證通過後，CA 使用自己的私鑰對憑證資料進行數位簽章，產生最終的憑證。',
      en: 'After validation passes, the CA uses its own private key to digitally sign the certificate data, producing the final certificate.'
    },
    {
      zh: '信任鏈 (Chain of Trust)：Root CA → Intermediate CA → 終端憑證。瀏覽器內建了受信任的 Root CA 清單。',
      en: 'Chain of Trust: Root CA → Intermediate CA → End-Entity Certificate. Browsers have a built-in list of trusted Root CAs.'
    },
    {
      zh: '簽署完成！CA 將已簽署的憑證回傳給申請者。',
      en: 'Signing complete! The CA returns the signed certificate to the applicant.'
    },
    {
      zh: '❗ 真實案例：2011 年荷蘭 CA 「DigiNotar」被駭客入侵，導致 500+ 假憑證被簽發（包含 google.com）。伊朗政府利用這些假憑證監控人民的 Gmail 通訊。各大瀏覽器緊急移除 DigiNotar，該公司隨後破產。這證明了 CA 的信任是整個憑證體系的核心 — 一旦 CA 被攻破，所有它簽發的憑證都不可信。',
      en: '❗ Real-world case: In 2011, Dutch CA "DigiNotar" was hacked, resulting in 500+ fraudulent certificates (including google.com). The Iranian government used these fake certs to surveil citizens\' Gmail. All major browsers emergency-removed DigiNotar, and the company went bankrupt. This proves CA trust is the core of the entire certificate system — once a CA is compromised, all its issued certificates become untrustworthy.'
    }
  ],

  render(container) {
    container.innerHTML = `
      <div class="scene-layout-row">
        <!-- Applicant side -->
        <div class="scene-layout-col" id="s3-applicant" style="opacity:0">
          <div class="entity-box" style="min-width:140px">
            <div style="font-size:36px;margin-bottom:6px">🖥️</div>
            <div class="zh" style="font-size:13px;font-weight:600">申請者</div>
            <div class="en" style="font-size:11px">Applicant</div>
          </div>
          <div id="s3-csr-doc" style="opacity:0;margin-top:4px">
            <div style="font-size:28px;text-align:center">📄</div>
            <div style="font-size:11px;text-align:center;color:var(--text-secondary)">CSR</div>
          </div>
        </div>

        <!-- Arrow / Flow -->
        <div class="scene-layout-col" id="s3-flow" style="opacity:0;gap:8px">
          <div id="s3-arrow-right" style="font-size:28px;color:var(--accent-blue);opacity:0">
            ──▶
          </div>
          <div id="s3-arrow-left" style="font-size:28px;color:var(--accent-green);opacity:0">
            ◀──
          </div>
        </div>

        <!-- CA side -->
        <div class="scene-layout-col" id="s3-ca" style="opacity:0">
          <div class="entity-box" id="s3-ca-box" style="min-width:160px">
            <div style="font-size:36px;margin-bottom:6px">🏛️</div>
            <div class="zh" style="font-size:13px;font-weight:600">憑證授權機構</div>
            <div class="en" style="font-size:11px">Certificate Authority</div>
          </div>

          <!-- Validation levels -->
          <div id="s3-validation" style="opacity:0;margin-top:4px">
            <div class="data-field visible" style="opacity:1;transform:none;margin:3px 0;font-size:12px;padding:6px 10px;background:rgba(16,185,129,0.08);border:1px solid var(--accent-green);border-radius:6px">
              <span class="field-label" style="min-width:30px;color:var(--accent-green);font-size:11px">DV</span>
              <span class="field-value" style="font-size:11px">
                <span class="zh">驗證網域控制權</span>
                <span class="en">Domain Validation</span>
              </span>
            </div>
            <div class="data-field visible" style="opacity:1;transform:none;margin:3px 0;font-size:12px;padding:6px 10px;background:rgba(139,92,246,0.08);border:1px solid var(--accent-purple);border-radius:6px">
              <span class="field-label" style="min-width:30px;color:var(--accent-purple);font-size:11px">OV</span>
              <span class="field-value" style="font-size:11px">
                <span class="zh">+ 組織身份驗證</span>
                <span class="en">+ Organization Validation</span>
              </span>
            </div>
            <div class="data-field visible" style="opacity:1;transform:none;margin:3px 0;font-size:12px;padding:6px 10px;background:rgba(245,158,11,0.08);border:1px solid var(--accent-yellow);border-radius:6px">
              <span class="field-label" style="min-width:30px;color:var(--accent-yellow);font-size:11px">EV</span>
              <span class="field-value" style="font-size:11px">
                <span class="zh">+ 法律實體確認</span>
                <span class="en">+ Legal Entity Confirmation</span>
              </span>
            </div>
          </div>

          <!-- CA signing visual -->
          <div id="s3-signing" style="opacity:0;text-align:center;margin-top:6px">
            <div class="key-badge private" style="font-size:12px;padding:6px 12px">
              <span style="font-size:16px">🗝️</span>
              <div>
                <div style="font-size:11px">CA 私鑰簽章</div>
                <div class="en" style="font-size:10px;margin-top:1px">CA Private Key Signing</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust Chain -->
        <div class="scene-layout-col" id="s3-chain" style="opacity:0">
          <div style="font-size:12px;color:var(--text-dim);text-align:center;margin-bottom:4px">
            <span class="zh">信任鏈</span>
            <span class="en">Chain of Trust</span>
          </div>
          <div class="trust-chain">
            <div class="chain-node root visible" style="opacity:1;transform:none;padding:8px 14px;font-size:12px">
              <div>🏛️ Root CA</div>
              <div style="font-size:10px;opacity:0.7;margin-top:2px">瀏覽器內建信任 Built-in Trust</div>
            </div>
            <div class="chain-arrow visible" style="opacity:1">↓</div>
            <div class="chain-node intermediate visible" style="opacity:1;transform:none;padding:8px 14px;font-size:12px">
              <div>📋 Intermediate CA</div>
              <div style="font-size:10px;opacity:0.7;margin-top:2px">中繼 CA Intermediary</div>
            </div>
            <div class="chain-arrow visible" style="opacity:1">↓</div>
            <div class="chain-node end-entity visible" style="opacity:1;transform:none;padding:8px 14px;font-size:12px">
              <div>📜 End-Entity Cert</div>
              <div style="font-size:10px;opacity:0.7;margin-top:2px">你的憑證 Your Certificate</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Completion badge -->
      <div id="s3-complete" style="text-align:center;margin-top:16px;opacity:0">
        <div style="display:inline-flex;align-items:center;gap:8px;padding:10px 24px;background:rgba(16,185,129,0.12);border:1px solid var(--accent-green);border-radius:12px">
          <span style="font-size:20px">📜</span>
          <span>
            <span class="zh" style="font-size:14px;color:var(--accent-green);font-weight:600">已簽署的憑證回傳給申請者</span>
            <span class="en" style="font-size:12px">Signed certificate returned to applicant</span>
          </span>
        </div>
      </div>

      <!-- DigiNotar Incident -->
      <div id="s3-diginotar" style="opacity:0;margin-top:12px;margin-left:5px">
        <div style="padding:12px 16px;background:rgba(239,68,68,0.06);border:1px solid var(--accent-red);border-radius:12px">
          <div style="display:flex;align-items:flex-start;gap:12px">
            <div style="font-size:28px;flex-shrink:0">⚠️</div>
            <div style="flex:1">
              <div style="font-size:13px;font-weight:700;color:var(--accent-red);margin-bottom:6px">
                <span class="zh">真實案例：DigiNotar 事件 (2011)</span>
                <span class="en">Real Case: DigiNotar Incident (2011)</span>
              </div>
              <div style="display:flex;flex-direction:column;gap:6px;font-size:11px">
                <div style="display:flex;align-items:flex-start;gap:8px">
                  <span style="color:var(--accent-red);flex-shrink:0">🔴</span>
                  <div>
                    <span class="zh" style="color:var(--text-primary)">荷蘭 CA 「DigiNotar」被駭客入侵，簽發了 500+ 張假憑證（包含 google.com）</span>
                    <span class="en" style="color:var(--text-primary)">Dutch CA "DigiNotar" was hacked, 500+ fraudulent certs issued (incl. google.com)</span>
                  </div>
                </div>
                <div style="display:flex;align-items:flex-start;gap:8px">
                  <span style="color:var(--accent-red);flex-shrink:0">🔴</span>
                  <div>
                    <span class="zh" style="color:var(--text-primary)">伊朗政府利用假憑證監控人民的 Gmail 通訊（中間人攻擊 MITM）</span>
                    <span class="en" style="color:var(--text-primary)">Iranian gov used fake certs to surveil citizens' Gmail (MITM attack)</span>
                  </div>
                </div>
                <div style="display:flex;align-items:flex-start;gap:8px">
                  <span style="color:var(--accent-red);flex-shrink:0">🔴</span>
                  <div>
                    <span class="zh" style="color:var(--text-primary)">各大瀏覽器緊急移除 DigiNotar 信任，該公司隨後破產</span>
                    <span class="en" style="color:var(--text-primary)">All major browsers emergency-removed DigiNotar; company went bankrupt</span>
                  </div>
                </div>
              </div>
              <div style="margin-top:8px;padding:6px 10px;background:rgba(239,68,68,0.08);border-radius:6px;font-size:11px">
                <span class="zh" style="color:var(--accent-red);font-weight:600">💡 教訓：CA 的信任是整個憑證體系的核心 — 一旦 CA 被攻破，所有它簽發的憑證都不可信。</span>
                <span class="en" style="color:var(--accent-red);font-weight:600">💡 Lesson: CA trust is the foundation — once compromised, all its certificates become untrustworthy.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  activate(step) {
    const applicant = document.getElementById('s3-applicant');
    const csrDoc = document.getElementById('s3-csr-doc');
    const flow = document.getElementById('s3-flow');
    const arrowRight = document.getElementById('s3-arrow-right');
    const arrowLeft = document.getElementById('s3-arrow-left');
    const ca = document.getElementById('s3-ca');
    const caBox = document.getElementById('s3-ca-box');
    const validation = document.getElementById('s3-validation');
    const signing = document.getElementById('s3-signing');
    const chain = document.getElementById('s3-chain');
    const complete = document.getElementById('s3-complete');

    switch(step) {
      case 0:
        applicant.style.opacity = '1';
        applicant.classList.add('anim-fade-in-left');
        csrDoc.style.opacity = '1';
        flow.style.opacity = '1';
        arrowRight.style.opacity = '1';
        ca.style.opacity = '1';
        ca.classList.add('anim-fade-in-right');
        break;
      case 1:
        caBox.classList.add('highlight');
        validation.style.opacity = '1';
        validation.classList.add('anim-fade-in-up');
        break;
      case 2:
        // Highlight validation items sequentially
        const items = validation.querySelectorAll('.data-field');
        items.forEach((item, i) => {
          setTimeout(() => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 0 12px rgba(255,255,255,0.1)';
            setTimeout(() => {
              item.style.transform = 'scale(1)';
              item.style.boxShadow = 'none';
            }, 600);
          }, i * 400);
        });
        break;
      case 3:
        caBox.classList.remove('highlight');
        signing.style.opacity = '1';
        signing.classList.add('anim-scale-in');
        break;
      case 4:
        chain.style.opacity = '1';
        chain.classList.add('anim-fade-in-right');
        break;
      case 5:
        arrowLeft.style.opacity = '1';
        arrowLeft.classList.add('anim-fade-in-left');
        complete.style.opacity = '1';
        complete.classList.add('anim-fade-in-up');
        break;
      case 6:
        const diginotar = document.getElementById('s3-diginotar');
        diginotar.style.opacity = '1';
        diginotar.classList.add('anim-fade-in-up');
        break;
    }
  }
};
