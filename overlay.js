(function () {
  'use strict';

  /* ── Storage keys ───────────────────────────────────────── */
  var RC_LANG_KEY   = 'rc_v3_lang';
  var OV_LANG_KEY   = 'rc_overlay_lang';
  var OV_DONE_KEY   = 'rc_overlay_done';

  /* ── Language configs ───────────────────────────────────── */
  var LANGS = [
    { code: 'pt',    flag: '🇧🇷', label: 'Português',     rcLang: 'pt', dir: 'ltr' },
    { code: 'en-us', flag: '🇺🇸', label: 'English (US)',  rcLang: 'en', dir: 'ltr' },
    { code: 'en-gb', flag: '🇬🇧', label: 'English (UK)',  rcLang: 'en', dir: 'ltr' },
    { code: 'zh',    flag: '🇨🇳', label: '中文',           rcLang: 'en', dir: 'ltr' },
    { code: 'hi',    flag: '🇮🇳', label: 'हिन्दी',          rcLang: 'en', dir: 'ltr' },
    { code: 'ar',    flag: '🇸🇦', label: 'العربية',        rcLang: 'en', dir: 'rtl' },
  ];

  /* ── UI translations (overlay text) ────────────────────── */
  var UI = {
    'pt': {
      title: 'Selecionar Idioma', subtitle: 'Escolha seu idioma para continuar',
      nickTitle: 'Digite seu Nick', nickSub: 'Insira seu username do Roblox para entrar',
      placeholder: 'Username do Roblox', btn: 'Verificar', checking: 'Verificando...',
      errNotFound: '❌ Usuário não encontrado no Roblox',
      errAge: '❌ Conta inválida — menos de 80 dias',
      errServer: '⚠️ Erro ao verificar. Tente novamente.',
    },
    'en-us': {
      title: 'Select Language', subtitle: 'Choose your language to continue',
      nickTitle: 'Enter your Nick', nickSub: 'Enter your Roblox username to access',
      placeholder: 'Roblox Username', btn: 'Verify', checking: 'Checking...',
      errNotFound: '❌ Roblox user not found',
      errAge: '❌ Invalid account — under 80 days old',
      errServer: '⚠️ Verification error. Please try again.',
    },
    'en-gb': {
      title: 'Select Language', subtitle: 'Choose your language to continue',
      nickTitle: 'Enter your Nick', nickSub: 'Enter your Roblox username to access',
      placeholder: 'Roblox Username', btn: 'Verify', checking: 'Checking...',
      errNotFound: '❌ Roblox user not found',
      errAge: '❌ Invalid account — under 80 days old',
      errServer: '⚠️ Verification error. Please try again.',
    },
    'zh': {
      title: '选择语言', subtitle: '请选择您的语言以继续',
      nickTitle: '输入您的昵称', nickSub: '请输入您的 Roblox 用户名以进入',
      placeholder: 'Roblox 用户名', btn: '验证', checking: '验证中...',
      errNotFound: '❌ 未找到 Roblox 用户',
      errAge: '❌ 账号无效 — 注册不足 80 天',
      errServer: '⚠️ 验证失败，请重试。',
    },
    'hi': {
      title: 'भाषा चुनें', subtitle: 'जारी रखने के लिए भाषा चुनें',
      nickTitle: 'Nick दर्ज करें', nickSub: 'प्रवेश के लिए Roblox username दर्ज करें',
      placeholder: 'Roblox Username', btn: 'सत्यापित करें', checking: 'जाँच हो रही है...',
      errNotFound: '❌ Roblox उपयोगकर्ता नहीं मिला',
      errAge: '❌ अमान्य खाता — 80 दिन से कम पुराना',
      errServer: '⚠️ सत्यापन विफल। पुनः प्रयास करें।',
    },
    'ar': {
      title: 'اختر اللغة', subtitle: 'اختر لغتك للمتابعة',
      nickTitle: 'أدخل اسمك', nickSub: 'أدخل اسم مستخدم Roblox للدخول',
      placeholder: 'اسم مستخدم Roblox', btn: 'تحقق', checking: 'جارٍ التحقق...',
      errNotFound: '❌ مستخدم Roblox غير موجود',
      errAge: '❌ حساب غير صالح — أقل من 80 يومًا',
      errServer: '⚠️ فشل التحقق. حاول مرة أخرى.',
    },
  };

  /* ── Site-wide text translations ────────────────────────── */
  var SITE = {
    'zh': {
      'WELCOME TO THE CONDO': '欢迎来到 CONDO',
      'The ultimate destination for exclusive Roblox games. Pick your game, jump in, and dominate.': 'Roblox 独家游戏的终极目的地。选择你的游戏，加入并称霸。',
      'Featured Games': '精选游戏', 'games available': '个游戏可用',
      'PLAY NOW': '立即游玩', 'Play Now': '立即游玩',
      'Entry Requirements': '入场要求', 'Access Game': '进入游戏',
      'Generate Token': '生成令牌', 'Copy token': '复制令牌',
      'Accounts under 80 days old': '账号少于 80 天',
    },
    'hi': {
      'WELCOME TO THE CONDO': 'CONDO में आपका स्वागत है',
      'The ultimate destination for exclusive Roblox games. Pick your game, jump in, and dominate.': 'Roblox के एक्सक्लूसिव गेम्स की सर्वश्रेष्ठ जगह।',
      'Featured Games': 'विशेष खेल', 'games available': 'खेल उपलब्ध',
      'PLAY NOW': 'अभी खेलें', 'Play Now': 'अभी खेलें',
      'Entry Requirements': 'प्रवेश आवश्यकताएं', 'Access Game': 'गेम एक्सेस करें',
      'Generate Token': 'टोकन बनाएं', 'Copy token': 'टोकन कॉपी करें',
      'Accounts under 80 days old': '80 दिन से कम पुराने खाते',
    },
    'ar': {
      'WELCOME TO THE CONDO': 'مرحباً بك في CONDO',
      'The ultimate destination for exclusive Roblox games. Pick your game, jump in, and dominate.': 'الوجهة المثالية لألعاب Roblox الحصرية. اختر لعبتك وانضم وسيطر.',
      'Featured Games': 'الألعاب المميزة', 'games available': 'ألعاب متاحة',
      'PLAY NOW': 'العب الآن', 'Play Now': 'العب الآن',
      'Entry Requirements': 'متطلبات الدخول', 'Access Game': 'دخول اللعبة',
      'Generate Token': 'إنشاء رمز', 'Copy token': 'نسخ الرمز',
      'Accounts under 80 days old': 'حسابات أقل من 80 يومًا',
    },
  };

  /* ── Helpers ─────────────────────────────────────────────── */
  function getLang() { return localStorage.getItem(OV_LANG_KEY) || 'en-us'; }
  function t(key) { return (UI[getLang()] || UI['en-us'])[key] || key; }

  /* ── Sound ───────────────────────────────────────────────── */
  var audio = null;
  function playClick() {
    try {
      if (!audio) { audio = new Audio('/click-sound.mp3'); audio.volume = 0.5; }
      audio.currentTime = 0;
      audio.play().catch(function () {});
    } catch (e) {}
  }

  /* ── Token enforcement ───────────────────────────────────── */
  var tokenGeneratedInSession = false;

  var WARN_MSGS = {
    'pt': 'Gere um token primeiro para acessar o jogo.',
    'en-us': 'Generate a token first to access the game.',
    'en-gb': 'Generate a token first to access the game.',
    'zh': '请先生成令牌以访问游戏。',
    'hi': 'गेम एक्सेस करने के लिए पहले टोकन जनरेट करें।',
    'ar': 'قم بإنشاء رمز أولاً للوصول إلى اللعبة.',
  };

  function showTokenWarning() {
    var msg = WARN_MSGS[getLang()] || WARN_MSGS['en-us'];
    var ex = document.getElementById('rc-token-warning');
    if (ex) return;
    var warn = document.createElement('div');
    warn.id = 'rc-token-warning';
    warn.style.cssText = [
      'position:fixed','bottom:24px','left:50%','transform:translateX(-50%)',
      'background:linear-gradient(135deg,#1a0c3d,#2a0f59)',
      'border:1px solid rgba(139,92,246,0.4)','color:#c4b5fd',
      'font-size:13px','font-weight:600','padding:10px 20px',
      'border-radius:12px','z-index:999999','white-space:nowrap',
      'box-shadow:0 8px 32px rgba(124,58,237,0.3)',
      'font-family:Outfit,Inter,sans-serif',
    ].join(';');
    warn.textContent = msg;
    document.body.appendChild(warn);
    setTimeout(function () { warn.remove(); }, 2800);
  }

  /* ── Site text translation ───────────────────────────────── */
  function translateNode(node) {
    var lang = getLang();
    var map = SITE[lang];
    if (!map) return;
    var walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null);
    var textNode;
    while ((textNode = walker.nextNode())) {
      var orig = textNode.nodeValue && textNode.nodeValue.trim();
      if (orig && map[orig]) {
        textNode.nodeValue = textNode.nodeValue.replace(orig, map[orig]);
      }
    }
  }

  function applyTranslations() {
    translateNode(document.body);
  }

  /* ── Overlay styles ──────────────────────────────────────── */
  var overlayCSS = [
    '#rc-overlay{position:fixed;inset:0;z-index:999998;background:rgba(4,9,19,0.97);',
    'display:flex;align-items:center;justify-content:center;',
    'font-family:Outfit,Inter,sans-serif;transition:opacity .3s ease;}',
    '#rc-overlay.rc-fade-out{opacity:0;pointer-events:none;}',
    '#rc-overlay .rc-card{background:linear-gradient(180deg,rgba(12,22,50,.98),rgba(8,16,38,.98));',
    'border:1px solid rgba(139,92,246,.22);border-radius:1.5rem;padding:2rem;width:100%;max-width:400px;',
    'box-shadow:0 0 80px rgba(124,58,237,.12),0 40px 80px rgba(0,0,0,.8);',
    'position:relative;overflow:hidden;}',
    '#rc-overlay .rc-card::before{content:"";position:absolute;top:0;left:20%;right:20%;height:1px;',
    'background:linear-gradient(90deg,transparent,rgba(167,139,250,.6),transparent);}',
    '#rc-overlay .rc-badge{display:inline-flex;align-items:center;gap:6px;',
    'background:rgba(124,58,237,.12);border:1px solid rgba(139,92,246,.3);',
    'border-radius:99px;padding:4px 12px;font-size:11px;font-weight:700;',
    'letter-spacing:.08em;text-transform:uppercase;color:#c4b5fd;margin-bottom:1.2rem;}',
    '#rc-overlay .rc-badge span.dot{width:6px;height:6px;border-radius:50%;',
    'background:#8b5cf6;box-shadow:0 0 8px rgba(139,92,246,.8);display:inline-block;}',
    '#rc-overlay h2{font-size:1.4rem;font-weight:800;color:#fff;margin:0 0 .4rem;letter-spacing:-.02em;}',
    '#rc-overlay p.rc-sub{color:#64748b;font-size:.85rem;margin:0 0 1.5rem;}',
    '#rc-overlay .rc-lang-btn{width:100%;display:flex;align-items:center;gap:14px;',
    'padding:13px 16px;border-radius:1rem;background:rgba(15,25,55,.9);',
    'border:1px solid rgba(139,92,246,.12);color:#fff;font-size:.9rem;font-weight:600;',
    'cursor:pointer;transition:all .2s;margin-bottom:8px;text-align:left;}',
    '#rc-overlay .rc-lang-btn:hover{background:rgba(20,35,75,.95);',
    'border-color:rgba(139,92,246,.35);transform:translateX(3px);}',
    '#rc-overlay .rc-lang-btn .flag{font-size:1.5rem;line-height:1;}',
    '#rc-overlay .rc-lang-btn .arrow{margin-left:auto;color:#334155;font-size:.9rem;}',
    '#rc-overlay .rc-input{width:100%;padding:12px 16px;border-radius:.9rem;',
    'background:rgba(15,25,55,.9);border:1px solid rgba(139,92,246,.2);',
    'color:#fff;font-size:.95rem;font-family:Outfit,Inter,sans-serif;',
    'outline:none;transition:border-color .2s;box-sizing:border-box;margin-bottom:.8rem;}',
    '#rc-overlay .rc-input:focus{border-color:rgba(139,92,246,.55);',
    'box-shadow:0 0 0 3px rgba(139,92,246,.1);}',
    '#rc-overlay .rc-input::placeholder{color:#334155;}',
    '#rc-overlay .rc-verify-btn{width:100%;padding:13px;border-radius:.9rem;',
    'background:linear-gradient(135deg,#6d28d9,#8b5cf6 60%,#7c3aed);',
    'border:none;color:#fff;font-size:.95rem;font-weight:700;cursor:pointer;',
    'transition:all .25s;box-shadow:0 4px 20px rgba(124,58,237,.4);',
    'font-family:Outfit,Inter,sans-serif;letter-spacing:.01em;}',
    '#rc-overlay .rc-verify-btn:hover:not(:disabled){transform:translateY(-1px);',
    'box-shadow:0 6px 30px rgba(139,92,246,.55);}',
    '#rc-overlay .rc-verify-btn:disabled{opacity:.5;cursor:not-allowed;}',
    '#rc-overlay .rc-error{color:#fca5a5;font-size:.83rem;font-weight:600;',
    'margin-top:.6rem;min-height:1.2rem;text-align:center;}',
    '#rc-overlay .rc-back{background:none;border:none;color:#475569;font-size:.8rem;',
    'cursor:pointer;margin-top:.8rem;width:100%;font-family:Outfit,Inter,sans-serif;',
    'text-decoration:underline;}',
    '#rc-overlay .rc-back:hover{color:#c4b5fd;}',
  ].join('');

  function injectOverlayCSS() {
    var style = document.createElement('style');
    style.textContent = overlayCSS;
    document.head.appendChild(style);
  }

  /* ── Step 1: Language selection ─────────────────────────── */
  function renderLangStep(card) {
    card.innerHTML = '';
    var dir = 'ltr';
    card.setAttribute('dir', dir);

    var badge = document.createElement('div');
    badge.className = 'rc-badge';
    badge.innerHTML = '<span class="dot"></span> Roblox Condo';
    card.appendChild(badge);

    var h2 = document.createElement('h2');
    h2.textContent = UI['en-us'].title;
    card.appendChild(h2);

    var sub = document.createElement('p');
    sub.className = 'rc-sub';
    sub.textContent = UI['en-us'].subtitle;
    card.appendChild(sub);

    LANGS.forEach(function (lang) {
      var btn = document.createElement('button');
      btn.className = 'rc-lang-btn';
      btn.innerHTML = '<span class="flag">' + lang.flag + '</span>' +
        '<span>' + lang.label + '</span>' +
        '<span class="arrow">›</span>';
      btn.addEventListener('click', function () {
        playClick();
        localStorage.setItem(OV_LANG_KEY, lang.code);
        localStorage.setItem(RC_LANG_KEY, lang.rcLang);
        renderNickStep(card);
      });
      card.appendChild(btn);
    });
  }

  /* ── Step 2: Nick input ──────────────────────────────────── */
  function renderNickStep(card) {
    var lang = getLang();
    var txt = UI[lang] || UI['en-us'];
    var isRtl = lang === 'ar';

    card.innerHTML = '';
    card.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    var badge = document.createElement('div');
    badge.className = 'rc-badge';
    badge.innerHTML = '<span class="dot"></span> Roblox Condo';
    card.appendChild(badge);

    var h2 = document.createElement('h2');
    h2.textContent = txt.nickTitle;
    card.appendChild(h2);

    var sub = document.createElement('p');
    sub.className = 'rc-sub';
    sub.textContent = txt.nickSub;
    card.appendChild(sub);

    var input = document.createElement('input');
    input.className = 'rc-input';
    input.type = 'text';
    input.placeholder = txt.placeholder;
    input.autocomplete = 'off';
    input.spellcheck = false;
    card.appendChild(input);

    var verifyBtn = document.createElement('button');
    verifyBtn.className = 'rc-verify-btn';
    verifyBtn.textContent = txt.btn;
    card.appendChild(verifyBtn);

    var errDiv = document.createElement('div');
    errDiv.className = 'rc-error';
    card.appendChild(errDiv);

    var backBtn = document.createElement('button');
    backBtn.className = 'rc-back';
    backBtn.textContent = isRtl ? '← رجوع' : '← Back';
    backBtn.addEventListener('click', function () {
      playClick();
      renderLangStep(card);
    });
    card.appendChild(backBtn);

    function handleResult(data) {
      if (data.reason === 'not_found') {
        errDiv.textContent = txt.errNotFound;
        verifyBtn.disabled = false;
        verifyBtn.textContent = txt.btn;
      } else if (data.reason === 'too_new') {
        errDiv.textContent = txt.errAge + ' (' + data.days + ' dias)';
        verifyBtn.disabled = false;
        verifyBtn.textContent = txt.btn;
      } else if (data.valid) {
        var overlay = document.getElementById('rc-overlay');
        if (overlay) {
          overlay.classList.add('rc-fade-out');
          setTimeout(function () { overlay.remove(); }, 320);
        }
        localStorage.setItem(OV_DONE_KEY, '1');
        sendNickLog(data.username || username, lang);
        applyTranslations();
      } else {
        errDiv.textContent = txt.errServer;
        verifyBtn.disabled = false;
        verifyBtn.textContent = txt.btn;
      }
    }

    function checkDirect(username) {
      var PROXY = 'https://corsproxy.io/?url=';
      fetch(PROXY + encodeURIComponent('https://users.roblox.com/v1/usernames/users'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usernames: [username], excludeBannedUsers: false }),
      })
        .then(function (r) { return r.json(); })
        .then(function (d) {
          if (!d.data || d.data.length === 0) { handleResult({ valid: false, reason: 'not_found' }); return null; }
          return fetch(PROXY + encodeURIComponent('https://users.roblox.com/v1/users/' + d.data[0].id))
            .then(function (r) { return r.json(); });
        })
        .then(function (u) {
          if (!u) return;
          var days = Math.floor((Date.now() - new Date(u.created).getTime()) / 86400000);
          handleResult({ valid: days >= 80, days: days, username: u.name, reason: days < 80 ? 'too_new' : undefined });
        })
        .catch(function () {
          errDiv.textContent = txt.errServer;
          verifyBtn.disabled = false;
          verifyBtn.textContent = txt.btn;
        });
    }

    function doVerify() {
      var username = input.value.trim();
      if (!username) { errDiv.textContent = ''; input.focus(); return; }

      verifyBtn.disabled = true;
      verifyBtn.textContent = txt.checking;
      errDiv.textContent = '';

      fetch('/api/roblox/check?username=' + encodeURIComponent(username))
        .then(function (r) {
          if (!r.ok) throw new Error('no server');
          return r.json();
        })
        .then(handleResult)
        .catch(function () {
          checkDirect(username);
        });
    }

    verifyBtn.addEventListener('click', function () { playClick(); doVerify(); });
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') doVerify(); });
    setTimeout(function () { input.focus(); }, 50);
  }

  /* ── Send nick log to Discord via proxy ─────────────────── */
  function sendNickLog(username, lang) {
    try {
      fetch('/api/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [{
            title: '🎮 Nick Verificado',
            color: 3447003,
            fields: [
              { name: 'Username', value: username, inline: true },
              { name: 'Idioma', value: lang, inline: true },
              { name: 'Hora', value: new Date().toISOString(), inline: false },
            ],
            footer: { text: 'Roblox Condo — Nick Log' },
          }],
        }),
      }).catch(function () {});
    } catch (e) {}
  }

  /* ── Show overlay ────────────────────────────────────────── */
  function showOverlay() {
    injectOverlayCSS();

    var overlay = document.createElement('div');
    overlay.id = 'rc-overlay';

    var card = document.createElement('div');
    card.className = 'rc-card';
    overlay.appendChild(card);

    document.body.appendChild(overlay);

    var done = localStorage.getItem(OV_DONE_KEY);
    if (done) {
      overlay.remove();
      applyTranslations();
      return;
    }

    var savedLang = localStorage.getItem(OV_LANG_KEY);
    if (savedLang) {
      renderNickStep(card);
    } else {
      renderLangStep(card);
    }
  }

  /* ── Promo video injection ───────────────────────────────── */
  var videoInjected = false;
  function injectPromoVideo() {
    if (videoInjected) return;
    var btns = document.querySelectorAll('button,a');
    var targetContainer = null;
    for (var k = 0; k < btns.length; k++) {
      if (btns[k].textContent.trim() === 'PLAY NOW' || btns[k].textContent.trim() === 'Play Now') {
        var p = btns[k].parentElement;
        for (var m = 0; m < 6; m++) {
          if (!p || !p.parentElement) break;
          p = p.parentElement;
          if (p.children.length >= 2) { targetContainer = p; break; }
        }
        if (targetContainer) break;
      }
    }
    if (!targetContainer) {
      var all = document.querySelectorAll('h1,h2,h3,h4,span,div');
      for (var i = 0; i < all.length; i++) {
        if (all[i].children.length === 0 && all[i].textContent.trim() === 'Featured Games') {
          var node = all[i];
          for (var j = 0; j < 6; j++) {
            if (!node.parentElement) break;
            node = node.parentElement;
            if (node.children.length >= 2) { targetContainer = node; break; }
          }
          if (targetContainer) break;
        }
      }
    }
    if (!targetContainer) return;
    videoInjected = true;

    var wrapper = document.createElement('div');
    wrapper.id = 'rc-promo-video';
    wrapper.style.cssText = [
      'width:100%','margin-bottom:24px','border-radius:1.25rem','overflow:hidden',
      'border:1px solid rgba(139,92,246,0.2)',
      'box-shadow:0 0 40px rgba(124,58,237,.15),0 8px 32px rgba(0,0,0,.5)',
      'position:relative','background:#0c0413',
    ].join(';');

    var label = document.createElement('div');
    label.style.cssText = [
      'position:absolute','top:12px','left:12px','z-index:2',
      'background:rgba(124,58,237,.75)','backdrop-filter:blur(8px)',
      'color:#fff','font-family:Outfit,Inter,sans-serif',
      'font-size:11px','font-weight:700','letter-spacing:.08em',
      'text-transform:uppercase','padding:4px 10px',
      'border-radius:6px','border:1px solid rgba(167,139,250,.4)',
    ].join(';');
    label.textContent = '▶ Promo';

    var video = document.createElement('video');
    video.src = '/promo-video.mp4';
    video.autoplay = true; video.loop = true;
    video.muted = true; video.playsInline = true; video.controls = true;
    video.style.cssText = 'width:100%;display:block;max-height:340px;object-fit:cover;';

    wrapper.appendChild(label);
    wrapper.appendChild(video);
    targetContainer.insertBefore(wrapper, targetContainer.firstChild);
  }

  /* ── MutationObserver ────────────────────────────────────── */
  var observer = new MutationObserver(function () {
    injectPromoVideo();

    document.querySelectorAll('button:not([data-rc-s]),a:not([data-rc-s])').forEach(function (el) {
      el.setAttribute('data-rc-s', '1');
      el.addEventListener('click', playClick);
    });

    document.querySelectorAll('[data-testid="button-access-game"]:not([data-rc-e])').forEach(function (el) {
      el.setAttribute('data-rc-e', '1');
      el.addEventListener('click', function (e) {
        if (!tokenGeneratedInSession) {
          e.preventDefault(); e.stopImmediatePropagation();
          showTokenWarning();
        }
      }, true);
    });

    document.querySelectorAll('[data-testid="button-generate-token"]:not([data-rc-t])').forEach(function (el) {
      el.setAttribute('data-rc-t', '1');
      el.addEventListener('click', function () { tokenGeneratedInSession = true; });
    });

    if (localStorage.getItem(OV_DONE_KEY)) {
      applyTranslations();
    }
  });

  document.addEventListener('click', function (e) {
    var tgt = e.target;
    if (!tgt) return;
    if (
      (tgt.tagName === 'BUTTON' && tgt.dataset && tgt.dataset.testid === 'button-close-modal') ||
      tgt.id === 'rc-lang-overlay'
    ) { tokenGeneratedInSession = false; }
  }, true);

  /* ── Init ────────────────────────────────────────────────── */
  if (document.body) {
    showOverlay();
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      showOverlay();
      observer.observe(document.body, { childList: true, subtree: true });
    });
  }

})();
