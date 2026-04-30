/* Main App Controller - Multi-Topic Scene Manager */
(function() {
  'use strict';

  /* ── Topic Registry ── */
  const topicRegistry = {
    certificate: {
      id: 'certificate',
      scenes: [Scene1, Scene2, Scene3, Scene4, Scene5],
      progressLabels: [
        { zh: '金鑰生成', en: 'Key Generation' },
        { zh: 'CSR 組成', en: 'CSR Content' },
        { zh: 'CA 授權', en: 'CA Authorization' },
        { zh: '憑證內容', en: 'Certificate' },
        { zh: '信任驗證', en: 'Verification' }
      ],
      sceneTitles: [
        { zh: '金鑰對生成', en: 'Key Pair Generation' },
        { zh: '憑證簽署請求 (CSR)', en: 'Certificate Signing Request (CSR)' },
        { zh: 'CA 授權過程', en: 'CA Authorization Process' },
        { zh: '憑證組成內容', en: 'Certificate Content' },
        { zh: '憑證信任鏈驗證', en: 'Certificate Trust Chain Verification' }
      ]
    },
    symmetric: {
      id: 'symmetric',
      scenes: [SymScene1, SymScene2, SymScene3, SymScene4],
      progressLabels: [
        { zh: '基本概念', en: 'Basics' },
        { zh: '加解密流程', en: 'Encrypt/Decrypt' },
        { zh: '常見演算法', en: 'Algorithms' },
        { zh: '模式與應用', en: 'Modes & Uses' }
      ],
      sceneTitles: [
        { zh: '對稱式加密概念', en: 'Symmetric Encryption Concept' },
        { zh: '加密與解密流程', en: 'Encryption & Decryption Process' },
        { zh: '常見演算法比較', en: 'Common Algorithms Comparison' },
        { zh: '操作模式與應用場景', en: 'Modes of Operation & Use Cases' }
      ]
    },
    asymmetric: {
      id: 'asymmetric',
      scenes: [AsymScene1, AsymScene2, AsymScene3, AsymScene4],
      progressLabels: [
        { zh: '基本概念', en: 'Concept' },
        { zh: '加解密流程', en: 'Encrypt/Decrypt' },
        { zh: '數位簽章', en: 'Digital Signature' },
        { zh: '演算法比較', en: 'Algorithms' }
      ],
      sceneTitles: [
        { zh: '非對稱式加密概念', en: 'Asymmetric Encryption Concept' },
        { zh: '加密與解密流程', en: 'Encryption & Decryption Flow' },
        { zh: '數位簽章流程', en: 'Digital Signature Flow' },
        { zh: '常見演算法比較', en: 'Common Algorithms Comparison' }
      ]
    }
  };

  /* ── State ── */
  let currentTopicId = 'certificate';
  let currentScene = 0;
  let currentStep = 0;
  let autoPlayInterval = null;
  let isAutoPlaying = false;

  /* ── DOM refs ── */
  const progressBar = document.getElementById('progressBar');
  const stageArea = document.getElementById('stageArea');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnAuto = document.getElementById('btnAuto');
  const stepIndicator = document.getElementById('stepIndicator');

  /* ── Helpers ── */
  function currentTopic() { return topicRegistry[currentTopicId]; }
  function activeScenes() { return currentTopic().scenes; }

  /* ── Build dynamic DOM ── */
  function buildProgressBar() {
    const topic = currentTopic();
    let html = '';
    topic.progressLabels.forEach((label, i) => {
      if (i > 0) html += '<div class="progress-connector"></div>';
      html += `
        <div class="progress-step${i === 0 ? ' active' : ''}" data-scene="${i}">
          <div class="step-number">${i + 1}</div>
          <div class="step-label">
            <span class="zh">${label.zh}</span>
            <span class="en">${label.en}</span>
          </div>
        </div>`;
    });
    progressBar.innerHTML = html;
    progressBar.querySelectorAll('.progress-step').forEach((step, i) => {
      step.addEventListener('click', () => goToScene(i));
    });
  }

  function buildStage() {
    const topic = currentTopic();
    let html = '';
    topic.sceneTitles.forEach((title, i) => {
      html += `
        <section class="scene${i === 0 ? ' scene-active' : ''}" id="scene${i + 1}">
          <h2 class="scene-title">
            <span class="zh">${title.zh}</span>
            <span class="en">${title.en}</span>
          </h2>
          <div class="animation-area" id="scene${i + 1}-animation"></div>
          <div class="description-area" id="scene${i + 1}-description"></div>
        </section>`;
    });
    stageArea.innerHTML = html;
  }

  /* ── Init / Switch Topic ── */
  function initTopic(topicId) {
    stopAutoPlay();
    currentTopicId = topicId;
    currentScene = 0;
    currentStep = 0;

    buildProgressBar();
    buildStage();

    activeScenes().forEach((scene, i) => {
      const animArea = document.getElementById(`scene${i + 1}-animation`);
      scene.render(animArea);
    });

    activeScenes()[0].activate(0);
    updateUI();
    updateDescription();

    document.querySelectorAll('.topic-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.topic === topicId);
    });
  }

  /* ── Navigation ── */
  function nextStep() {
    const scene = activeScenes()[currentScene];
    if (currentStep < scene.totalSteps - 1) {
      currentStep++;
      scene.activate(currentStep);
      updateUI();
      updateDescription();
    } else if (currentScene < activeScenes().length - 1) {
      goToScene(currentScene + 1);
    } else {
      stopAutoPlay();
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      currentStep--;
      replayScene(currentScene, currentStep);
      updateUI();
      updateDescription();
    } else if (currentScene > 0) {
      const prevIdx = currentScene - 1;
      goToScene(prevIdx, activeScenes()[prevIdx].totalSteps - 1);
    }
  }

  function goToScene(sceneIdx, step) {
    if (sceneIdx === currentScene && step === undefined) return;

    const sceneEls = stageArea.querySelectorAll('.scene');
    sceneEls.forEach(el => el.classList.remove('scene-active'));
    sceneEls[sceneIdx].classList.add('scene-active');

    currentScene = sceneIdx;
    currentStep = step !== undefined ? step : 0;

    const animArea = document.getElementById(`scene${sceneIdx + 1}-animation`);
    activeScenes()[sceneIdx].render(animArea);

    for (let s = 0; s <= currentStep; s++) {
      activeScenes()[sceneIdx].activate(s);
    }

    updateUI();
    updateDescription();
  }

  function replayScene(sceneIdx, upToStep) {
    const animArea = document.getElementById(`scene${sceneIdx + 1}-animation`);
    activeScenes()[sceneIdx].render(animArea);
    for (let s = 0; s <= upToStep; s++) {
      activeScenes()[sceneIdx].activate(s);
    }
  }

  /* ── UI Update ── */
  function updateUI() {
    const scene = activeScenes()[currentScene];
    const globalStep = getGlobalStep();
    const totalGlobal = getTotalSteps();
    stepIndicator.textContent = `${globalStep} / ${totalGlobal}`;

    btnPrev.disabled = (currentScene === 0 && currentStep === 0);
    const isLast = (currentScene === activeScenes().length - 1 && currentStep === scene.totalSteps - 1);
    btnNext.disabled = isLast;

    const progressSteps = progressBar.querySelectorAll('.progress-step');
    progressSteps.forEach((step, i) => {
      step.classList.remove('active', 'completed');
      if (i === currentScene) step.classList.add('active');
      else if (i < currentScene) step.classList.add('completed');
    });
  }

  function updateDescription() {
    const scene = activeScenes()[currentScene];
    const descArea = document.getElementById(`scene${currentScene + 1}-description`);
    const stepData = scene.steps[currentStep];
    descArea.innerHTML = `
      <div class="desc-text anim-fade-in">
        <div class="zh">${stepData.zh}</div>
        <div class="en">${stepData.en}</div>
      </div>`;
  }

  function getGlobalStep() {
    let count = 0;
    for (let i = 0; i < currentScene; i++) count += activeScenes()[i].totalSteps;
    return count + currentStep + 1;
  }

  function getTotalSteps() {
    return activeScenes().reduce((sum, s) => sum + s.totalSteps, 0);
  }

  /* ── Auto Play ── */
  function toggleAutoPlay() {
    isAutoPlaying ? stopAutoPlay() : startAutoPlay();
  }

  function startAutoPlay() {
    isAutoPlaying = true;
    btnAuto.classList.add('playing');
    btnAuto.querySelector('.zh').textContent = '⏸ 暫停';
    btnAuto.querySelector('.en').textContent = '⏸ Pause';
    autoPlayInterval = setInterval(() => {
      const scene = activeScenes()[currentScene];
      const isLast = (currentScene === activeScenes().length - 1 && currentStep === scene.totalSteps - 1);
      if (isLast) { stopAutoPlay(); return; }
      nextStep();
    }, 3000);
  }

  function stopAutoPlay() {
    isAutoPlaying = false;
    btnAuto.classList.remove('playing');
    btnAuto.querySelector('.zh').textContent = '▶ 自動播放';
    btnAuto.querySelector('.en').textContent = '▶ Auto Play';
    if (autoPlayInterval) { clearInterval(autoPlayInterval); autoPlayInterval = null; }
  }

  /* ── Bootstrap ── */
  function boot() {
    document.querySelectorAll('.topic-tab').forEach(tab => {
      tab.addEventListener('click', () => initTopic(tab.dataset.topic));
    });
    btnPrev.addEventListener('click', prevStep);
    btnNext.addEventListener('click', nextStep);
    btnAuto.addEventListener('click', toggleAutoPlay);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextStep(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prevStep(); }
    });
    initTopic('certificate');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
