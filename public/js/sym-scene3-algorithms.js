/* Scene: Symmetric Encryption - Common Algorithms */
const SymScene3 = {
  totalSteps: 5,

  steps: [
    {
      zh: '常見的對稱加密演算法有很多種，各有不同的特性和用途。讓我們來認識最重要的幾種：',
      en: 'There are many common symmetric encryption algorithms, each with different characteristics and use cases. Let\'s learn the most important ones:'
    },
    {
      zh: 'DES (Data Encryption Standard)：1977 年發佈，金鑰長度 56-bit。已被認為不安全，可在數小時內被暴力破解，已停止使用。',
      en: 'DES (Data Encryption Standard): Published in 1977, 56-bit key length. Considered insecure now — can be brute-forced in hours. Deprecated.'
    },
    {
      zh: '3DES (Triple DES)：將 DES 執行三次，有效金鑰長度 112-168 bit。比 DES 安全但效能差，逐漸被淘汰。',
      en: '3DES (Triple DES): Applies DES three times, effective key length 112-168 bit. More secure than DES but poor performance. Being phased out.'
    },
    {
      zh: 'AES (Advanced Encryption Standard)：2001 年取代 DES 成為新標準。支援 128/192/256-bit 金鑰長度。是目前最廣泛使用的對稱加密演算法。',
      en: 'AES (Advanced Encryption Standard): Replaced DES in 2001 as the new standard. Supports 128/192/256-bit key lengths. Most widely used symmetric encryption algorithm today.'
    },
    {
      zh: 'ChaCha20：由 Daniel J. Bernstein 設計，在行動裝置上效能特別好。Google 在 TLS 中大量採用，是 AES 之外的優秀選擇。',
      en: 'ChaCha20: Designed by Daniel J. Bernstein, especially performant on mobile devices. Widely adopted by Google in TLS. An excellent alternative to AES.'
    }
  ],

  render(container) {
    container.innerHTML = `
      <div style="width:100%;max-width:700px">
        <div style="display:flex;flex-direction:column;gap:10px">

          <!-- DES -->
          <div class="entity-box" id="sym3-des" style="opacity:0;display:flex;align-items:center;gap:16px;padding:14px 20px">
            <div style="font-size:32px;flex-shrink:0">🔴</div>
            <div style="flex:1">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
                <span class="zh" style="font-weight:700;font-size:15px">DES</span>
                <span style="font-size:10px;padding:2px 8px;background:rgba(239,68,68,0.15);color:var(--accent-red);border-radius:4px"><span class="zh">已棄用</span><span class="en">Deprecated</span></span>
              </div>
              <div class="en" style="font-size:11px;margin-top:0">Data Encryption Standard (1977)</div>
              <div style="display:flex;gap:12px;margin-top:6px">
                <span style="font-size:11px;color:var(--text-dim)">金鑰 Key: <span style="color:var(--accent-red)">56-bit</span></span>
                <span style="font-size:11px;color:var(--text-dim)">區塊 Block: 64-bit</span>
                <span style="font-size:11px;color:var(--accent-red)">❌ 不安全 Insecure</span>
              </div>
            </div>
          </div>

          <!-- 3DES -->
          <div class="entity-box" id="sym3-3des" style="opacity:0;display:flex;align-items:center;gap:16px;padding:14px 20px">
            <div style="font-size:32px;flex-shrink:0">🟡</div>
            <div style="flex:1">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
                <span class="zh" style="font-weight:700;font-size:15px">3DES (Triple DES)</span>
                <span style="font-size:10px;padding:2px 8px;background:rgba(245,158,11,0.15);color:var(--accent-yellow);border-radius:4px"><span class="zh">淳汰中</span><span class="en">Phasing Out</span></span>
              </div>
              <div class="en" style="font-size:11px;margin-top:0">Triple Data Encryption Standard</div>
              <div style="display:flex;gap:12px;margin-top:6px">
                <span style="font-size:11px;color:var(--text-dim)">金鑰 Key: <span style="color:var(--accent-yellow)">112-168 bit</span></span>
                <span style="font-size:11px;color:var(--text-dim)">區塊 Block: 64-bit</span>
                <span style="font-size:11px;color:var(--accent-yellow)">⚠️ 效能差 Slow</span>
              </div>
            </div>
          </div>

          <!-- AES -->
          <div class="entity-box" id="sym3-aes" style="opacity:0;display:flex;align-items:center;gap:16px;padding:14px 20px">
            <div style="font-size:32px;flex-shrink:0">🟢</div>
            <div style="flex:1">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
                <span class="zh" style="font-weight:700;font-size:15px">AES</span>
                <span style="font-size:10px;padding:2px 8px;background:rgba(16,185,129,0.15);color:var(--accent-green);border-radius:4px">⭐ <span class="zh">業界標準</span><span class="en">Standard</span></span>
              </div>
              <div class="en" style="font-size:11px;margin-top:0">Advanced Encryption Standard (2001)</div>
              <div style="display:flex;gap:12px;margin-top:6px">
                <span style="font-size:11px;color:var(--text-dim)">金鑰 Key: <span style="color:var(--accent-green)">128/192/256-bit</span></span>
                <span style="font-size:11px;color:var(--text-dim)">區塊 Block: 128-bit</span>
                <span style="font-size:11px;color:var(--accent-green)">✅ 最廣泛使用 Most Used</span>
              </div>
            </div>
          </div>

          <!-- ChaCha20 -->
          <div class="entity-box" id="sym3-chacha" style="opacity:0;display:flex;align-items:center;gap:16px;padding:14px 20px">
            <div style="font-size:32px;flex-shrink:0">🔵</div>
            <div style="flex:1">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
                <span class="zh" style="font-weight:700;font-size:15px">ChaCha20</span>
                <span style="font-size:10px;padding:2px 8px;background:rgba(59,130,246,0.15);color:var(--accent-blue);border-radius:4px"><span class="zh">行動裝置推薦</span><span class="en">Mobile</span></span>
              </div>
              <div class="en" style="font-size:11px;margin-top:0">ChaCha20-Poly1305 Stream Cipher</div>
              <div style="display:flex;gap:12px;margin-top:6px">
                <span style="font-size:11px;color:var(--text-dim)">金鑰 Key: <span style="color:var(--accent-blue)">256-bit</span></span>
                <span style="font-size:11px;color:var(--text-dim)">串流 Stream cipher</span>
                <span style="font-size:11px;color:var(--accent-blue)">📱 行動裝置友善</span>
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
        // Show nothing extra on intro step
        break;
      case 1:
        const des = document.getElementById('sym3-des');
        des.style.opacity = '1'; des.classList.add('anim-fade-in-left');
        break;
      case 2:
        const tdes = document.getElementById('sym3-3des');
        tdes.style.opacity = '1'; tdes.classList.add('anim-fade-in-left');
        break;
      case 3:
        const aes = document.getElementById('sym3-aes');
        aes.style.opacity = '1'; aes.classList.add('anim-fade-in-left');
        aes.classList.add('highlight');
        setTimeout(() => aes.classList.add('anim-glow-green'), 500);
        break;
      case 4:
        const chacha = document.getElementById('sym3-chacha');
        chacha.style.opacity = '1'; chacha.classList.add('anim-fade-in-left');
        break;
    }
  }
};
