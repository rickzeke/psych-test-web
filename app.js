/* =============================================
   MindQuest — 心理互动测试平台
   ============================================= */

// ─── Quiz Data ──────────────────────────────
const QUIZZES = {
  color: {
    name: '颜色感知测试', icon: '🎨',
    desc: '探索你的色彩世界——你对蓝色的感知和别人一样吗？',
    questions: [
      {q: '请选择你看到的颜色', type:'color', options:[
        {label:'天空蓝', color:'#87CEEB'},{label:'海洋蓝', color:'#006994'},
        {label:'青蓝', color:'#00BFFF'},{label:'靛蓝', color:'#4B0082'}]},
      {q: '哪组颜色搭配让你最舒服？', type:'palette', options:[
        {label:'暖色调', colors:['#FF6B6B','#FFE66D','#FF8E72']},
        {label:'冷色调', colors:['#4ECDC4','#45B7D1','#96CEB4']},
        {label:'对比色', colors:['#2C3E50','#E74C3C','#F39C12']},
        {label:'单色调', colors:['#A8E6CF','#DCEDC1','#FFD3B6']}]},
      {q: '快速反应：红色让你想到什么？', type:'text', options:[
        {label:'热情/爱情'},{label:'危险/警告'},
        {label:'力量/能量'},{label:'温暖/舒适'}]},
      {q: '你更喜欢哪种色调的照片滤镜？', type:'image', options:[
        {label:'暖黄复古'},{label:'清新蓝调'},
        {label:'黑白经典'},{label:'鲜艳原色'}]},
      {q: '连续看30秒后，你觉得哪种颜色最「吵」？', type:'text', options:[
        {label:'荧光绿'},{label:'霓虹粉'},{label:'电光蓝'},{label:'信号橙'}]}
    ],
    scoring: { creative:[0,2,0,1,0], logical:[1,0,3,2,3], sensitive:[2,3,1,3,1], bold:[3,1,2,0,2] }
  },
  personality: {
    name: '人格类型测试', icon: '🧠',
    desc: '基于大五人格的简化版测试，了解你的核心特质。',
    questions: [
      {q: '在聚会中，你通常会？', options:[
        {label:'主动与陌生人交谈'},{label:'和熟悉的朋友待在一起'},
        {label:'观察周围再决定'},{label:'提前离开'}]},
      {q: '做决定时，你更依赖？', options:[
        {label:'逻辑和分析'},{label:'直觉和感受'},
        {label:'他人建议'},{label:'过往经验'}]},
      {q: '面对deadline压力，你会？', options:[
        {label:'提前完成'},{label:'按计划推进'},
        {label:'最后一刻冲刺'},{label:'请求延期'}]},
      {q: '朋友形容你时最常用的词？', options:[
        {label:'可靠稳重'},{label:'创意无限'},
        {label:'热情开朗'},{label:'安静内敛'}]},
      {q: '周末你更喜欢？', options:[
        {label:'户外冒险'},{label:'学习新技能'},
        {label:'朋友聚会'},{label:'在家独处'}]},
      {q: '面对批评，你通常？', options:[
        {label:'客观分析'},{label:'情绪波动'},
        {label:'寻求解释'},{label:'自我反思'}]}
    ],
    scoring: { extravert:[0,3,2,2,0,1], analytical:[1,0,1,0,1,0], organized:[2,1,0,1,3,3], empathetic:[3,2,3,3,2,2] }
  },
  emotion: {
    name: '情绪模式测试', icon: '💭',
    desc: '了解你的情绪反应模式，发现你的情绪管理风格。',
    questions: [
      {q: '收到意外的负面反馈时，你第一反应是？', options:[
        {label:'冷静分析原因'},{label:'感到沮丧难过'},
        {label:'想要反驳'},{label:'先放一边再说'}]},
      {q: '哪种场景最让你焦虑？', options:[
        {label:'公开演讲'},{label:'社交场合'},
        {label:'时间紧迫'},{label:'不确定的结果'}]},
      {q: '开心时你会？', options:[
        {label:'立刻分享'},{label:'默默享受'},
        {label:'记录下来'},{label:'奖励自己'}]},
      {q: '你觉得自己情绪波动大吗？', options:[
        {label:'很稳定'},{label:'偶尔波动'},
        {label:'经常起伏'},{label:'变化剧烈'}]},
      {q: '压力大时最有效的解压方式？', options:[
        {label:'运动出汗'},{label:'听音乐/看书'},
        {label:'找人倾诉'},{label:'睡一觉'}]}
    ],
    scoring: { resilient:[0,3,1,0,0], expressive:[1,0,0,3,2], avoidant:[3,2,2,1,3], active:[2,1,3,2,1] }
  },
  decision: {
    name: '决策风格测试', icon: '🎯',
    desc: '每个人做决定的方式不同——你是直觉派还是分析派？',
    questions: [
      {q: '买电子产品前，你会？', options:[
        {label:'详细对比参数'},{label:'看评测决定'},
        {label:'凭品牌感觉'},{label:'买最新的'}]},
      {q: '点菜时你通常是？', options:[
        {label:'快速决定'},{label:'犹豫不决'},
        {label:'让别人先点'},{label:'问服务员推荐'}]},
      {q: '重大人生决定更相信？', options:[
        {label:'数据和事实'},{label:'内心直觉'},
        {label:'亲友建议'},{label:'专业人士'}]},
      {q: '做错决定后你会？', options:[
        {label:'复盘总结'},{label:'接受并前行'},
        {label:'自责一段时间'},{label:'尽快弥补'}]},
      {q: '面对多个好选择，你会？', options:[
        {label:'建立评分体系'},{label:'相信第一感觉'},
        {label:'抛硬币决定'},{label:'延后决定'}]}
    ],
    scoring: { rational:[0,0,0,0,0], intuitive:[1,1,1,1,1], dependent:[2,2,2,2,2], avoidant:[3,3,3,3,3] }
  },
  social: {
    name: '社交类型测试', icon: '🤝',
    desc: '你在社交中扮演什么角色？是主角、配角，还是幕后导演？',
    questions: [
      {q: '在团队中你通常是？', options:[
        {label:'主动领导'},{label:'默默执行'},
        {label:'提供创意'},{label:'协调关系'}]},
      {q: '参加大型活动时你的感受？', options:[
        {label:'充满能量'},{label:'有点紧张'},
        {label:'享受观察'},{label:'想早点离开'}]},
      {q: '朋友聚会中，你更倾向于？', options:[
        {label:'主导话题'},{label:'倾听回应'},
        {label:'活跃气氛'},{label:'照顾每人'}]},
      {q: '和新认识的人聊天，你觉得？', options:[
        {label:'轻松自然'},{label:'需要准备'},
        {label:'先观察对方'},{label:'不太自在'}]},
      {q: '你的朋友圈规模大致是？', options:[
        {label:'很多人脉广'},{label:'几个深交'},
        {label:'小圈子'},{label:'独来独往'}]}
    ],
    scoring: { leader:[0,0,0,0,0], connector:[1,1,1,1,1], observer:[2,2,2,2,2], loner:[3,3,3,3,3] }
  }
};

