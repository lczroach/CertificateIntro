/* Scene: Symmetric Encryption - Modes of Operation & Use Cases */
const SymScene4 = {
  totalSteps: 5,

  steps: [
    {
      zh: 'AES 等區塊加密演算法需要搭配「操作模式」來處理超過一個區塊的資料。常見的操作模式有：',
      en: 'Block ciphers like AES need "modes of operation" to handle data larger than one block. Common modes include:'
    },
    {
      zh: 'ECB 模式最簡單，但不安全（相同明文區塊 → 相同密文），絕對不建議使用。CBC 加入了初始向量 (IV) 使每個區塊不同。',
      en: 'ECB mode is simplest but insecure (same plaintext block → same ciphertext). Never recommended. CBC adds an Initialization Vector (IV) making each block different.'
    },
    {
      zh: 'GCM (Galois/Counter Mode) 是目前最推薦的模式。不僅加密資料，還提供完整性驗證 (AEAD)，確保資料未被篡改。',
      en: 'GCM (Galois/Counter Mode) is currently the most recommended mode. It not only encrypts data but also provides integrity verification (AEAD), ensuring data hasn\'t been tampered with.'
    },
    {
      zh: '對稱式加密的實際應用場景：HTTPS 資料傳輸、Wi-Fi (WPA2/WPA3)、磁碟加密 (BitLocker, FileVault)、VPN 通道、資料庫加密。',
      en: 'Real-world applications: HTTPS data transmission, Wi-Fi (WPA2/WPA3), disk encryption (BitLocker, FileVault), VPN tunnels, database encryption.'
    },
    {
      zh: '總結：對稱式加密快速高效，適合大量資料。但金鑰分發是最大挑戰，因此實務上常與非對稱加密結合使用（如 TLS）。',
      en: 'Summary: Symmetric encryption is fast and efficient, ideal for large data. But key distribution is the biggest challenge, so it\'s often combined with asymmetric encryption (e.g., TLS).'
    }
  ],

  render(container) {
    container.innerHTML = `
      <div style="width:100%;max-width:760px">
        <!-- Modes of operation -->
        <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center" id="sym4-modes">
          <!-- ECB -->
          <div class="entity-box" id="sym4-ecb" style="opacity:0;flex:1;min-width:180px;padding:14px">
            <div style="font-size:24px;margin-bottom:6px">❌</div>
            <div class="zh" style="font-weight:700;font-size:14px;color:var(--accent-red)">ECB 模式</div>
            <div class="en" style="font-size:10px">Electronic Codebook</div>
            <div style="margin-top:8px;font-size:11px;color:var(--text-secondary)">
              <div class="zh">相同輸入 → 相同輸出</div>
              <div class="en">Same input → Same output</div>
            </div>
            <div style="font-size:10px;color:var(--accent-red);margin-top:4px">不安全，勿使用</div>
          </div>

          <!-- CBC -->
          <div class="entity-box" id="sym4-cbc" style="opacity:0;flex:1;min-width:180px;padding:14px">
            <div style="font-size:24px;margin-bottom:6px">⚠️</div>
            <div class="zh" style="font-weight:700;font-size:14px;color:var(--accent-yellow)">CBC 模式</div>
            <div class="en" style="font-size:10px">Cipher Block Chaining</div>
            <div style="margin-top:8px;font-size:11px;color:var(--text-secondary)">
              <div class="zh">加入 IV，區塊鏈式連結</div>
              <div class="en">Uses IV, blocks chained</div>
            </div>
            <div style="font-size:10px;color:var(--accent-yellow);margin-top:4px">尚可，但有 padding 攻擊風險</div>
          </div>

          <!-- GCM -->
          <div class="entity-box" id="sym4-gcm" style="opacity:0;flex:1;min-width:180px;padding:14px">
            <div style="font-size:24px;margin-bottom:6px">✅</div>
            <div class="zh" style="font-weight:700;font-size:14px;color:var(--accent-green)">GCM 模式</div>
            <div class="en" style="font-size:10px">Galois/Counter Mode</div>
            <div style="margin-top:8px;font-size:11px;color:var(--text-secondary)">
              <div class="zh">加密 + 完整性驗證 (AEAD)</div>
              <div class="en">Encryption + Integrity (AEAD)</div>
            </div>
            <div style="font-size:10px;color:var(--accent-green);margin-top:4px">⭐ 最推薦 Recommended</div>
          </div>
        </div>

        <!-- Use cases -->
        <div id="sym4-usecases" style="margin-top:20px;opacity:0">
          <div style="text-align:center;margin-bottom:10px">
            <span class="zh" style="font-size:14px;font-weight:600;color:var(--accent-cyan)">實際應用場景 Real-World Applications</span>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">
            <div style="padding:8px 14px;background:rgba(59,130,246,0.1);border:1px solid var(--accent-blue);border-radius:8px;font-size:12px;text-align:center">
              <div>🌐</div><div class="zh">HTTPS</div><div class="en" style="font-size:10px">Web Traffic</div>
            </div>
            <div style="padding:8px 14px;background:rgba(139,92,246,0.1);border:1px solid var(--accent-purple);border-radius:8px;font-size:12px;text-align:center">
              <div>📶</div><div class="zh">Wi-Fi</div><div class="en" style="font-size:10px">WPA2/WPA3</div>
            </div>
            <div style="padding:8px 14px;background:rgba(16,185,129,0.1);border:1px solid var(--accent-green);border-radius:8px;font-size:12px;text-align:center">
              <div>💾</div><div class="zh">磁碟加密</div><div class="en" style="font-size:10px">BitLocker</div>
            </div>
            <div style="padding:8px 14px;background:rgba(245,158,11,0.1);border:1px solid var(--accent-yellow);border-radius:8px;font-size:12px;text-align:center">
              <div>🔗</div><div class="zh">VPN</div><div class="en" style="font-size:10px">Tunnel</div>
            </div>
            <div style="padding:8px 14px;background:rgba(6,182,212,0.1);border:1px solid var(--accent-cyan);border-radius:8px;font-size:12px;text-align:center">
              <div>🗄️</div><div class="zh">資料庫</div><div class="en" style="font-size:10px">Database</div>
            </div>
          </div>
        </div>

        <!-- Summary -->
        <div id="sym4-summary" style="text-align:center;margin-top:16px;opacity:0">
          <div style="display:inline-flex;align-items:center;gap:12px;padding:12px 24px;background:rgba(59,130,246,0.08);border:1px solid var(--accent-blue);border-radius:12px">
            <span style="font-size:20px">💡</span>
            <div>
              <div class="zh" style="font-size:13px;color:var(--accent-blue);font-weight:600">對稱 + 非對稱 = 完整的加密方案</div>
              <div class="en" style="font-size:11px">Symmetric + Asymmetric = Complete encryption solution</div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  activate(step) {
    switch(step) {
      case 0:
        // Intro - no visual yet
        break;
      case 1:
        const ecb = document.getElementById('sym4-ecb');
        const cbc = document.getElementById('sym4-cbc');
        ecb.style.opacity = '1'; ecb.classList.add('anim-fade-in-up');
        setTimeout(() => { cbc.style.opacity = '1'; cbc.classList.add('anim-fade-in-up'); }, 300);
        break;
      case 2:
        const gcm = document.getElementById('sym4-gcm');
        gcm.style.opacity = '1'; gcm.classList.add('anim-scale-in');
        gcm.classList.add('highlight');
        setTimeout(() => gcm.classList.add('anim-glow-green'), 500);
        break;
      case 3:
        const usecases = document.getElementById('sym4-usecases');
        usecases.style.opacity = '1'; usecases.classList.add('anim-fade-in-up');
        break;
      case 4:
        const summary = document.getElementById('sym4-summary');
        summary.style.opacity = '1'; summary.classList.add('anim-fade-in-up');
        break;
    }
  }
};
