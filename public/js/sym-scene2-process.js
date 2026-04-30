/* Scene: Symmetric Encryption - Encryption Process */
const SymScene2 = {
  totalSteps: 5,

  steps: [
    {
      zh: '加密過程：發送方有一段明文 (Plaintext) 需要安全地傳送給接收方。',
      en: 'Encryption process: The sender has plaintext that needs to be securely transmitted to the receiver.'
    },
    {
      zh: '發送方使用共享的對稱金鑰，透過加密演算法將明文轉換成密文 (Ciphertext)。',
      en: 'The sender uses the shared symmetric key, transforming plaintext into ciphertext through an encryption algorithm.'
    },
    {
      zh: '密文在網路上傳輸。即使被攔截，沒有金鑰也無法還原成原始內容。',
      en: 'Ciphertext is transmitted over the network. Even if intercepted, it cannot be restored without the key.'
    },
    {
      zh: '接收方收到密文後，使用「同一把金鑰」透過解密演算法還原成明文。',
      en: 'The receiver receives the ciphertext and restores it to plaintext using the SAME key through a decryption algorithm.'
    },
    {
      zh: '整個過程中，只要金鑰不外洩，傳輸內容就是安全的。金鑰長度越長（如 AES-256），安全性越高。',
      en: 'Throughout the process, as long as the key is not leaked, the transmission is secure. Longer key lengths (e.g., AES-256) provide higher security.'
    }
  ],

  render(container) {
    container.innerHTML = `
      <div style="width:100%;max-width:800px">
        <!-- Flow diagram -->
        <div style="display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap">
          <!-- Plaintext -->
          <div class="entity-box" id="sym2-plain" style="opacity:0;min-width:130px;padding:14px">
            <div style="font-size:28px;margin-bottom:6px">📝</div>
            <div class="zh" style="font-size:13px;font-weight:600">明文</div>
            <div class="en" style="font-size:11px">Plaintext</div>
            <div style="font-family:var(--font-mono);font-size:10px;color:var(--accent-green);margin-top:6px;padding:4px 8px;background:rgba(16,185,129,0.1);border-radius:4px">
              "Hello World!"
            </div>
          </div>

          <!-- Arrow + Key -->
          <div class="scene-layout-col" id="sym2-encrypt" style="opacity:0;gap:4px">
            <div style="font-size:20px;color:var(--accent-blue)">──▶</div>
            <div style="font-size:16px">🔐</div>
            <div class="zh" style="font-size:10px;color:var(--accent-blue)">加密</div>
            <div class="en" style="font-size:9px">Encrypt</div>
          </div>

          <!-- Ciphertext -->
          <div class="entity-box" id="sym2-cipher" style="opacity:0;min-width:130px;padding:14px">
            <div style="font-size:28px;margin-bottom:6px">🔒</div>
            <div class="zh" style="font-size:13px;font-weight:600">密文</div>
            <div class="en" style="font-size:11px">Ciphertext</div>
            <div style="font-family:var(--font-mono);font-size:10px;color:var(--accent-red);margin-top:6px;padding:4px 8px;background:rgba(239,68,68,0.1);border-radius:4px">
              "7f3a9b2c..."
            </div>
          </div>

          <!-- Network transmission -->
          <div class="scene-layout-col" id="sym2-network" style="opacity:0;gap:4px">
            <div style="font-size:20px;color:var(--accent-yellow)">〰️▶</div>
            <div style="font-size:16px">🌐</div>
            <div class="zh" style="font-size:10px;color:var(--accent-yellow)">網路傳輸</div>
            <div class="en" style="font-size:9px">Network</div>
          </div>

          <!-- Arrow + Key (decrypt) -->
          <div class="scene-layout-col" id="sym2-decrypt" style="opacity:0;gap:4px">
            <div style="font-size:20px;color:var(--accent-green)">──▶</div>
            <div style="font-size:16px">🔐</div>
            <div class="zh" style="font-size:10px;color:var(--accent-green)">解密</div>
            <div class="en" style="font-size:9px">Decrypt</div>
          </div>

          <!-- Decrypted plaintext -->
          <div class="entity-box" id="sym2-result" style="opacity:0;min-width:130px;padding:14px">
            <div style="font-size:28px;margin-bottom:6px">📝</div>
            <div class="zh" style="font-size:13px;font-weight:600">還原明文</div>
            <div class="en" style="font-size:11px">Decrypted</div>
            <div style="font-family:var(--font-mono);font-size:10px;color:var(--accent-green);margin-top:6px;padding:4px 8px;background:rgba(16,185,129,0.1);border-radius:4px">
              "Hello World!"
            </div>
          </div>
        </div>

        <!-- Interceptor warning -->
        <div id="sym2-intercept" style="text-align:center;margin-top:20px;opacity:0">
          <div style="display:inline-flex;align-items:center;gap:12px;padding:10px 20px;background:rgba(239,68,68,0.08);border:1px solid var(--accent-red);border-radius:10px">
            <span style="font-size:22px">🕵️</span>
            <div>
              <div class="zh" style="font-size:12px;color:var(--accent-red)">攻擊者攔截到密文 → 無法解讀（沒有金鑰）</div>
              <div class="en" style="font-size:10px">Attacker intercepts ciphertext → Cannot decode (no key)</div>
            </div>
            <span style="font-size:18px">❌</span>
          </div>
        </div>

        <!-- Security note -->
        <div id="sym2-security" style="text-align:center;margin-top:10px;opacity:0">
          <div style="display:inline-flex;align-items:center;gap:8px;padding:8px 20px;background:rgba(16,185,129,0.08);border:1px solid var(--accent-green);border-radius:10px">
            <span style="font-size:16px">🛡️</span>
            <span class="zh" style="font-size:12px;color:var(--accent-green)">金鑰長度越長 → 安全性越高 (AES-128 / AES-256)</span>
            <span class="en" style="font-size:10px">Longer key → Higher security</span>
          </div>
        </div>
      </div>
    `;
  },

  activate(step) {
    switch(step) {
      case 0:
        const plain = document.getElementById('sym2-plain');
        plain.style.opacity = '1'; plain.classList.add('anim-fade-in-left');
        break;
      case 1:
        const encrypt = document.getElementById('sym2-encrypt');
        const cipher = document.getElementById('sym2-cipher');
        encrypt.style.opacity = '1'; encrypt.classList.add('anim-fade-in');
        cipher.style.opacity = '1'; cipher.classList.add('anim-fade-in-right');
        break;
      case 2:
        const network = document.getElementById('sym2-network');
        const intercept = document.getElementById('sym2-intercept');
        network.style.opacity = '1'; network.classList.add('anim-fade-in');
        intercept.style.opacity = '1'; intercept.classList.add('anim-fade-in-up');
        break;
      case 3:
        const decrypt = document.getElementById('sym2-decrypt');
        const result = document.getElementById('sym2-result');
        decrypt.style.opacity = '1'; decrypt.classList.add('anim-fade-in');
        result.style.opacity = '1'; result.classList.add('anim-fade-in-right');
        break;
      case 4:
        const sec = document.getElementById('sym2-security');
        sec.style.opacity = '1'; sec.classList.add('anim-fade-in-up');
        break;
    }
  }
};
