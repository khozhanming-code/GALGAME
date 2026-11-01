// js/engine.js
const $ = id => document.getElementById(id);
const layers = { bg: $('bg'), char: $('char'), cg: $('cg'), text: $('text'), name: $('name') };

let typeTimer = null;

// ===== 音乐控制 =====
function playBgm(bgmName) {
  if (!bgmName) return;
  if (window._bgm) {
    let oldBgm = window._bgm;
    let fadeOut = setInterval(() => {
      if (oldBgm.volume > 0.05) { oldBgm.volume -= 0.05; } 
      else { oldBgm.pause(); clearInterval(fadeOut); }
    }, 50);
  }
  const newBgm = new Audio(`assets/audio/${bgmName}.mp3`);
  newBgm.loop = true;
  newBgm.volume = 0; 
  newBgm.play().catch(() => {});
  window._bgm = newBgm;
  let fadeIn = setInterval(() => {
    if (newBgm.volume < 0.5) { newBgm.volume += 0.05; } 
    else { clearInterval(fadeIn); }
  }, 50);
  gameState.pendingBgm = null;
}

document.addEventListener('click', function unlockAudio() {
  if (!gameState.audioUnlocked) {
    gameState.audioUnlocked = true;
    if (gameState.pendingBgm) { playBgm(gameState.pendingBgm); }
  }
});

// ===== 核心剧本 =====
function run() {
  const currentLabel = story[gameState.label];
  if (!currentLabel) return;
  const cmd = currentLabel[gameState.pointer];
  if (!cmd) return;
  gameState.pointer++;

  switch (cmd.type) {
    case 'bg':
      layers.bg.src = `assets/bg/${cmd.name}.png`;
      layers.bg.style.opacity = 1;
      setTimeout(run, 300); break;
    case 'show':
      layers.char.src = `assets/char/${cmd.char}_${cmd.expr}.png`;
      layers.char.style.opacity = 1;
      setTimeout(run, 300); break;
    case 'hide':
      layers.char.style.opacity = 0;
      setTimeout(run, 300); break;
    case 'cg':
      layers.cg.src = `assets/cg/${cmd.name}.png`;
      layers.cg.style.opacity = 1;
      layers.cg.style.pointerEvents = 'auto';
      layers.cg.onclick = (e) => { 
        e.stopPropagation(); layers.cg.style.opacity = 0; 
        layers.cg.style.pointerEvents = 'none'; layers.cg.onclick = null; run(); 
      };
      break;
    case 'bgm':
      gameState.pendingBgm = cmd.name;
      if (gameState.audioUnlocked) { playBgm(cmd.name); }
      setTimeout(run, 0); break;
    case 'sfx':
      new Audio(`assets/audio/${cmd.name}.mp3`).play().catch(() => {});
      setTimeout(run, 0); break;
    case 'say': showLine(cmd.who, cmd.text); break;
    case 'menu': showMenu(cmd); break;
    case 'jump': gameState.label = cmd.label; gameState.pointer = 0; run(); break;
    case 'condition':
      let isTrue = false;
      try { isTrue = eval(cmd.check); } catch (e) {}
      gameState.label = isTrue ? cmd.trueLabel : cmd.falseLabel;
      gameState.pointer = 0; run(); break;
    case 'end': unlockEnding(cmd.id || 'bad', cmd.title || '结局', cmd.text || ''); break;
  }
}

function showLine(who, text) {
  const nameMap = { lh: '陆淮', xq: '林晓晴', aunt: '管理员阿姨' };
  $('name').textContent = who ? nameMap[who] : '';
  $('name').style.display = who ? 'block' : 'none';
  gameState.log.push({ who: who ? nameMap[who] : '', text: text });

  layers.text.textContent = '';
  gameState.typing = true;
  gameState.currentText = text;
  let i = 0;
  clearInterval(typeTimer);
  typeTimer = setInterval(() => {
    layers.text.textContent = text.slice(0, ++i);
    if (i >= text.length) { clearInterval(typeTimer); gameState.typing = false; }
  }, 35);
}

$('stage').addEventListener('click', e => {
  if (e.target.closest('#menu') || e.target.closest('#sys-menu') || e.target.closest('.overlay') || e.target.closest('.full-screen-ui') || $('center').style.display === 'flex' || e.target.id === 'cg') return;
  if (gameState.typing) { 
    clearInterval(typeTimer); layers.text.textContent = gameState.currentText; gameState.typing = false; return;
  }
  run();
});

function showMenu(cmd) {
  $('menu').innerHTML = '';
  $('menu').style.display = 'flex';
  layers.text.textContent = cmd.prompt;
  cmd.options.forEach(opt => {
    const b = document.createElement('button');
    b.textContent = opt.text;
    b.onclick = () => {
      $('menu').style.display = 'none';
      const ef = opt.effects || {};
      if (ef.trust) gameState.trust += ef.trust;
      if (ef.clues) gameState.clues += ef.clues;
      if (ef.flag) gameState.flags[ef.flag] = true;
      if (ef.diary !== undefined && ef.diary !== null) gameState.wrote_history.push(ef.diary);
      const targetNext = opt.next || cmd.next;
      if (targetNext) { gameState.label = targetNext; gameState.pointer = 0; }
      run();
    };
    $('menu').appendChild(b);
  });
}

