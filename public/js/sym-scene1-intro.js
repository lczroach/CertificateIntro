/* Scene: Symmetric Encryption - What is it */
const SymScene1 = {
  totalSteps: 4,

  steps: [
    {
      zh: '對稱式加密是最古老也最直觀的加密方式。加密和解密使用「同一把金鑰」，就像用同一把鑰匙鎖門和開門。',
      en: 'Symmetric encryption is the oldest and most intuitive encryption method. It uses the SAME key for both encryption and decryption — like using the same key to lock and unlock a door.'
    },
    {
      zh: '發送方和接收方必須事先共享這把金鑰。金鑰的安全傳遞是對稱式加密最大的挑戰。',
      en: 'The sender and receiver must share this key beforehand. Secure key distribution is the biggest challenge of symmetric encryption.'
    },
    {
      zh: '對稱式加密的速度遠快於非對稱式加密（約快 100-1000 倍），因此常用於大量資料的加密。',
      en: 'Symmetric encryption is much faster than asymmetric encryption (about 100-1000x faster), making it ideal for encrypting large amounts of data.'
    },
    {
      zh: '在 HTTPS 連線中，TLS 握手階段使用非對稱加密交換金鑰，之後的資料傳輸則使用對稱式加密。兩者互補合作。',
      en: 'In HTTPS connections, TLS handshake uses asymmetric encryption for key exchange, then symmetric encryption for data transmission. They work together.'
    }
  ],

  render(container) {
    container.innerHTML = `
      <div class="scene-layout-row">
        <!-- Sender -->
        <div class="entity-box" id="sym1-sender" style="opacity:0">
          <div style="font-size:48px;margin-bottom:8px">👤</div>
          <div class="zh" style="font-weight:600">發送方</div>
          <div class="en">Sender</div>
        </div>

        <!-- Key in the middle -->
        <div class="scene-layout-col" id="sym1-key-area" style="opacity:0;gap:12px">
          <div style="font-size:56px;text-align:center" id="sym1-key-icon">🔐</div>
          <div style="text-align:center">
            <div class="zh" style="font-size:16px;font-weight:700;color:var(--accent-yellow)">同一把金鑰</div>
            <div class="en" style="font-size:12px">Same Key</div>
          </div>
          <div id="sym1-speed" style="opacity:0;text-align:center;margin-top:8px">
            <div style="display:inline-flex;align-items:center;gap:8px;padding:8px 16px;background:rgba(6,182,212,0.1);border:1px solid var(--accent-cyan);border-radius:10px">
              <span style="font-size:18px">⚡</span>
              <span>
                <span class="zh" style="font-size:12px;color:var(--accent-cyan)">速度快 100-1000x</span>
                <span class="en" style="font-size:10px">100-1000x faster</span>
              </span>
            </div>
          </div>
        </div>

        <!-- Receiver -->
        <div class="entity-box" id="sym1-receiver" style="opacity:0">
          <div style="font-size:48px;margin-bottom:8px">👤</div>
          <div class="zh" style="font-weight:600">接收方</div>
          <div class="en">Receiver</div>
        </div>
      </div>

      <!-- Key distribution challenge -->
      <div id="sym1-challenge" style="text-align:center;margin-top:16px;opacity:0">
        <div style="display:inline-flex;align-items:center;gap:8px;padding:10px 24px;background:rgba(245,158,11,0.1);border:1px solid var(--accent-yellow);border-radius:12px">
          <span style="font-size:18px">⚠️</span>
          <span>
            <span class="zh" style="font-size:13px;color:var(--accent-yellow)">挑戰：如何安全地將金鑰傳遞給對方？</span>
            <span class="en" style="font-size:11px">Challenge: How to securely deliver the key to the other party?</span>
          </span>
        </div>
      </div>

      <!-- TLS combo -->
      <div id="sym1-tls" style="text-align:center;margin-top:12px;opacity:0">
        <div style="display:inline-flex;align-items:center;gap:16px;padding:12px 24px;background:rgba(16,185,129,0.1);border:1px solid var(--accent-green);border-radius:12px">
          <div style="text-align:center">
            <div style="font-size:22px">🔑🗝️</div>
            <div class="zh" style="font-size:10px;color:var(--text-secondary)">非對稱加密</div>
            <div class="en" style="font-size:9px">Asymmetric</div>
          </div>
          <div style="font-size:20px;color:var(--accent-green)">+</div>
          <div style="text-align:center">
            <div style="font-size:22px">🔐</div>
            <div class="zh" style="font-size:10px;color:var(--text-secondary)">對稱加密</div>
            <div class="en" style="font-size:9px">Symmetric</div>
          </div>
          <div style="font-size:20px;color:var(--accent-green)">=</div>
          <div style="text-align:center">
            <div style="font-size:22px">🔒</div>
            <div style="font-size:11px;color:var(--accent-green);font-weight:600">TLS/HTTPS</div>
            <div class="zh" style="font-size:9px;color:var(--accent-green)">最佳組合</div>
            <div class="en" style="font-size:9px;color:var(--accent-green)">Best Combo</div>
          </div>
        </div>
      </div>
    `;
  },

  activate(step) {
    const sender = document.getElementById('sym1-sender');
    const keyArea = document.getElementById('sym1-key-area');
    const receiver = document.getElementById('sym1-receiver');
    const challenge = document.getElementById('sym1-challenge');
    const speed = document.getElementById('sym1-speed');
    const tls = document.getElementById('sym1-tls');

    switch(step) {
      case 0:
        sender.style.opacity = '1'; sender.classList.add('anim-fade-in-left');
        keyArea.style.opacity = '1'; keyArea.classList.add('anim-scale-in');
        receiver.style.opacity = '1'; receiver.classList.add('anim-fade-in-right');
        break;
      case 1:
        challenge.style.opacity = '1'; challenge.classList.add('anim-fade-in-up');
        break;
      case 2:
        speed.style.opacity = '1'; speed.classList.add('anim-fade-in-up');
        break;
      case 3:
        tls.style.opacity = '1'; tls.classList.add('anim-fade-in-up');
        break;
    }
  }
};
