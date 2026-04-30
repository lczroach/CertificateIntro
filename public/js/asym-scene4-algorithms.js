/* Asymmetric Scene 4: Common Algorithms Comparison */
const AsymScene4 = {
  totalSteps: 5,

  steps: [
    {
      zh: '非對稱加密演算法基於不同的數學難題。以下是目前最重要的幾種演算法：',
      en: 'Asymmetric encryption algorithms are based on different mathematical problems. Here are the most important ones:'
    },
    {
      zh: 'RSA (1977)：基於「大質數分解」困難問題。金鑰長度 2048/4096-bit。最廣泛使用、相容性最好，但金鑰較大、速度較慢。',
      en: 'RSA (1977): Based on the "large prime factorization" problem. Key lengths 2048/4096-bit. Most widely used with best compatibility, but larger keys and slower speed.'
    },
    {
      zh: 'ECC 橢圓曲線 (1985)：基於「橢圓曲線離散對數」問題。256-bit ECC ≈ 3072-bit RSA 安全性。金鑰更短、速度更快。TLS 1.3 推薦使用。',
      en: 'ECC Elliptic Curve (1985): Based on the "elliptic curve discrete logarithm" problem. 256-bit ECC ≈ 3072-bit RSA security. Shorter keys, faster speed. Recommended by TLS 1.3.'
    },
    {
      zh: 'Diffie-Hellman (DH / ECDH)：不是加密演算法，而是「金鑰交換協議」。雙方在不安全的通道上協商出共同的對稱金鑰。ECDH 是 ECC 版本，是 TLS 握手的核心。',
      en: 'Diffie-Hellman (DH / ECDH): Not an encryption algorithm, but a "key exchange protocol." Both parties negotiate a shared symmetric key over an insecure channel. ECDH is the ECC version and the core of TLS handshakes.'
    },
    {
      zh: 'Ed25519 / EdDSA：專為數位簽章設計的橢圓曲線演算法。速度極快、金鑰短 (32 bytes)、簽章短。SSH 金鑰與 Git 簽章的現代首選。',
      en: 'Ed25519 / EdDSA: Elliptic curve algorithm designed specifically for digital signatures. Extremely fast, short keys (32 bytes), short signatures. Modern choice for SSH keys and Git signing.'
    }
  ],

  render(container) {
    container.innerHTML = `
      <div style="width:100%;max-width:720px">
        <div style="display:flex;flex-direction:column;gap:10px">

          <!-- RSA -->
          <div class="entity-box" id="asym4-rsa" style="opacity:0;display:flex;align-items:center;gap:16px;padding:14px 20px">
            <div style="font-size:32px;flex-shrink:0">🟢</div>
            <div style="flex:1">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
                <span class="zh" style="font-weight:700;font-size:15px">RSA</span>
                <span style="font-size:10px;padding:2px 8px;background:rgba(16,185,129,0.15);color:var(--accent-green);border-radius:4px">⭐ 最廣泛使用 Most Used</span>
              </div>
              <div class="en" style="font-size:11px;margin-top:0">Rivest–Shamir–Adleman (1977)</div>
              <div style="font-size:10px;color:var(--text-dim);margin-top:4px">
                <span class="zh">基於：大質數分解</span>
                <span class="en">Based on: Prime Factorization</span>
              </div>
              <div style="display:flex;gap:12px;margin-top:4px;flex-wrap:wrap">
                <span style="font-size:11px;color:var(--text-dim)">金鑰 Key: <span style="color:var(--accent-blue)">2048 / 4096-bit</span></span>
                <span style="font-size:11px;color:var(--accent-yellow)">🐌 <span class="zh">速度較慢</span><span class="en">Slower</span></span>
                <span style="font-size:11px;color:var(--accent-green)">✅ <span class="zh">相容性佳</span><span class="en">Compatible</span></span>
              </div>
            </div>
          </div>

          <!-- ECC -->
          <div class="entity-box" id="asym4-ecc" style="opacity:0;display:flex;align-items:center;gap:16px;padding:14px 20px">
            <div style="font-size:32px;flex-shrink:0">🔵</div>
            <div style="flex:1">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
                <span class="zh" style="font-weight:700;font-size:15px">ECC 橢圓曲線</span>
                <span style="font-size:10px;padding:2px 8px;background:rgba(59,130,246,0.15);color:var(--accent-blue);border-radius:4px">TLS 1.3 推薦 Recommended</span>
              </div>
              <div class="en" style="font-size:11px;margin-top:0">Elliptic Curve Cryptography (1985)</div>
              <div style="font-size:10px;color:var(--text-dim);margin-top:4px">
                <span class="zh">基於：橢圓曲線離散對數問題</span>
                <span class="en">Based on: ECDLP</span>
              </div>
              <div style="display:flex;gap:12px;margin-top:4px;flex-wrap:wrap">
                <span style="font-size:11px;color:var(--text-dim)">金鑰 Key: <span style="color:var(--accent-blue)">256-bit</span> <span style="color:var(--accent-green)">≈ RSA 3072</span></span>
                <span style="font-size:11px;color:var(--accent-green)">⚡ <span class="zh">更快更短</span><span class="en">Faster & Shorter</span></span>
                <span style="font-size:11px;color:var(--accent-blue)">📱 <span class="zh">行動裝置友善</span><span class="en">Mobile Friendly</span></span>
              </div>
            </div>
          </div>

          <!-- DH / ECDH -->
          <div class="entity-box" id="asym4-dh" style="opacity:0;display:flex;align-items:center;gap:16px;padding:14px 20px">
            <div style="font-size:32px;flex-shrink:0">🟡</div>
            <div style="flex:1">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
                <span class="zh" style="font-weight:700;font-size:15px">DH / ECDH</span>
                <span style="font-size:10px;padding:2px 8px;background:rgba(245,158,11,0.15);color:var(--accent-yellow);border-radius:4px">🤝 金鑰交換 Key Exchange</span>
              </div>
              <div class="en" style="font-size:11px;margin-top:0">Diffie-Hellman / Elliptic Curve DH</div>
              <div style="font-size:10px;color:var(--text-dim);margin-top:4px">
                <span class="zh">用途：在不安全通道上協商共同對稱金鑰</span>
                <span class="en">Purpose: Negotiate shared symmetric key over insecure channel</span>
              </div>
              <div style="display:flex;gap:12px;margin-top:4px;flex-wrap:wrap">
                <span style="font-size:11px;color:var(--accent-yellow)">🔗 <span class="zh">TLS 握手核心</span><span class="en">TLS Handshake Core</span></span>
                <span style="font-size:11px;color:var(--text-dim)">不直接加密資料 Not for data encryption</span>
              </div>
            </div>
          </div>

          <!-- Ed25519 -->
          <div class="entity-box" id="asym4-ed" style="opacity:0;display:flex;align-items:center;gap:16px;padding:14px 20px">
            <div style="font-size:32px;flex-shrink:0">🟣</div>
            <div style="flex:1">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
                <span class="zh" style="font-weight:700;font-size:15px">Ed25519 / EdDSA</span>
                <span style="font-size:10px;padding:2px 8px;background:rgba(139,92,246,0.15);color:var(--accent-purple);border-radius:4px">✍️ 簽章專用 Signature Only</span>
              </div>
              <div class="en" style="font-size:11px;margin-top:0">Edwards-curve Digital Signature Algorithm</div>
              <div style="font-size:10px;color:var(--text-dim);margin-top:4px">
                <span class="zh">專為數位簽章設計</span>
                <span class="en">Designed for digital signatures</span>
              </div>
              <div style="display:flex;gap:12px;margin-top:4px;flex-wrap:wrap">
                <span style="font-size:11px;color:var(--text-dim)">金鑰 Key: <span style="color:var(--accent-purple)">32 bytes</span></span>
                <span style="font-size:11px;color:var(--accent-green)">⚡ 極快 Ultra-fast</span>
                <span style="font-size:11px;color:var(--accent-purple)">🔑 <span class="zh">SSH / Git 首選</span><span class="en">SSH / Git Preferred</span></span>
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
        break;
      case 1:
        const rsa = document.getElementById('asym4-rsa');
        rsa.style.opacity = '1'; rsa.classList.add('anim-fade-in-left');
        break;
      case 2:
        const ecc = document.getElementById('asym4-ecc');
        ecc.style.opacity = '1'; ecc.classList.add('anim-fade-in-left');
        ecc.classList.add('highlight');
        setTimeout(() => ecc.classList.add('anim-glow'), 500);
        break;
      case 3:
        const dh = document.getElementById('asym4-dh');
        dh.style.opacity = '1'; dh.classList.add('anim-fade-in-left');
        break;
      case 4:
        const ed = document.getElementById('asym4-ed');
        ed.style.opacity = '1'; ed.classList.add('anim-fade-in-left');
        break;
    }
  }
};
