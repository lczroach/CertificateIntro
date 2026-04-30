/* Asymmetric Scene 2: Encryption & Decryption Flow */
const AsymScene2 = {
  totalSteps: 5,

  steps: [
    {
      zh: 'Alice 想安全地傳送一則秘密訊息給 Bob。Bob 已事先將自己的 Public Key 公開給所有人。',
      en: 'Alice wants to securely send a secret message to Bob. Bob has already published his Public Key for everyone.'
    },
    {
      zh: 'Alice 取得 Bob 的 Public Key，用它加密明文 "Secret Message" → 產生密文。只有 Bob 的 Private Key 能解開。',
      en: 'Alice obtains Bob\'s Public Key and encrypts the plaintext "Secret Message" → producing ciphertext. Only Bob\'s Private Key can decrypt it.'
    },
    {
      zh: '密文在網路上傳輸。攻擊者可以攔截密文，但沒有 Bob 的 Private Key，完全無法解密。即使擁有 Bob 的 Public Key 也無用。',
      en: 'Ciphertext is transmitted over the network. An attacker can intercept it, but without Bob\'s Private Key, decryption is impossible. Even having Bob\'s Public Key is useless.'
    },
    {
      zh: 'Bob 收到密文後，用自己嚴密保管的 Private Key 解密 → 成功還原明文 "Secret Message"。',
      en: 'Bob receives the ciphertext and decrypts it with his carefully guarded Private Key → successfully restoring the plaintext "Secret Message."'
    },
    {
      zh: '關鍵差異：加密用「對方的 Public Key」，解密用「自己的 Private Key」。不需要事先交換秘密金鑰，徹底解決了對稱式加密的金鑰分發問題。',
      en: 'Key difference: Encrypt with "recipient\'s Public Key," decrypt with "your own Private Key." No need to pre-share a secret key — completely solving symmetric encryption\'s key distribution problem.'
    }
  ],

  render(container) {
    container.innerHTML = `
      <div style="width:100%;max-width:880px">
        <div style="display:flex;align-items:flex-start;justify-content:center;gap:16px;flex-wrap:wrap">

          <!-- Alice -->
          <div class="scene-layout-col" id="asym2-alice" style="opacity:0;gap:8px;min-width:120px">
            <div class="entity-box" style="padding:14px;text-align:center">
              <div style="font-size:36px;margin-bottom:4px">👩</div>
              <div class="zh" style="font-weight:600;font-size:13px">Alice</div>
              <div class="en" style="font-size:10px">Sender 發送方</div>
            </div>
            <div id="asym2-alice-msg" style="opacity:0;padding:8px 12px;background:rgba(16,185,129,0.08);border:1px solid var(--accent-green);border-radius:8px;font-size:11px;text-align:center">
              <div style="font-size:16px;margin-bottom:2px">📝</div>
              <div style="font-family:var(--font-mono);color:var(--accent-green);font-size:10px">"Secret Message"</div>
              <div style="font-size:9px;color:var(--text-dim);margin-top:2px"><span class="zh">明文</span><span class="en">Plaintext</span></div>
            </div>
          </div>

          <!-- Encrypt step -->
          <div class="scene-layout-col" id="asym2-encrypt" style="opacity:0;gap:6px;min-width:140px;margin-top:20px">
            <div style="padding:10px 14px;background:rgba(59,130,246,0.08);border:1px solid var(--accent-blue);border-radius:10px;text-align:center">
              <div style="font-size:11px;font-weight:700;color:var(--accent-blue);margin-bottom:6px">
                <span class="zh">🔒 加密</span>
                <span class="en">Encrypt</span>
              </div>
              <div style="display:flex;align-items:center;gap:4px;justify-content:center;font-size:10px;flex-wrap:wrap">
                <span style="padding:2px 6px;background:rgba(16,185,129,0.1);border:1px solid var(--accent-green);border-radius:4px;color:var(--accent-green);font-size:9px">🔑 Bob PubKey</span>
                <span style="color:var(--text-dim)">+</span>
                <span style="padding:2px 6px;background:rgba(16,185,129,0.1);border:1px solid var(--accent-green);border-radius:4px;color:var(--accent-green);font-size:9px">📝 <span class="zh">明文</span><span class="en">Plaintext</span></span>
              </div>
              <div style="color:var(--text-dim);font-size:14px;margin-top:4px">↓</div>
              <div style="padding:3px 8px;background:rgba(239,68,68,0.1);border:1px solid var(--accent-red);border-radius:4px;color:var(--accent-red);font-family:var(--font-mono);font-size:9px;margin-top:2px">
                🔒 "x9#k$2m..."
              </div>
            </div>
          </div>

          <!-- Network -->
          <div class="scene-layout-col" id="asym2-network" style="opacity:0;gap:6px;min-width:100px;margin-top:30px">
            <div style="font-size:24px;color:var(--accent-yellow)">〰️▶</div>
            <div style="font-size:28px">🌐</div>
            <div class="zh" style="font-size:10px;color:var(--accent-yellow)">網路傳輸</div>
            <div class="en" style="font-size:9px;color:var(--text-dim)">Network</div>
            <!-- Attacker -->
            <div id="asym2-attacker" style="opacity:0;margin-top:6px;padding:8px 10px;background:rgba(239,68,68,0.06);border:1px solid var(--accent-red);border-radius:8px;text-align:center">
              <div style="font-size:18px">🕵️</div>
              <div style="font-size:9px;color:var(--accent-red);margin-top:2px">
                <span class="zh">攔截密文 ❌ 無法解密</span>
                <span class="en">Intercepted ❌ Can't decrypt</span>
              </div>
              <div style="font-size:8px;color:var(--text-dim);margin-top:2px">
                <span class="zh">即使有 Bob Public Key 也無用</span>
                <span class="en">Bob's Public Key won't help</span>
              </div>
            </div>
          </div>

          <!-- Decrypt step -->
          <div class="scene-layout-col" id="asym2-decrypt" style="opacity:0;gap:6px;min-width:140px;margin-top:20px">
            <div style="padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid var(--accent-green);border-radius:10px;text-align:center">
              <div style="font-size:11px;font-weight:700;color:var(--accent-green);margin-bottom:6px">
                <span class="zh">🔓 解密</span>
                <span class="en">Decrypt</span>
              </div>
              <div style="display:flex;align-items:center;gap:4px;justify-content:center;font-size:10px;flex-wrap:wrap">
                <span style="padding:2px 6px;background:rgba(239,68,68,0.1);border:1px solid var(--accent-red);border-radius:4px;color:var(--accent-red);font-size:9px">🗝️ Bob PrivKey</span>
                <span style="color:var(--text-dim)">+</span>
                <span style="padding:2px 6px;background:rgba(239,68,68,0.1);border:1px solid var(--accent-red);border-radius:4px;color:var(--accent-red);font-size:9px">🔒 <span class="zh">密文</span><span class="en">Ciphertext</span></span>
              </div>
              <div style="color:var(--text-dim);font-size:14px;margin-top:4px">↓</div>
              <div style="padding:3px 8px;background:rgba(16,185,129,0.1);border:1px solid var(--accent-green);border-radius:4px;color:var(--accent-green);font-family:var(--font-mono);font-size:9px;margin-top:2px">
                📝 "Secret Message"
              </div>
            </div>
          </div>

          <!-- Bob -->
          <div class="scene-layout-col" id="asym2-bob" style="opacity:0;gap:8px;min-width:120px">
            <div class="entity-box" style="padding:14px;text-align:center">
              <div style="font-size:36px;margin-bottom:4px">👨</div>
              <div class="zh" style="font-weight:600;font-size:13px">Bob</div>
              <div class="en" style="font-size:10px">Receiver 接收方</div>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px">
              <div class="key-badge public" style="padding:3px 8px;font-size:10px;margin:0">🔑 Public Key (公開)</div>
              <div class="key-badge private" style="padding:3px 8px;font-size:10px;margin:0">🗝️ Private Key (保密)</div>
            </div>
          </div>
        </div>

        <!-- Key insight -->
        <div id="asym2-insight" style="opacity:0;text-align:center;margin-top:16px">
          <div style="display:inline-flex;align-items:center;gap:10px;padding:10px 24px;background:rgba(59,130,246,0.08);border:1px solid var(--accent-blue);border-radius:12px">
            <span style="font-size:16px">💡</span>
            <div>
              <div class="zh" style="font-size:12px;color:var(--accent-blue);font-weight:600">加密用「對方 Public Key」・解密用「自己 Private Key」→ 無需交換秘密金鑰</div>
              <div class="en" style="font-size:10px">Encrypt with recipient's Public Key · Decrypt with your Private Key → No secret key exchange needed</div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  activate(step) {
    switch(step) {
      case 0:
        const alice = document.getElementById('asym2-alice');
        const bob = document.getElementById('asym2-bob');
        const aliceMsg = document.getElementById('asym2-alice-msg');
        alice.style.opacity = '1'; alice.classList.add('anim-fade-in-left');
        bob.style.opacity = '1'; bob.classList.add('anim-fade-in-right');
        aliceMsg.style.opacity = '1';
        break;
      case 1:
        const enc = document.getElementById('asym2-encrypt');
        enc.style.opacity = '1'; enc.classList.add('anim-scale-in');
        break;
      case 2:
        const net = document.getElementById('asym2-network');
        const atk = document.getElementById('asym2-attacker');
        net.style.opacity = '1'; net.classList.add('anim-fade-in');
        setTimeout(() => { atk.style.opacity = '1'; atk.classList.add('anim-fade-in-up'); }, 400);
        break;
      case 3:
        const dec = document.getElementById('asym2-decrypt');
        dec.style.opacity = '1'; dec.classList.add('anim-scale-in');
        break;
      case 4:
        const insight = document.getElementById('asym2-insight');
        insight.style.opacity = '1'; insight.classList.add('anim-fade-in-up');
        break;
    }
  }
};