const SCORING_LABELS = {
  creative:'创造力型', logical:'逻辑分析型', sensitive:'感性敏锐型', bold:'大胆果断型',
  extravert:'外向社交型', analytical:'分析思考型', organized:'组织规划型', empathetic:'共情同理型',
  resilient:'韧性适应型', expressive:'表达释放型', avoidant:'回避转移型', active:'主动调节型',
  rational:'理性分析派', intuitive:'直觉行动派', dependent:'依赖参考派',
  leader:'领导组织者', connector:'连接协调者', observer:'观察思考者', loner:'独立自由者'
};

// ─── State ───────────────────────────────────
let currentQuiz = null, currentQ = 0, answers = [], quizHistory = [];

// ─── Init ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadHistory();
  applyTheme();
  renderHome();
});

function loadHistory() {
  try { quizHistory = JSON.parse(localStorage.getItem('mindquest_history') || '[]'); }
  catch { quizHistory = []; }
}

function saveHistory(entry) {
  quizHistory.unshift(entry);
  if (quizHistory.length > 50) quizHistory.pop();
  localStorage.setItem('mindquest_history', JSON.stringify(quizHistory));
}

// ─── Theme ───────────────────────────────────
function applyTheme() {
  const dark = localStorage.getItem('mindquest_theme') === 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = dark ? '☀️' : '🌙';
}

function toggleTheme() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  localStorage.setItem('mindquest_theme', isDark ? 'light' : 'dark');
  applyTheme();
}

