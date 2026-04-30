/* Scene 1: Key Pair Generation */
const Scene1 = {
  totalSteps: 5,

  steps: [
    {
      zh: '申請者（例如網站伺服器管理員）需要先產生一對金鑰。這使用了非對稱加密演算法，如 RSA 2048-bit。',
      en: 'The applicant (e.g., a web server admin) first generates a key pair using an asymmetric encryption algorithm like RSA 2048-bit.'
    },
    {
      zh: '演算法引擎開始運算，產生兩把數學上相關聯的金鑰...',
      en: 'The algorithm engine starts computing, generating two mathematically related keys...'
    },
    {
      zh: '🔑 公鑰 (Public Key)：可以公開分享給任何人，用於加密資料或驗證簽章。',
      en: '🔑 Public Key: Can be shared publicly with anyone. Used to encrypt data or verify signatures.'
    },
    {
      zh: '🗝️ 私鑰 (Private Key)：必須嚴格保密，只有擁有者可以使用。用於解密資料或建立數位簽章。',
      en: '🗝️ Private Key: Must be kept strictly secret, only the owner can use it. Used to decrypt data or create digital signatures.'
    },
    {
      zh: '重要：這兩把金鑰數學上相關，但無法從公鑰推算出私鑰。這就是非對稱加密的安全基礎。',
      en: 'Important: These two keys are mathematically related, but the private key cannot be derived from the public key. This is the security foundation of asymmetric encryption.'
    }
  ],

  render(container) {
    container.innerHTML = `
      <div class="scene-layout-row">
        <!-- Server -->
        <div class="entity-box" id="s1-server" style="opacity:0">
          <div style="font-size:48px;margin-bottom:8px">🖥️</div>
          <div class="zh" style="font-weight:600">申請者伺服器</div>
          <div class="en">Applicant Server</div>
        </div>

        <!-- Algorithm Engine -->
        <div class="entity-box" id="s1-engine" style="opacity:0">
          <div style="font-size:40px;margin-bottom:8px">⚙️</div>
          <div class="zh" style="font-weight:600;font-size:13px">RSA 2048-bit</div>
          <div class="en" style="font-size:11px">Asymmetric Algorithm</div>
          <div id="s1-gear-spin" style="display:none;margin-top:8px">
            <div class="anim-rotate" style="font-size:28px;display:inline-block">🔄</div>
          </div>
        </div>

        <!-- Keys Output -->
        <div class="scene-layout-col" id="s1-keys" style="opacity:0">
          <div class="key-badge public" id="s1-pubkey" style="opacity:0;transform:scale(0)">
            <span style="font-size:20px">🔑</span>
            <div>
              <div class="zh">公鑰 Public Key</div>
              <div style="font-size:10px;opacity:0.7;margin-top:2px">可公開分享 Shareable</div>
            </div>
          </div>
          <div class="key-badge private" id="s1-privkey" style="opacity:0;transform:scale(0)">
            <span style="font-size:20px">🗝️</span>
            <div>
              <div class="zh">私鑰 Private Key</div>
              <div style="font-size:10px;opacity:0.7;margin-top:2px">必須保密 Keep Secret</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Relationship indicator -->
      <div id="s1-relation" style="text-align:center;margin-top:20px;opacity:0">
        <div style="display:inline-flex;align-items:center;gap:12px;padding:10px 24px;background:rgba(139,92,246,0.1);border:1px solid var(--accent-purple);border-radius:12px">
          <span style="font-size:18px">🔑</span>
          <span style="color:var(--accent-purple);font-size:20px">⟷</span>
          <span style="font-size:18px">🗝️</span>
          <span style="margin-left:8px">
            <span class="zh" style="font-size:13px;color:var(--accent-purple)">數學相關，無法互推</span>
            <span class="en" style="font-size:11px">Mathematically related, cannot derive one from the other</span>
          </span>
        </div>
      </div>
    `;
  },

  activate(step) {
    const server = document.getElementById('s1-server');
    const engine = document.getElementById('s1-engine');
    const keys = document.getElementById('s1-keys');
    const gear = document.getElementById('s1-gear-spin');
    const pubkey = document.getElementById('s1-pubkey');
    const privkey = document.getElementById('s1-privkey');
    const relation = document.getElementById('s1-relation');

    switch(step) {
      case 0:
        server.style.opacity = '1';
        server.classList.add('anim-fade-in-left');
        server.classList.add('highlight');
        break;
      case 1:
        engine.style.opacity = '1';
        engine.classList.add('anim-scale-in');
        engine.classList.add('highlight');
        gear.style.display = 'block';
        server.classList.remove('highlight');
        break;
      case 2:
        keys.style.opacity = '1';
        pubkey.style.opacity = '1';
        pubkey.style.transform = 'scale(1)';
        pubkey.classList.add('anim-scale-in');
        setTimeout(() => pubkey.classList.add('anim-glow-green'), 600);
        engine.classList.remove('highlight');
        gear.style.display = 'none';
        break;
      case 3:
        privkey.style.opacity = '1';
        privkey.style.transform = 'scale(1)';
        privkey.classList.add('anim-scale-in');
        setTimeout(() => privkey.classList.add('anim-glow-red'), 600);
        break;
      case 4:
        relation.style.opacity = '1';
        relation.classList.add('anim-fade-in-up');
        break;
    }
  }
};
