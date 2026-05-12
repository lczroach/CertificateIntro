/* Asymmetric Scene 1: Basic Concept */
const AsymScene1 = {
  totalSteps: 4,

  steps: [
    {
      zh: '非對稱式加密使用「兩把不同的金鑰」：Public Key（公鑰，公開）和 Private Key（私鑰，保密）。加密和解密用不同的鑰匙，因此稱為「非對稱」。',
      en: 'Asymmetric encryption uses "two different keys": a Public Key (shared openly) and a Private Key (kept secret). Different keys are used for encryption and decryption — hence "asymmetric."'
    },
    {
      zh: '核心特性：Public Key 加密的資料，只有對應的 Private Key 能解密，反之亦然。兩把鑰匙基於數學難題（大質數分解、橢圓曲線等）相關，但無法從 Public Key 推算出 Private Key。',
      en: 'Core property: Data encrypted with the Public Key can only be decrypted by the corresponding Private Key, and vice versa. The keys are related through math problems (prime factorization, elliptic curves) but the Private Key cannot be derived from the Public Key.'
    },
    {
      zh: '兩種用途模式：① 加密模式 — 用接收方的 Public Key 加密，只有接收方的 Private Key 能解密（保密性）。② 簽章模式 — 用自己的 Private Key 簽章，任何人可用 Public Key 驗證（不可否認性）。',
      en: 'Two usage modes: ① Encryption mode — encrypt with recipient\'s Public Key, only their Private Key can decrypt (confidentiality). ② Signature mode — sign with your own Private Key, anyone can verify with Public Key (non-repudiation).'
    },
    {
      zh: '與對稱式加密的比較：非對稱式解決了「金鑰分發問題」，但速度慢 100-1000 倍。因此實務上兩者搭配使用 — TLS 用非對稱加密交換金鑰，再用對稱加密傳輸資料。',
      en: 'Comparison with symmetric encryption: Asymmetric solves the "key distribution problem" but is 100-1000x slower. In practice, both are combined — TLS uses asymmetric to exchange keys, then symmetric to encrypt data.'
    }
  ],

  render(container) {
    container.innerHTML = `
      <div style="width:100%;max-width:850px">
        <!-- Key pair visual -->
        <div style="display:flex;align-items:center;justify-content:center;gap:40px;margin-bottom:20px">
          <div class="entity-box" id="asym1-pubkey" style="opacity:0;padding:16px 24px;border-color:var(--accent-green)">
            <div style="font-size:40px;margin-bottom:6px">🔑</div>
            <div class="zh" style="font-weight:700;color:var(--accent-green)">公鑰 Public Key</div>
            <div class="en" style="font-size:11px">可公開分享 Shareable</div>
          </div>

          <div id="asym1-relation" style="opacity:0;text-align:center">
            <div style="font-size:24px;color:var(--accent-purple)">⟷</div>
            <div style="font-size:10px;color:var(--accent-purple);margin-top:4px">
              <span class="zh">數學相關</span>
              <span class="en">Math Related</span>
            </div>
            <div style="font-size:10px;color:var(--accent-red);margin-top:2px">
              <span class="zh">無法互推 ✗</span>
              <span class="en">Cannot Derive ✗</span>
            </div>
          </div>

          <div class="entity-box" id="asym1-privkey" style="opacity:0;padding:16px 24px;border-color:var(--accent-red)">
            <div style="font-size:40px;margin-bottom:6px">🗝️</div>
            <div class="zh" style="font-weight:700;color:var(--accent-red)">私鑰 Private Key</div>
            <div class="en" style="font-size:11px">必須保密 Keep Secret</div>
          </div>
        </div>

        <!-- Two modes -->
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <div class="entity-box" id="asym1-mode-encrypt" style="opacity:0;flex:1;min-width:260px;padding:14px;border-color:var(--accent-blue)">
            <div style="font-size:11px;font-weight:700;color:var(--accent-blue);margin-bottom:8px">
              <span class="zh">🔒 加密模式 — 保密性</span>
              <span class="en">Encryption Mode — Confidentiality</span>
            </div>
            <div style="display:flex;align-items:center;gap:6px;font-size:10px;flex-wrap:wrap;justify-content:center">
              <span style="padding:2px 6px;background:rgba(16,185,129,0.1);border:1px solid var(--accent-green);border-radius:4px;color:var(--accent-green)">🔑 <span class="zh">公鑰</span><span class="en">Public Key</span></span>
              <span style="color:var(--text-dim)">加密 →</span>
              <span style="padding:2px 6px;background:rgba(59,130,246,0.1);border:1px solid var(--accent-blue);border-radius:4px;color:var(--accent-blue)">🔒 <span class="zh">密文</span><span class="en">Ciphertext</span></span>
              <span style="color:var(--text-dim)">→</span>
              <span style="padding:2px 6px;background:rgba(239,68,68,0.1);border:1px solid var(--accent-red);border-radius:4px;color:var(--accent-red)">🗝️ <span class="zh">私鑰</span><span class="en">Private Key</span></span>
              <span style="color:var(--text-dim)"><span class="zh">解密</span><span class="en">Decrypt</span></span>
            </div>
          </div>

          <div class="entity-box" id="asym1-mode-sign" style="opacity:0;flex:1;min-width:260px;padding:14px;border-color:var(--accent-purple)">
            <div style="font-size:11px;font-weight:700;color:var(--accent-purple);margin-bottom:8px">
              <span class="zh">✍️ 簽章模式 — 不可否認性</span>
              <span class="en">Signature Mode — Non-repudiation</span>
            </div>
            <div style="display:flex;align-items:center;gap:6px;font-size:10px;flex-wrap:wrap;justify-content:center">
              <span style="padding:2px 6px;background:rgba(239,68,68,0.1);border:1px solid var(--accent-red);border-radius:4px;color:var(--accent-red)">🗝️ <span class="zh">私鑰</span><span class="en">Private Key</span></span>
              <span style="color:var(--text-dim)">簽章 →</span>
              <span style="padding:2px 6px;background:rgba(139,92,246,0.1);border:1px solid var(--accent-purple);border-radius:4px;color:var(--accent-purple)">📝 <span class="zh">簽章</span><span class="en">Signature</span></span>
              <span style="color:var(--text-dim)">→</span>
              <span style="padding:2px 6px;background:rgba(16,185,129,0.1);border:1px solid var(--accent-green);border-radius:4px;color:var(--accent-green)">🔑 <span class="zh">公鑰</span><span class="en">Public Key</span></span>
              <span style="color:var(--text-dim)"><span class="zh">驗證</span><span class="en">Verify</span></span>
            </div>
          </div>
        </div>

        <!-- Comparison -->
        <div id="asym1-compare" style="opacity:0;margin-top:16px;text-align:center">
          <div style="display:inline-flex;align-items:center;gap:16px;padding:12px 24px;background:rgba(6,182,212,0.08);border:1px solid var(--accent-cyan);border-radius:12px">
            <div style="text-align:center">
              <div style="font-size:18px">🔐</div>
              <div class="zh" style="font-size:10px;color:var(--text-secondary)">對稱式</div>
              <div class="en" style="font-size:9px;color:var(--text-secondary)">Symmetric</div>
              <div class="zh" style="font-size:9px;color:var(--accent-green)">⚡ 快</div>
              <div class="en" style="font-size:9px;color:var(--accent-green)">⚡ Fast</div>
              <div class="zh" style="font-size:9px;color:var(--accent-red)">⚠ 金鑰分發</div>
              <div class="en" style="font-size:9px;color:var(--accent-red)">⚠ Key Distribution</div>
            </div>
            <div style="font-size:18px;color:var(--accent-cyan)">+</div>
            <div style="text-align:center">
              <div style="font-size:18px">🔓</div>
              <div class="zh" style="font-size:10px;color:var(--text-secondary)">非對稱式</div>
              <div class="en" style="font-size:9px;color:var(--text-secondary)">Asymmetric</div>
              <div class="zh" style="font-size:9px;color:var(--accent-green)">✓ 安全交換</div>
              <div class="en" style="font-size:9px;color:var(--accent-green)">✓ Secure Exchange</div>
              <div class="zh" style="font-size:9px;color:var(--accent-red)">🐌 慢</div>
              <div class="en" style="font-size:9px;color:var(--accent-red)">🐌 Slow</div>
            </div>
            <div style="font-size:18px;color:var(--accent-cyan)">=</div>
            <div style="text-align:center">
              <div style="font-size:18px">🔒</div>
              <div style="font-size:11px;color:var(--accent-green);font-weight:600">TLS/HTTPS</div>
              <div class="zh" style="font-size:9px;color:var(--accent-green)">最佳組合</div>
              <div class="en" style="font-size:9px;color:var(--accent-green)">Best Combo</div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  activate(step) {
    switch(step) {
      case 0:
        const pub = document.getElementById('asym1-pubkey');
        const priv = document.getElementById('asym1-privkey');
        pub.style.opacity = '1'; pub.classList.add('anim-fade-in-left');
        priv.style.opacity = '1'; priv.classList.add('anim-fade-in-right');
        break;
      case 1:
        const rel = document.getElementById('asym1-relation');
        rel.style.opacity = '1'; rel.classList.add('anim-scale-in');
        break;
      case 2:
        const enc = document.getElementById('asym1-mode-encrypt');
        const sign = document.getElementById('asym1-mode-sign');
        enc.style.opacity = '1'; enc.classList.add('anim-fade-in-up');
        setTimeout(() => { sign.style.opacity = '1'; sign.classList.add('anim-fade-in-up'); }, 300);
        break;
      case 3:
        const cmp = document.getElementById('asym1-compare');
        cmp.style.opacity = '1'; cmp.classList.add('anim-fade-in-up');
        break;
    }
  }
};