// ─── Navigation ──────────────────────────────
function navigate(view) {
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const target = document.querySelector(`.nav-tab[data-view="${view}"]`);
  if (target) target.classList.add('active');
  
  const main = document.getElementById('appMain');
  if (!main) return;
  
  switch(view) {
    case 'home': renderHome(); break;
    case 'history': renderHistory(); break;
    case 'profile': renderProfile(); break;
  }
}

function renderHome() {
  const main = document.getElementById('appMain');
  main.innerHTML = `
    <h1 class="page-title">探索内心世界</h1>
    <p class="page-subtitle">选择一个测试，发现不一样的自己</p>
    <div class="quiz-grid" id="quizGrid"></div>
  `;
  const grid = document.getElementById('quizGrid');
  Object.entries(QUIZZES).forEach(([key, quiz]) => {
    const card = document.createElement('div');
    card.className = 'quiz-card';
    card.innerHTML = `
      <div class="quiz-icon">${quiz.icon}</div>
      <h3>${quiz.name}</h3>
      <p>${quiz.desc}</p>
      <span class="quiz-count">${quiz.questions.length} 道题 · 约${quiz.questions.length}分钟</span>
      <button class="btn-primary" onclick="startQuiz('${key}')">开始测试</button>
    `;
    grid.appendChild(card);
  });
}

// ─── Quiz Flow ────────────────────────────────
function startQuiz(key) {
  currentQuiz = key;
  currentQ = 0;
  answers = [];
  renderQuestion();
}

