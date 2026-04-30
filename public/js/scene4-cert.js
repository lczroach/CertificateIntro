/* Scene 4: Certificate Content */
const Scene4 = {
  totalSteps: 6,

  steps: [
    {
      zh: 'CA 回傳的憑證遵循 X.509 v3 標準格式。以下是憑證中包含的所有重要欄位：',
      en: 'The certificate returned by the CA follows the X.509 v3 standard format. Below are all the important fields included in the certificate:'
    },
    {
      zh: '基本資訊：版本號 (X.509 v3)、序號 (唯一識別碼)、簽章演算法 (SHA-256 with RSA)。',
      en: 'Basic info: Version (X.509 v3), Serial Number (unique identifier), Signature Algorithm (SHA-256 with RSA).'
    },
    {
      zh: 'Issuer（簽發者）：CA 的身份資訊。Validity Period（有效期間）：憑證的有效起迄日期。',
      en: 'Issuer: CA identity information. Validity Period: The start and end dates of certificate validity.'
    },
    {
      zh: 'Subject（主體）：申請者資訊（來自 CSR）。Subject Public Key Info：申請者的公鑰資訊。',
      en: 'Subject: Applicant information (from CSR). Subject Public Key Info: The applicant\'s public key information.'
    },
    {
      zh: 'Extensions 擴充欄位：SAN（Subject Alternative Name）可支援多個網域名稱；Key Usage 定義金鑰用途；Basic Constraints 標示是否為 CA 憑證。',
      en: 'Extensions: SAN (Subject Alternative Name) supports multiple domain names; Key Usage defines key purposes; Basic Constraints indicates whether it is a CA certificate.'
    },
    {
      zh: '最後是 CA 的數位簽章。瀏覽器會用 CA 的公鑰驗證此簽章，確認憑證未被篡改且確實由受信任的 CA 簽署。',
      en: 'Finally, the CA\'s digital signature. Browsers verify this signature using the CA\'s public key, confirming the certificate hasn\'t been tampered with and was indeed signed by a trusted CA.'
    }
  ],

  render(container) {
    container.innerHTML = `
      <div class="scene-layout-row" style="align-items:flex-start">
        <!-- Certificate Document -->
        <div class="document-visual" id="s4-cert" style="opacity:0;min-width:380px;max-width:440px">
          <div class="doc-header" style="background:linear-gradient(135deg,rgba(59,130,246,0.1),rgba(16,185,129,0.1));border-radius:8px;padding:12px;margin:-8px -8px 12px -8px;border-bottom:none">
            <div style="font-size:20px;margin-bottom:4px">📜</div>
            <span class="zh" style="font-size:15px">X.509 v3 數位憑證</span>
            <span class="en" style="font-size:12px">X.509 v3 Digital Certificate</span>
          </div>

          <!-- Group 1: Basic Info -->
          <div id="s4-group1" style="opacity:0">
            <div style="font-size:11px;color:var(--accent-blue);font-weight:600;margin:8px 0 4px;padding-left:4px">
              <span class="zh">基本資訊</span>
              <span class="en">Basic Info</span>
            </div>
            <div class="data-field visible" style="opacity:1;transform:none">
              <span class="field-label">Version</span>
              <span class="field-value">v3</span>
            </div>
            <div class="data-field visible" style="opacity:1;transform:none">
              <span class="field-label">Serial Number</span>
              <span class="field-value" style="font-family:var(--font-mono);font-size:11px">04:a1:2b:3c:...</span>
            </div>
            <div class="data-field visible" style="opacity:1;transform:none">
              <span class="field-label">Signature Algo</span>
              <span class="field-value" style="font-family:var(--font-mono);font-size:11px">SHA-256 with RSA</span>
            </div>
          </div>

          <!-- Group 2: Issuer & Validity -->
          <div id="s4-group2" style="opacity:0">
            <div style="font-size:11px;color:var(--accent-purple);font-weight:600;margin:10px 0 4px;padding-left:4px">
              <span class="zh">簽發者 & 有效期</span>
              <span class="en">Issuer & Validity</span>
            </div>
            <div class="data-field visible" style="opacity:1;transform:none">
              <span class="field-label">Issuer</span>
              <span class="field-value" style="font-size:11px">CN=DigiCert Global G2, O=DigiCert Inc</span>
            </div>
            <div class="data-field visible" style="opacity:1;transform:none">
              <span class="field-label">Not Before</span>
              <span class="field-value" style="font-family:var(--font-mono);font-size:11px">2025-01-01 00:00:00 UTC</span>
            </div>
            <div class="data-field visible" style="opacity:1;transform:none">
              <span class="field-label">Not After</span>
              <span class="field-value" style="font-family:var(--font-mono);font-size:11px">2026-12-31 23:59:59 UTC</span>
            </div>
          </div>

          <!-- Group 3: Subject & Public Key -->
          <div id="s4-group3" style="opacity:0">
            <div style="font-size:11px;color:var(--accent-green);font-weight:600;margin:10px 0 4px;padding-left:4px">
              <span class="zh">主體 & 公鑰</span>
              <span class="en">Subject & Public Key</span>
            </div>
            <div class="data-field visible" style="opacity:1;transform:none">
              <span class="field-label">Subject CN</span>
              <span class="field-value">www.example.com</span>
            </div>
            <div class="data-field visible" style="opacity:1;transform:none">
              <span class="field-label">Subject O</span>
              <span class="field-value">Example Corp.</span>
            </div>
            <div class="data-field visible" style="opacity:1;transform:none;border-color:var(--accent-green)">
              <span class="field-label" style="color:var(--accent-green)">🔑 Public Key</span>
              <span class="field-value" style="font-family:var(--font-mono);font-size:11px">RSA 2048-bit</span>
            </div>
          </div>

          <!-- Group 4: Extensions -->
          <div id="s4-group4" style="opacity:0">
            <div style="font-size:11px;color:var(--accent-cyan);font-weight:600;margin:10px 0 4px;padding-left:4px">
              <span class="zh">擴充欄位</span>
              <span class="en">Extensions</span>
            </div>
            <div class="data-field visible" style="opacity:1;transform:none">
              <span class="field-label">SAN</span>
              <span class="field-value" style="font-size:11px">example.com, www.example.com, api.example.com</span>
            </div>
            <div class="data-field visible" style="opacity:1;transform:none">
              <span class="field-label">Key Usage</span>
              <span class="field-value" style="font-size:11px">Digital Signature, Key Encipherment</span>
            </div>
            <div class="data-field visible" style="opacity:1;transform:none">
              <span class="field-label">Basic Constraints</span>
              <span class="field-value" style="font-size:11px">CA: FALSE</span>
            </div>
          </div>

          <!-- Group 5: Digital Signature -->
          <div id="s4-group5" style="opacity:0">
            <div style="font-size:11px;color:var(--accent-red);font-weight:600;margin:10px 0 4px;padding-left:4px">
              <span class="zh">CA 數位簽章</span>
              <span class="en">CA Digital Signature</span>
            </div>
            <div class="data-field visible" style="opacity:1;transform:none;border-color:var(--accent-red);background:rgba(239,68,68,0.05)">
              <span class="field-label" style="color:var(--accent-red)">🗝️ Signature</span>
              <span class="field-value" style="font-family:var(--font-mono);font-size:10px;word-break:break-all">7a:3b:c2:91:f4:d8:2e:a5:...</span>
            </div>
          </div>

          <!-- Stamp -->
          <div class="stamp" id="s4-stamp" style="right:-20px;bottom:-10px">
            <div>
              <div>✓ TRUSTED</div>
              <div style="font-size:9px;margin-top:2px">CA VERIFIED</div>
            </div>
          </div>
        </div>

        <!-- Right side: Verification flow -->
        <div class="scene-layout-col" id="s4-verify" style="opacity:0;gap:12px;min-width:200px">
          <div style="font-size:13px;font-weight:600;text-align:center">
            <span class="zh">瀏覽器驗證流程</span>
            <span class="en">Browser Verification</span>
          </div>
          <div style="font-size:40px;text-align:center">🌐</div>
          <div style="font-size:12px;text-align:center;padding:10px;background:var(--bg-card);border-radius:8px;border:1px solid var(--border-color)">
            <div class="zh">1. 取得 CA 公鑰<br>2. 驗證簽章有效性<br>3. 檢查有效期間<br>4. 確認未被撤銷</div>
            <div class="en" style="margin-top:6px">1. Get CA public key<br>2. Verify signature<br>3. Check validity period<br>4. Confirm not revoked</div>
          </div>
          <div style="font-size:28px;text-align:center;opacity:0" id="s4-lock">🔒</div>
          <div style="font-size:12px;text-align:center;color:var(--accent-green);font-weight:600;opacity:0" id="s4-secure">
            <span class="zh">連線安全！</span>
            <span class="en">Connection Secure!</span>
          </div>
        </div>
      </div>
    `;
  },

  activate(step) {
    const cert = document.getElementById('s4-cert');
    const g1 = document.getElementById('s4-group1');
    const g2 = document.getElementById('s4-group2');
    const g3 = document.getElementById('s4-group3');
    const g4 = document.getElementById('s4-group4');
    const g5 = document.getElementById('s4-group5');
    const stamp = document.getElementById('s4-stamp');
    const verify = document.getElementById('s4-verify');
    const lock = document.getElementById('s4-lock');
    const secure = document.getElementById('s4-secure');

    switch(step) {
      case 0:
        cert.style.opacity = '1';
        cert.classList.add('anim-fade-in-left');
        break;
      case 1:
        g1.style.opacity = '1';
        g1.classList.add('anim-fade-in-up');
        break;
      case 2:
        g2.style.opacity = '1';
        g2.classList.add('anim-fade-in-up');
        break;
      case 3:
        g3.style.opacity = '1';
        g3.classList.add('anim-fade-in-up');
        break;
      case 4:
        g4.style.opacity = '1';
        g4.classList.add('anim-fade-in-up');
        break;
      case 5:
        g5.style.opacity = '1';
        g5.classList.add('anim-fade-in-up');
        stamp.classList.add('visible');
        stamp.classList.add('anim-stamp-in');
        verify.style.opacity = '1';
        verify.classList.add('anim-fade-in-right');
        setTimeout(() => {
          lock.style.opacity = '1';
          lock.classList.add('anim-scale-in');
        }, 600);
        setTimeout(() => {
          secure.style.opacity = '1';
          secure.classList.add('anim-fade-in-up');
        }, 1000);
        break;
    }
  }
};
