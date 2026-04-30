/* Crypto Fundamentals: 4 Core Techniques — 2x2 Grid */
const FundScene1 = {
  totalSteps: 1,

  steps: [
    {
      zh: '密碼學的四個核心招式：幾乎所有密碼學的實作都可以拆解成這四個基本操作的組合。',
      en: 'The 4 core techniques of cryptography: Nearly all cryptographic implementations can be decomposed into combinations of these four fundamental operations.'
    }
  ],

  render(container) {
    // Force the animation-area to full width so the grid can expand
    container.style.width = '100%';

    container.innerHTML = `
      <div style="
        width:100%;
        max-width:1100px;
        display:grid;
        grid-template-columns:1fr 1fr;
        grid-template-rows:1fr 1fr;
        gap:14px;
        height:100%;
      ">

        <!-- ① Symmetric Encryption -->
        <div class="entity-box" style="padding:14px 16px;border-color:var(--accent-yellow);display:flex;flex-direction:column;gap:6px;overflow:auto">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="flex-shrink:0;width:34px;height:34px;border-radius:50%;background:rgba(245,158,11,0.15);display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:var(--accent-yellow);border:2px solid var(--accent-yellow)">1</div>
            <div style="font-size:13px;font-weight:700;color:var(--accent-yellow)">
              <span class="zh">🔐 對稱式加密</span>
              <span class="en">Symmetric Encryption</span>
            </div>
          </div>
          <div style="font-size:11px;color:var(--text-secondary)">
            <span class="zh">同一把 Secret Key 同時用於加密與解密。</span>
            <span class="en">The same Secret Key is used for both encryption and decryption.</span>
          </div>
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;font-size:10px;margin-top:auto">
            <span style="padding:3px 8px;background:rgba(6,182,212,0.08);border:1px solid var(--accent-cyan);border-radius:5px;color:var(--accent-cyan)">📝 <span class="zh">明文</span><span class="en">Plaintext</span></span>
            <span style="color:var(--text-dim)">+</span>
            <span style="padding:3px 8px;background:rgba(245,158,11,0.12);border:1px solid var(--accent-yellow);border-radius:5px;color:var(--accent-yellow)">🔑 Secret Key</span>
            <span style="color:var(--text-dim)">→</span>
            <span style="padding:3px 8px;background:rgba(239,68,68,0.08);border:1px solid var(--accent-red);border-radius:5px;color:var(--accent-red)">🔒 <span class="zh">密文</span><span class="en">Ciphertext</span></span>
            <span style="color:var(--text-dim)">→</span>
            <span style="padding:3px 8px;background:rgba(245,158,11,0.12);border:1px solid var(--accent-yellow);border-radius:5px;color:var(--accent-yellow)">🔑 Secret Key</span>
            <span style="color:var(--text-dim)">→</span>
            <span style="padding:3px 8px;background:rgba(6,182,212,0.08);border:1px solid var(--accent-cyan);border-radius:5px;color:var(--accent-cyan)">📝 <span class="zh">明文</span><span class="en">Plaintext</span></span>
          </div>
        </div>

        <!-- ② Asymmetric Encryption -->
        <div class="entity-box" style="padding:14px 16px;border-color:var(--accent-blue);display:flex;flex-direction:column;gap:6px;overflow:auto">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="flex-shrink:0;width:34px;height:34px;border-radius:50%;background:rgba(59,130,246,0.15);display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:var(--accent-blue);border:2px solid var(--accent-blue)">2</div>
            <div style="font-size:13px;font-weight:700;color:var(--accent-blue)">
              <span class="zh">🔓 非對稱式加密</span>
              <span class="en">Asymmetric Encryption</span>
            </div>
          </div>
          <div style="font-size:11px;color:var(--text-secondary)">
            <span class="zh">用演算法生成 Private Key 與 Public Key，兩種模式：</span>
            <span class="en">Generate Private Key & Public Key via algorithm. Two modes:</span>
          </div>
          <!-- Encryption Mode -->
          <div style="padding:6px 10px;background:rgba(16,185,129,0.05);border:1px solid rgba(16,185,129,0.2);border-radius:6px">
            <div style="font-size:10px;font-weight:600;color:var(--accent-green);margin-bottom:4px">
              <span class="zh">🔒 Encryption Mode — <span style="color:var(--text-secondary);font-weight:400">Public Key 加密，Private Key 解密</span></span>
              <span class="en">🔒 Encryption Mode — <span style="color:var(--text-secondary);font-weight:400">Encrypt with Public Key, Decrypt with Private Key</span></span>
            </div>
            <div style="display:flex;align-items:center;gap:5px;flex-wrap:wrap;font-size:9px">
              <span style="padding:2px 6px;background:rgba(6,182,212,0.08);border:1px solid var(--accent-cyan);border-radius:4px;color:var(--accent-cyan)">📝 Data</span>
              <span style="color:var(--text-dim)">+</span>
              <span style="padding:2px 6px;background:rgba(16,185,129,0.1);border:1px solid var(--accent-green);border-radius:4px;color:var(--accent-green)">🔑 PubKey</span>
              <span style="color:var(--text-dim)">→🔒→</span>
              <span style="padding:2px 6px;background:rgba(239,68,68,0.1);border:1px solid var(--accent-red);border-radius:4px;color:var(--accent-red)">🗝️ PrivKey</span>
              <span style="color:var(--text-dim)">→</span>
              <span style="padding:2px 6px;background:rgba(6,182,212,0.08);border:1px solid var(--accent-cyan);border-radius:4px;color:var(--accent-cyan)">📝 Data</span>
            </div>
          </div>
          <!-- Signature Mode -->
          <div style="padding:6px 10px;background:rgba(139,92,246,0.05);border:1px solid rgba(139,92,246,0.2);border-radius:6px">
            <div style="font-size:10px;font-weight:600;color:var(--accent-purple);margin-bottom:4px">
              <span class="zh">✍️ Signature Mode — <span style="color:var(--text-secondary);font-weight:400">Private Key 加密，Public Key 解密</span></span>
              <span class="en">✍️ Signature Mode — <span style="color:var(--text-secondary);font-weight:400">Encrypt with Private Key, Decrypt with Public Key</span></span>
            </div>
            <div style="display:flex;align-items:center;gap:5px;flex-wrap:wrap;font-size:9px">
              <span style="padding:2px 6px;background:rgba(6,182,212,0.08);border:1px solid var(--accent-cyan);border-radius:4px;color:var(--accent-cyan)">📝 Data</span>
              <span style="color:var(--text-dim)">+</span>
              <span style="padding:2px 6px;background:rgba(239,68,68,0.1);border:1px solid var(--accent-red);border-radius:4px;color:var(--accent-red)">🗝️ PrivKey</span>
              <span style="color:var(--text-dim)">→✍️→</span>
              <span style="padding:2px 6px;background:rgba(16,185,129,0.1);border:1px solid var(--accent-green);border-radius:4px;color:var(--accent-green)">🔑 PubKey</span>
              <span style="color:var(--text-dim)">→</span>
              <span style="padding:2px 6px;background:rgba(6,182,212,0.08);border:1px solid var(--accent-cyan);border-radius:4px;color:var(--accent-cyan)">📝 Data</span>
            </div>
          </div>
        </div>

        <!-- ③ Hashing -->
        <div class="entity-box" style="padding:14px 16px;border-color:var(--accent-cyan);display:flex;flex-direction:column;gap:6px;overflow:auto">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="flex-shrink:0;width:34px;height:34px;border-radius:50%;background:rgba(6,182,212,0.15);display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:var(--accent-cyan);border:2px solid var(--accent-cyan)">3</div>
            <div style="font-size:13px;font-weight:700;color:var(--accent-cyan)">
              <span class="zh">#️⃣ 雜湊 (Hash)</span>
              <span class="en">#️⃣ Hashing</span>
            </div>
          </div>
          <div style="font-size:11px;color:var(--text-secondary)">
            <span class="zh">將任意大小的資料透過雜湊演算法，壓縮成固定長度的 Hash（摘要 / Digest）。不可逆、不可還原。</span>
            <span class="en">Transform data of any size into a fixed-length Hash (Digest) via a hashing algorithm. Irreversible — cannot be restored.</span>
          </div>
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;font-size:10px;margin-top:auto">
            <span style="padding:3px 8px;background:rgba(6,182,212,0.08);border:1px solid var(--accent-cyan);border-radius:5px;color:var(--accent-cyan)">📄 <span class="zh">大資料</span><span class="en">Large Data</span></span>
            <span style="color:var(--text-dim)">→ SHA-256 →</span>
            <span style="padding:3px 8px;background:rgba(245,158,11,0.1);border:1px solid var(--accent-yellow);border-radius:5px;color:var(--accent-yellow);font-family:var(--font-mono);font-size:9px">#️⃣ Hash / Digest <span style="font-size:8px;opacity:0.7">(256-bit)</span></span>
          </div>
        </div>

        <!-- ④ Signature Verification -->
        <div class="entity-box" style="padding:14px 16px;border-color:var(--accent-green);display:flex;flex-direction:column;gap:6px;overflow:auto">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="flex-shrink:0;width:34px;height:34px;border-radius:50%;background:rgba(16,185,129,0.15);display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:var(--accent-green);border:2px solid var(--accent-green)">4</div>
            <div style="font-size:13px;font-weight:700;color:var(--accent-green)">
              <span class="zh">✅ 簽章驗證</span>
              <span class="en">✅ Signature Verification</span>
            </div>
          </div>
          <div style="font-size:11px;color:var(--text-secondary)">
            <span class="zh">結合招式 2b + 招式 3：用 Hash + Private Key 產生 Signature，再用 Public Key + Hash 驗證。</span>
            <span class="en">Combines Technique 2b + 3: Create Signature with Hash + Private Key, then verify with Public Key + Hash.</span>
          </div>
          <!-- Sign -->
          <div style="padding:6px 10px;background:rgba(139,92,246,0.05);border:1px solid rgba(139,92,246,0.2);border-radius:6px">
            <div style="font-size:9px;font-weight:600;color:var(--accent-purple);margin-bottom:4px">
              <span class="zh">✍️ 簽署：產生 Signature</span>
              <span class="en">✍️ Sign: Create Signature</span>
            </div>
            <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;font-size:9px">
              <span style="padding:2px 6px;background:rgba(6,182,212,0.08);border:1px solid var(--accent-cyan);border-radius:4px;color:var(--accent-cyan)">📄 Data</span>
              <span style="color:var(--text-dim)">→Hash→</span>
              <span style="padding:2px 6px;background:rgba(245,158,11,0.1);border:1px solid var(--accent-yellow);border-radius:4px;color:var(--accent-yellow);font-family:var(--font-mono)">Digest</span>
              <span style="color:var(--text-dim)">+</span>
              <span style="padding:2px 6px;background:rgba(239,68,68,0.1);border:1px solid var(--accent-red);border-radius:4px;color:var(--accent-red)">🗝️ PrivKey</span>
              <span style="color:var(--text-dim)">→<span class="zh">加密</span><span class="en">Encrypt</span>→</span>
              <span style="padding:2px 6px;background:rgba(139,92,246,0.1);border:1px solid var(--accent-purple);border-radius:4px;color:var(--accent-purple)">📝 Signature</span>
            </div>
          </div>
          <!-- Verify -->
          <div style="padding:6px 10px;background:rgba(16,185,129,0.05);border:1px solid rgba(16,185,129,0.2);border-radius:6px">
            <div style="font-size:9px;font-weight:600;color:var(--accent-green);margin-bottom:4px">
              <span class="zh">🔍 驗證：比對 Hash</span>
              <span class="en">🔍 Verify: Compare Hash</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;font-size:9px">
              <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap">
                <span style="padding:2px 6px;background:rgba(139,92,246,0.1);border:1px solid var(--accent-purple);border-radius:4px;color:var(--accent-purple)">📝 Sig</span>
                <span style="color:var(--text-dim)">+</span>
                <span style="padding:2px 6px;background:rgba(16,185,129,0.1);border:1px solid var(--accent-green);border-radius:4px;color:var(--accent-green)">🔑 PubKey</span>
                <span style="color:var(--text-dim)">→<span class="zh">解密</span><span class="en">Decrypt</span>→</span>
                <span style="padding:2px 6px;background:rgba(245,158,11,0.1);border:1px solid var(--accent-yellow);border-radius:4px;color:var(--accent-yellow);font-family:var(--font-mono)">Digest A</span>
              </div>
              <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap">
                <span style="padding:2px 6px;background:rgba(6,182,212,0.08);border:1px solid var(--accent-cyan);border-radius:4px;color:var(--accent-cyan)">📄 Data</span>
                <span style="color:var(--text-dim)">→Hash→</span>
                <span style="padding:2px 6px;background:rgba(245,158,11,0.1);border:1px solid var(--accent-yellow);border-radius:4px;color:var(--accent-yellow);font-family:var(--font-mono)">Digest B</span>
              </div>
              <div style="text-align:center;padding:4px;background:rgba(16,185,129,0.1);border:1px solid var(--accent-green);border-radius:5px">
                <span style="color:var(--accent-green);font-weight:700;font-size:10px">A === B → ✅ <span class="zh">驗證通過</span><span class="en">Verified</span></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    `;
  },

  activate(step) {
    // Single page — no step animation needed
  }
};