function renderQuestion() {
  const quiz = QUIZZES[currentQuiz];
  const q = quiz.questions[currentQ];
  const total = quiz.questions.length;
  const progress = ((currentQ) / total) * 100;
  
  const main = document.getElementById('appMain');
  main.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-header">
        <button class="btn-back" onclick="currentQ>0?prevQuestion():renderHome()">← ${currentQ>0?'上一题':'返回'}</button>
        <span class="quiz-progress-text">${currentQ+1} / ${total}</span>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
      <h2 class="question-text">${q.q}</h2>
      <div class="options-grid" id="optionsGrid"></div>
    </div>
  `;
  
  const grid = document.getElementById('optionsGrid');
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    if (q.type === 'palette' && opt.colors) {
      btn.innerHTML = `<span class="palette-dots">${opt.colors.map(c=>`<span style="background:${c}"></span>`).join('')}</span>${opt.label}`;
    } else if (q.type === 'color' && opt.color) {
      btn.innerHTML = `<span class="color-dot" style="background:${opt.color}"></span>${opt.label}`;
    } else {
      btn.textContent = opt.label;
    }
    btn.onclick = () => selectAnswer(i);
    grid.appendChild(btn);
  });
}

function selectAnswer(idx) {
  answers.push(idx);
  const quiz = QUIZZES[currentQuiz];
  if (currentQ < quiz.questions.length - 1) {
    currentQ++;
    // Animate transition
    document.querySelector('.quiz-container').style.opacity = '0';
    document.querySelector('.quiz-container').style.transform = 'translateX(20px)';
    setTimeout(() => {
      renderQuestion();
      setTimeout(() => {
        const c = document.querySelector('.quiz-container');
        if (c) { c.style.opacity = '1'; c.style.transform = 'translateX(0)'; c.style.transition = 'all 0.3s ease'; }
      }, 50);
    }, 300);
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    answers.pop();
    renderQuestion();
  }
}

// ─── Results ──────────────────────────────────
function showResults() {
  const quiz = QUIZZES[currentQuiz];
  const scores = {};
  
  Object.entries(quiz.scoring).forEach(([trait, weights]) => {
    scores[trait] = answers.reduce((sum, ans, i) => sum + (ans === weights[i] ? 1 : 0), 0);
  });
  
  const sorted = Object.entries(scores).sort((a,b) => b[1]-a[1]);
  const top = sorted[0];
  const secondary = sorted[1];
  const maxScore = quiz.questions.length;
  
  // Generate AI insight
  const insights = generateInsight(currentQuiz, top[0], scores);
  
  // Save history
  saveHistory({
    quiz: currentQuiz,
    quizName: quiz.name,
    date: new Date().toISOString(),
    topTrait: top[0],
    topLabel: SCORING_LABELS[top[0]],
    scores,
    answers: [...answers]
  });
  
  const main = document.getElementById('appMain');
  main.innerHTML = `
    <div class="results-container">
      <div class="results-header">
        <h1>${quiz.icon} ${quiz.name} — 结果</h1>
        <p class="result-date">${new Date().toLocaleDateString('zh-CN')}</p>
      </div>
      
      <div class="result-hero">
        <div class="result-type-badge">${SCORING_LABELS[top[0]]}</div>
        <p class="result-strength">你的主导特质</p>
        <div class="result-score-ring">
          <canvas id="scoreRing" width="160" height="160"></canvas>
          <div class="score-center">${Math.round(top[1]/maxScore*100)}%</div>
        </div>
      </div>
      
      <div class="result-charts">
        <div class="chart-card">
          <h3>特质雷达图</h3>
          <canvas id="radarChart" width="300" height="300"></canvas>
        </div>
        <div class="chart-card">
          <h3>特质对比</h3>
          <canvas id="barChart" width="300" height="300"></canvas>
        </div>
      </div>
      
      <div class="insight-card">
        <h3>🤖 AI 深度解读</h3>
        <p>${insights.main}</p>
        <div class="insight-tips">
          <h4>💡 给你的建议</h4>
          <ul>${insights.tips.map(t=>`<li>${t}</li>`).join('')}</ul>
        </div>
      </div>
      
      <div class="result-actions">
        <button class="btn-primary" onclick="shareResult()">📤 分享结果</button>
        <button class="btn-secondary" onclick="retakeQuiz()">🔄 重新测试</button>
        <button class="btn-secondary" onclick="renderHome()">🏠 更多测试</button>
      </div>
    </div>
  `;
  
  // Draw charts
  setTimeout(() => drawScoreRing(scores, maxScore), 100);
  setTimeout(() => drawRadarChart(scores), 150);
  setTimeout(() => drawBarChart(sorted), 200);
}

function generateInsight(quizKey, trait, scores) {
  const label = SCORING_LABELS[trait];
  const insights = {
    color: {
      main: `作为${label}，你对色彩有着独特的感知力。你的大脑在处理视觉信息时，右脑的创造力区域异常活跃。研究表明，具有这种色彩感知模式的人通常在艺术、设计和创意领域表现出色。你看到的世界比大多数人更加丰富和细腻。`,
      tips: ['尝试用色彩日记记录每天的情绪变化', '学习基础色彩理论，发掘你的设计潜能', '关注不同文化中色彩的含义差异']
    },
    personality: {
      main: `你的核心人格特质是${label}。这意味着你在社交、工作和生活中展现出独特的模式。大五人格研究显示，${label}的人在特定职业领域往往表现更为出色。了解自己的人格特质是自我成长的第一步。`,
      tips: ['利用你的核心优势选择适合的工作方式', '注意平衡——每种特质都有其优劣势', '尝试理解不同人格类型的人，改善人际关系']
    },
    emotion: {
      main: `你的情绪模式偏向${label}。这反映了你处理压力和情感的独特方式。情绪没有好坏之分，了解自己的模式能帮助你更有效地管理情绪，提升生活满意度和工作表现。`,
      tips: ['建立适合自己的情绪调节工具箱', '在情绪波动时给自己5分钟的缓冲时间', '尝试正念冥想，增强情绪觉察能力']
    },
    decision: {
      main: `你的决策风格是${label}。在快节奏的世界里，了解自己的决策偏好可以帮助你做出更明智的选择。每种风格都有优势——关键是在合适的情境下运用合适的方式。`,
      tips: ['重要决定前尝试「反方向思考」——如果选择相反会怎样？', '结合直觉和分析，避免单一决策模式', '重大决定前睡一觉，让潜意识帮忙处理']
    },
    social: {
      main: `在社交中你是${label}。社交类型没有优劣之分——内向者和外向者各有优势。关键是理解自己的社交需求，在消耗和充电之间找到平衡。`,
      tips: ['尊重自己的社交节奏，不必强迫改变', '找到适合自己的社交场景和人数规模', '深度关系比广度更有价值']
    }
  };
  return insights[quizKey] || insights.personality;
}

// ─── Charts ───────────────────────────────────
function drawScoreRing(scores, max) {
  const canvas = document.getElementById('scoreRing');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const vals = Object.values(scores);
  const avg = vals.reduce((a,b)=>a+b,0) / vals.length;
  const pct = avg / max;
  
  ctx.clearRect(0,0,160,160);
  // Background ring
  ctx.beginPath(); ctx.arc(80,80,60,0,Math.PI*2);
  ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 12; ctx.stroke();
  // Score ring
  const gradient = ctx.createLinearGradient(0,0,160,0);
  gradient.addColorStop(0,'#FF6B6B'); gradient.addColorStop(0.5,'#FFD93D'); gradient.addColorStop(1,'#6BCB77');
  ctx.beginPath(); ctx.arc(80,80,60,-Math.PI/2,-Math.PI/2+Math.PI*2*pct);
  ctx.strokeStyle = gradient; ctx.lineWidth = 12; ctx.stroke();
}

function drawRadarChart(scores) {
  const canvas = document.getElementById('radarChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w=300, h=300, cx=150, cy=150, r=110;
  const keys = Object.keys(scores);
  const n = keys.length;
  
  ctx.clearRect(0,0,w,h);
  const maxVal = Math.max(...Object.values(scores), 1);
  
  // Grid
  for (let lvl=1; lvl<=3; lvl++) {
    ctx.beginPath();
    keys.forEach((k,i) => {
      const angle = (Math.PI*2/n)*i - Math.PI/2;
      const pr = r*lvl/3;
      const x = cx + pr*Math.cos(angle), y = cy + pr*Math.sin(angle);
      i===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
    });
    ctx.closePath();
    ctx.strokeStyle = 'rgba(255,255,255,0.1)'; ctx.stroke();
  }
  
  // Axes
  ctx.strokeStyle = 'rgba(255,255,255,0.2)';
  keys.forEach((k,i) => {
    const angle = (Math.PI*2/n)*i - Math.PI/2;
    ctx.beginPath(); ctx.moveTo(cx,cy);
    ctx.lineTo(cx+r*Math.cos(angle), cy+r*Math.sin(angle));
    ctx.stroke();
  });
  
  // Data
  ctx.beginPath();
  keys.forEach((k,i) => {
    const angle = (Math.PI*2/n)*i - Math.PI/2;
    const pr = r*scores[k]/maxVal;
    const x = cx + pr*Math.cos(angle), y = cy + pr*Math.sin(angle);
    i===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
  });
  ctx.closePath();
  ctx.fillStyle = 'rgba(108,99,255,0.3)'; ctx.fill();
  ctx.strokeStyle = '#6C63FF'; ctx.lineWidth = 2; ctx.stroke();
  
  // Labels
  ctx.fillStyle = '#fff'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
  keys.forEach((k,i) => {
    const angle = (Math.PI*2/n)*i - Math.PI/2;
    const lx = cx + (r+25)*Math.cos(angle), ly = cy + (r+25)*Math.sin(angle);
    ctx.fillText(SCORING_LABELS[k].slice(0,4), lx, ly);
  });
}

function drawBarChart(sorted) {
  const canvas = document.getElementById('barChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w=300, h=300, pad=50;
  const maxVal = Math.max(...sorted.map(s=>s[1]), 1);
  const barW = (w-pad*2) / sorted.length - 10;
  
  ctx.clearRect(0,0,w,h);
  
  sorted.forEach(([key, val], i) => {
    const bh = (val/maxVal) * (h-pad*2);
    const x = pad + i*(barW+10), y = h-pad-bh;
    
    const gradient = ctx.createLinearGradient(x,y,x,y+bh);
    gradient.addColorStop(0,'#FF6B6B'); gradient.addColorStop(1,'#6C63FF');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.roundRect(x, y, barW, bh, [4,4,0,0]);
    ctx.fill();
    
    ctx.fillStyle = '#fff'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(val, x+barW/2, y-5);
    ctx.fillText(SCORING_LABELS[key].slice(0,3), x+barW/2, h-pad+15);
  });
}

// ─── History & Profile ────────────────────────
function renderHistory() {
  const main = document.getElementById('appMain');
  if (quizHistory.length === 0) {
    main.innerHTML = `<h1 class="page-title">测试历史</h1><div class="empty-state"><p>📋 还没有完成过测试</p><button class="btn-primary" onclick="renderHome()">开始第一个测试</button></div>`;
    return;
  }
  
  main.innerHTML = `<h1 class="page-title">测试历史</h1><div class="history-grid" id="historyGrid"></div>`;
  const grid = document.getElementById('historyGrid');
  
  quizHistory.forEach((h, idx) => {
    const card = document.createElement('div');
    card.className = 'history-card';
    card.innerHTML = `
      <div class="history-icon">${QUIZZES[h.quiz]?.icon||'📊'}</div>
      <div class="history-info">
        <h4>${h.quizName}</h4>
        <span class="history-date">${new Date(h.date).toLocaleDateString('zh-CN')}</span>
        <span class="history-trait">${h.topLabel}</span>
      </div>
      <button class="btn-small" onclick="viewHistoryDetail(${idx})">查看</button>
    `;
    grid.appendChild(card);
  });
}

function viewHistoryDetail(idx) {
  const h = quizHistory[idx];
  if (!h) return;
  // Re-render results from stored data
  currentQuiz = h.quiz;
  answers = h.answers;
  showResults();
}

function renderProfile() {
  const main = document.getElementById('appMain');
  const allTraits = {};
  quizHistory.forEach(h => {
    Object.entries(h.scores||{}).forEach(([k,v]) => {
      allTraits[k] = (allTraits[k]||0) + v;
    });
  });
  
  const dominant = Object.entries(allTraits).sort((a,b)=>b[1]-a[1]);
  
  main.innerHTML = `
    <h1 class="page-title">人格档案</h1>
    <div class="profile-stats">
      <div class="stat-card"><h3>${quizHistory.length}</h3><span>完成测试</span></div>
      <div class="stat-card"><h3>${Object.keys(allTraits).length}</h3><span>发现特质</span></div>
      <div class="stat-card"><h3>${dominant.length>0?SCORING_LABELS[dominant[0][0]]:'--'}</h3><span>主导人格</span></div>
    </div>
    ${dominant.length>0 ? `
    <div class="chart-card" style="margin-top:20px">
      <h3>综合特质画像</h3>
      <canvas id="profileRadar" width="340" height="340"></canvas>
    </div>` : '<p class="empty-state" style="margin-top:40px">完成更多测试来建立你的人格档案</p>'}
  `;
  
  if (dominant.length > 0) {
    setTimeout(() => {
      const canvas = document.getElementById('profileRadar');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const scores = {};
      dominant.forEach(([k,v]) => scores[k] = v);
      const w=340, h=340, cx=170, cy=170, r=130;
      const keys = Object.keys(scores);
      const n = keys.length;
      const maxVal = Math.max(...Object.values(scores), 1);
      
      ctx.clearRect(0,0,w,h);
      for(let lvl=1; lvl<=3; lvl++) {
        ctx.beginPath();
        keys.forEach((k,i) => {
          const angle = (Math.PI*2/n)*i - Math.PI/2;
          const pr = r*lvl/3;
          const x = cx+pr*Math.cos(angle), y = cy+pr*Math.sin(angle);
          i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
        });
        ctx.closePath();
        ctx.strokeStyle = 'rgba(255,255,255,0.1)'; ctx.stroke();
      }
      ctx.beginPath();
      keys.forEach((k,i) => {
        const angle = (Math.PI*2/n)*i - Math.PI/2;
        const pr = r*scores[k]/maxVal;
        const x = cx+pr*Math.cos(angle), y = cy+pr*Math.sin(angle);
        i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      });
      ctx.closePath();
      ctx.fillStyle = 'rgba(255,107,107,0.3)'; ctx.fill();
      ctx.strokeStyle = '#FF6B6B'; ctx.lineWidth = 2; ctx.stroke();
      
      ctx.fillStyle = '#fff'; ctx.font = '12px sans-serif'; ctx.textAlign = 'center';
      keys.forEach((k,i) => {
        const angle = (Math.PI*2/n)*i - Math.PI/2;
        const lx = cx+(r+25)*Math.cos(angle), ly = cy+(r+25)*Math.sin(angle);
        ctx.fillText(SCORING_LABELS[k]?.slice(0,4)||k, lx, ly);
      });
    }, 150);
  }
}

// ─── Share ────────────────────────────────────
function shareResult() {
  const quiz = QUIZZES[currentQuiz];
  const scores = {};
  quizHistory[0]?.scores && Object.entries(quizHistory[0].scores).forEach(([k,v])=>scores[k]=v);
  const top = Object.entries(scores).sort((a,b)=>b[1]-a[1])[0];
  
  const canvas = document.createElement('canvas');
  canvas.width = 600; canvas.height = 800;
  const ctx = canvas.getContext('2d');
  
  // Background
  const bg = ctx.createLinearGradient(0,0,600,800);
  bg.addColorStop(0,'#1a1a2e'); bg.addColorStop(1,'#16213e');
  ctx.fillStyle = bg; ctx.fillRect(0,0,600,800);
  
  // Decorations
  for (let i=0; i<20; i++) {
    ctx.beginPath();
    ctx.arc(Math.random()*600, Math.random()*800, Math.random()*3+1, 0, Math.PI*2);
    ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.fill();
  }
  
  // Content
  ctx.fillStyle = '#fff'; ctx.font = 'bold 36px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText(`${quiz.icon} ${quiz.name}`, 300, 100);
  
  ctx.font = '20px sans-serif'; ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.fillText(`我的主导特质`, 300, 200);
  
  ctx.font = 'bold 48px sans-serif'; ctx.fillStyle = '#FF6B6B';
  ctx.fillText(SCORING_LABELS[top[0]], 300, 280);
  
  ctx.font = '16px sans-serif'; ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.fillText(`得分: ${top[1]}/${QUIZZES[currentQuiz].questions.length}`, 300, 340);
  
  // Mini radar
  const r=120, cx=300, cy=520;
  const keys = Object.keys(scores), n=keys.length, maxVal = Math.max(...Object.values(scores),1);
  ctx.strokeStyle = 'rgba(255,255,255,0.1)';
  for(let lvl=1; lvl<=3; lvl++) {
    ctx.beginPath();
    keys.forEach((k,i) => {
      const angle = (Math.PI*2/n)*i - Math.PI/2;
      const pr = r*lvl/3;
      i===0?ctx.moveTo(cx+pr*Math.cos(angle),cy+pr*Math.sin(angle)):ctx.lineTo(cx+pr*Math.cos(angle),cy+pr*Math.sin(angle));
    });
    ctx.closePath(); ctx.stroke();
  }
  ctx.beginPath();
  keys.forEach((k,i) => {
    const angle = (Math.PI*2/n)*i - Math.PI/2;
    const pr = r*scores[k]/maxVal;
    i===0?ctx.moveTo(cx+pr*Math.cos(angle),cy+pr*Math.sin(angle)):ctx.lineTo(cx+pr*Math.cos(angle),cy+pr*Math.sin(angle));
  });
  ctx.closePath();
  ctx.fillStyle = 'rgba(108,99,255,0.3)'; ctx.fill();
  ctx.strokeStyle = '#6C63FF'; ctx.lineWidth = 2; ctx.stroke();
  
  // Footer
  ctx.font = '14px sans-serif'; ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.textAlign = 'center';
  ctx.fillText('MindQuest · 探索你的内心世界', 300, 720);
  ctx.fillText(new Date().toLocaleDateString('zh-CN'), 300, 750);
  
  // Download
  const link = document.createElement('a');
  link.download = `mindquest-${currentQuiz}-${Date.now()}.png`;
  link.href = canvas.toDataURL();
  link.click();
  
  showToast('分享卡片已生成！');
}

function retakeQuiz() {
  currentQ = 0; answers = [];
  renderQuestion();
}

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => { t.classList.add('show'); }, 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2000);
}

// ─── Polyfills ────────────────────────────────
if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function(x,y,w,h,r) {
    if (typeof r === 'number') r = {tl:r,tr:r,br:r,bl:r};
    this.beginPath();
    this.moveTo(x+r.tl, y);
    this.lineTo(x+w-r.tr, y);
    this.quadraticCurveTo(x+w, y, x+w, y+r.tr);
    this.lineTo(x+w, y+h-r.br);
    this.quadraticCurveTo(x+w, y+h, x+w-r.br, y+h);
    this.lineTo(x+r.bl, y+h);
    this.quadraticCurveTo(x, y+h, x, y+h-r.bl);
    this.lineTo(x, y+r.tl);
    this.quadraticCurveTo(x, y, x+r.tl, y);
    this.closePath();
  };
}

// Make functions global for onclick handlers
window.toggleTheme = toggleTheme;
window.navigate = navigate;
window.startQuiz = startQuiz;
window.prevQuestion = prevQuestion;
window.renderHome = renderHome;
window.renderHistory = renderHistory;
window.renderProfile = renderProfile;
window.shareResult = shareResult;
window.retakeQuiz = retakeQuiz;
window.viewHistoryDetail = viewHistoryDetail;
