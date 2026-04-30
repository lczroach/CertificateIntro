# 🔐 密碼學與憑證原理互動教學 | Cryptography & Certificate Interactive Tutorial

一個使用 Node.js + 純 HTML/CSS/JS 製作的互動式網頁動畫，以步驟式推進的方式，圖解密碼學核心概念與 SSL/TLS 憑證運作原理。支援中英雙語。

An interactive web animation built with Node.js + vanilla HTML/CSS/JS, illustrating core cryptography concepts and SSL/TLS certificate workflows through step-by-step animated visuals. Bilingual (Traditional Chinese & English).

## 📚 主題內容 | Topics

| 主題 | 說明 |
|------|------|
| 🧩 **四大招式** | 密碼學四個核心操作：對稱加密、非對稱加密、雜湊、簽章驗證 |
| 📜 **憑證原理** | 金鑰生成 → CSR → CA 授權 → 憑證內容 → 信任鏈驗證（含 DigiNotar 事件） |
| 🔐 **對稱式加密** | 基本概念、加解密流程、常見演算法（AES/DES/ChaCha20）、操作模式與應用 |
| 🔓 **非對稱式加密** | 基本概念、加解密流程、數位簽章、常見演算法（RSA/ECC/DH/Ed25519） |

## 🛠️ 安裝 | Installation

### 前置需求 | Prerequisites

- [Node.js](https://nodejs.org/) v16 以上

### 下載與安裝 | Download & Install

```bash
git clone https://github.com/your-username/CertificateIntro.git
cd CertificateIntro
npm install
```

## 🚀 執行 | Run

```bash
npm start
```

啟動後開啟瀏覽器前往：

```
http://localhost:3000
```

### 停止 | Stop

在終端機按 `Ctrl + C` 即可停止伺服器。

## 🎮 操作方式 | Controls

- **下一步 →** 或鍵盤 `→` / `空白鍵`：推進動畫
- **← 上一步** 或鍵盤 `←`：返回上一步
- **▶ 自動播放**：每 3 秒自動推進
- **頂部 Tab**：切換不同主題
- **進度條**：點擊跳至特定場景