// ===== 存读档 =====
window.saveGame = function(slot) {
  alert(`🔴 准备保存到存档位 ${slot}`);
  try {
    const saveData = JSON.parse(JSON.stringify(gameState));
    saveData.typing = false;
    saveData.visual_bg = layers.bg.src.includes('assets/bg') ? layers.bg.src : null;
    saveData.visual_char = layers.char.src.includes('assets/char') ? layers.char.src : null;
    saveData.visual_char_opacity = layers.char.style.opacity;
    saveData.visual_cg = layers.cg.src.includes('assets/cg') ? layers.cg.src : null;
    saveData.visual_cg_opacity = layers.cg.style.opacity;
    saveData.visual_bgm = window._bgm ? window._bgm.src : null;

    localStorage.setItem(`huinan_save_${slot}`, JSON.stringify(saveData));
    alert(`✅ 成功：已保存到存档位 ${slot}`);
  } catch (e) {
    alert(`❌ 存档报错：${e.message}`);
  }
};

window.loadGame = function(slot) {
  alert(`🔵 准备读取存档位 ${slot}`);
  try {
    const dataStr = localStorage.getItem(`huinan_save_${slot}`);
    if (!dataStr) { alert('该存档位为空，请先存档！'); return; }
    
    const data = JSON.parse(dataStr);
    Object.assign(gameState, data);
    
    // 关闭所有面板
    $('save-panel').style.display = 'none';
    $('load-panel').style.display = 'none';
    $('title-screen').style.display = 'none';
    $('gallery-screen').style.display = 'none';
    $('ending-screen').style.display = 'none';
    $('menu').style.display = 'none';
    $('center').style.display = 'none';
    
    $('textbox').style.display = 'block';
    $('sys-menu').style.display = 'flex';
    
    // 恢复画面
    if (data.visual_bg) { layers.bg.src = data.visual_bg; layers.bg.style.opacity = 1; }
    if (data.visual_char) { layers.char.src = data.visual_char; layers.char.style.opacity = data.visual_char_opacity || 1; }
    else { layers.char.style.opacity = 0; }
    if (data.visual_cg) { layers.cg.src = data.visual_cg; layers.cg.style.opacity = data.visual_cg_opacity || 0; layers.cg.style.pointerEvents = 'auto'; }
    else { layers.cg.style.opacity = 0; layers.cg.style.pointerEvents = 'none'; }

    if (data.visual_bgm && data.visual_bgm.includes('.mp3')) {
      playBgm(data.visual_bgm.split('/').pop().replace('.mp3', ''));
    }

    gameState.typing = false;
    clearInterval(typeTimer);
    
    // 恢复文字
    if (gameState.log && gameState.log.length > 0) {
      const lastLog = gameState.log[gameState.log.length - 1];
      $('name').textContent = lastLog.who || '';
      $('name').style.display = lastLog.who ? 'block' : 'none';
      $('text').textContent = lastLog.text || '';
    }

    alert(`✅ 成功：已读取存档位 ${slot}`);
  } catch (e) {
    alert(`❌ 读档报错：${e.message}`);
  }
};

// ===== UI 控制 =====
window.showTitle = function() {
  $('title-screen').style.display = 'flex';
  $('gallery-screen').style.display = 'none';
  $('ending-screen').style.display = 'none';
  $('textbox').style.display = 'none';
  $('sys-menu').style.display = 'none';
  $('menu').style.display = 'none';
  $('center').style.display = 'none';
  $('save-panel').style.display = 'none';
  $('load-panel').style.display = 'none';
  $('log-panel').style.display = 'none';
  layers.cg.style.opacity = 0; layers.cg.style.pointerEvents = 'none';
  layers.char.style.opacity = 0; 
  layers.bg.style.opacity = 0;
  if (window._bgm) { window._bgm.pause(); window._bgm = null; }
};

window.startNewGame = function() {
  $('title-screen').style.display = 'none';
  $('textbox').style.display = 'block';
  $('sys-menu').style.display = 'flex';
  Object.assign(gameState, {
    pointer: 0, label: 'start', trust: 0, clues: 0,
    wrote_history: [], flags: {}, typing: false, log: [], audioUnlocked: gameState.audioUnlocked
  });
  run();
};

window.showGallery = function() {
  $('gallery-screen').style.display = 'flex';
  
  // 改成 4 个 ID
  const endings = ['true', 'yandere', 'bad_run', 'bad_well'];
  
  endings.forEach(id => {
    const slot = $(`slot-${id}`);
    if (localStorage.getItem(`huinan_end_${id}`)) {
      slot.classList.add('unlocked');
      if (id === 'true') slot.textContent = '破雾迎日';
      if (id === 'yandere') slot.textContent = '迷雾的永生';
      if (id === 'bad_run') slot.textContent = '消失的404';
      if (id === 'bad_well') slot.textContent = '无人生还';
    } else {
      slot.classList.remove('unlocked'); 
      slot.textContent = '???';
    }
  });
};

function unlockEnding(id, title, desc) {
  localStorage.setItem(`huinan_end_${id}`, 'true');
  $('ending-title').textContent = title;
  $('ending-desc').textContent = desc;
  $('ending-screen').style.display = 'flex';
  $('textbox').style.display = 'none';
  $('sys-menu').style.display = 'none';
  if (window._bgm) { window._bgm.pause(); window._bgm = null; }
}

// ===== 启动与右上角菜单 =====
window.onload = () => {
  // 注意这里：存读档彻底分离
  $('sys-save').onclick = () => $('save-panel').style.display = 'flex';
  $('sys-load').onclick = () => $('load-panel').style.display = 'flex';
  $('sys-log').onclick = () => {
    const logBox = $('log-content');
    logBox.innerHTML = gameState.log.map(item => `<p>${item.who ? `<span class="log-name">【${item.who}】</span>` : ''}${item.text}</p>`).join('');
    $('log-panel').style.display = 'flex';
    logBox.scrollTop = logBox.scrollHeight;
  };
  
  showTitle();
};