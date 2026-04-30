/* Scene 2: CSR Content */
const Scene2 = {
  totalSteps: 6,

  steps: [
    {
      zh: '有了金鑰對之後，申請者需要建立一個「憑證簽署請求」(CSR)，向 CA 申請憑證。',
      en: 'After generating the key pair, the applicant creates a Certificate Signing Request (CSR) to apply for a certificate from a CA.'
    },
    {
      zh: 'CSR 包含 Subject 資訊，用來識別憑證擁有者的身份：',
      en: 'The CSR contains Subject information to identify the certificate owner:'
    },
    {
      zh: 'CSR 也包含申請者的公鑰。CA 之後會將此公鑰嵌入最終的憑證中。',
      en: 'The CSR also includes the applicant\'s public key. The CA will later embed this public key into the final certificate.'
    },
    {
      zh: '指定簽章演算法（如 SHA-256 with RSA），決定如何對 CSR 進行數位簽章。',
      en: 'A signature algorithm (e.g., SHA-256 with RSA) is specified, determining how the CSR will be digitally signed.'
    },
    {
      zh: '最後，申請者用自己的「私鑰」對整個 CSR 進行簽章。這證明了申請者確實擁有對應的私鑰。',
      en: 'Finally, the applicant signs the entire CSR with their private key. This proves the applicant actually possesses the corresponding private key.'
    },
    {
      zh: 'CSR 建立完成！這份文件將被發送給 CA 進行驗證和簽署。',
      en: 'CSR creation complete! This document will be sent to the CA for validation and signing.'
    }
  ],

  render(container) {
    container.innerHTML = `
      <div class="scene-layout-row">
        <!-- CSR Document -->
        <div class="document-visual" id="s2-csr" style="opacity:0">
          <div class="doc-header">
            <span class="zh">📄 憑證簽署請求 CSR</span>
            <span class="en">Certificate Signing Request</span>
          </div>

          <div id="s2-fields">
            <div class="data-field" data-step="1">
              <span class="field-label">CN (Common Name)</span>
              <span class="field-value">www.example.com</span>
            </div>
            <div class="data-field" data-step="1">
              <span class="field-label">O (Organization)</span>
              <span class="field-value">Example Corp.</span>
            </div>
            <div class="data-field" data-step="1">
              <span class="field-label">OU (Org Unit)</span>
              <span class="field-value">IT Department</span>
            </div>
            <div class="data-field" data-step="1">
              <span class="field-label">C (Country)</span>
              <span class="field-value">TW</span>
            </div>
            <div class="data-field" data-step="1">
              <span class="field-label">ST (State)</span>
              <span class="field-value">Taiwan</span>
            </div>
            <div class="data-field" data-step="1">
              <span class="field-label">L (Locality)</span>
              <span class="field-value">Taipei</span>
            </div>

            <div class="data-field" data-step="2" style="border-color:var(--accent-green)">
              <span class="field-label" style="color:var(--accent-green)">🔑 Public Key</span>
              <span class="field-value" style="font-family:var(--font-mono);font-size:11px">RSA 2048-bit (MIIBIjAN...)</span>
            </div>

            <div class="data-field" data-step="3">
              <span class="field-label" style="color:var(--accent-cyan)">Signature Algo</span>
              <span class="field-value" style="font-family:var(--font-mono);font-size:11px">SHA-256 with RSA</span>
            </div>

            <div class="data-field" data-step="4" style="border-color:var(--accent-red)">
              <span class="field-label" style="color:var(--accent-red)">🗝️ Self-Signature</span>
              <span class="field-value" style="font-family:var(--font-mono);font-size:11px">3a:f2:b1:9c:...</span>
            </div>
          </div>
        </div>

        <!-- Key reference -->
        <div class="scene-layout-col" id="s2-keyref" style="opacity:0">
          <div style="font-size:14px;color:var(--text-dim);text-align:center;margin-bottom:8px">
            <span class="zh">使用金鑰</span>
            <span class="en">Using Keys</span>
          </div>
          <div class="key-badge public" id="s2-pubkey-ref" style="opacity:0">
            <span style="font-size:18px">🔑</span>
            <div>
              <div style="font-size:12px">公鑰 Public Key</div>
              <div style="font-size:10px;opacity:0.6;margin-top:2px">嵌入 CSR Embedded</div>
            </div>
          </div>
          <div style="font-size:20px;color:var(--text-dim);opacity:0" id="s2-arrow-down">↓</div>
          <div class="key-badge private" id="s2-privkey-ref" style="opacity:0">
            <span style="font-size:18px">🗝️</span>
            <div>
              <div style="font-size:12px">私鑰 Private Key</div>
              <div style="font-size:10px;opacity:0.6;margin-top:2px">簽章 Signing</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Ready badge -->
      <div id="s2-ready" style="text-align:center;margin-top:16px;opacity:0">
        <div style="display:inline-flex;align-items:center;gap:8px;padding:10px 24px;background:rgba(16,185,129,0.12);border:1px solid var(--accent-green);border-radius:12px">
          <span style="font-size:20px">✅</span>
          <span>
            <span class="zh" style="font-size:14px;color:var(--accent-green);font-weight:600">CSR 已備妥，準備送出</span>
            <span class="en" style="font-size:12px">CSR ready to submit</span>
          </span>
        </div>
      </div>
    `;
  },

  activate(step) {
    const csr = document.getElementById('s2-csr');
    const keyref = document.getElementById('s2-keyref');
    const fields = document.querySelectorAll('#s2-fields .data-field');
    const pubref = document.getElementById('s2-pubkey-ref');
    const privref = document.getElementById('s2-privkey-ref');
    const arrowDown = document.getElementById('s2-arrow-down');
    const ready = document.getElementById('s2-ready');

    switch(step) {
      case 0:
        csr.style.opacity = '1';
        csr.classList.add('anim-fade-in-left');
        break;
      case 1:
        fields.forEach(f => {
          if (f.dataset.step === '1') {
            f.classList.add('visible');
          }
        });
        break;
      case 2:
        keyref.style.opacity = '1';
        keyref.classList.add('anim-fade-in-right');
        pubref.style.opacity = '1';
        pubref.classList.add('anim-scale-in');
        fields.forEach(f => {
          if (f.dataset.step === '2') {
            f.classList.add('visible');
            f.classList.add('highlight');
          }
        });
        break;
      case 3:
        fields.forEach(f => {
          if (f.dataset.step === '3') {
            f.classList.add('visible');
            f.classList.add('highlight');
          }
        });
        break;
      case 4:
        arrowDown.style.opacity = '1';
        privref.style.opacity = '1';
        privref.classList.add('anim-scale-in');
        fields.forEach(f => {
          if (f.dataset.step === '4') {
            f.classList.add('visible');
            f.classList.add('highlight');
          }
        });
        break;
      case 5:
        csr.classList.add('highlight');
        csr.style.borderColor = 'var(--accent-green)';
        csr.style.boxShadow = '0 0 20px rgba(16,185,129,0.3)';
        ready.style.opacity = '1';
        ready.classList.add('anim-fade-in-up');
        break;
    }
  }
};
