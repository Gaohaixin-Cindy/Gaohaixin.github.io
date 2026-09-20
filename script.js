(() => {
  const root = document.documentElement;
  const button = document.querySelector('[data-lang-toggle]');
  const saved = localStorage.getItem('gaohaixin-language');
  const preferred = navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
  function applyLanguage(lang) {
    root.lang = lang === 'en' ? 'en' : 'zh-CN';
    root.dataset.language = lang;
    localStorage.setItem('gaohaixin-language', lang);
    if (button) {
      button.textContent = lang === 'zh' ? 'EN' : '中文';
      button.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
    }
    const key = lang === 'zh' ? 'titleZh' : 'titleEn';
    if (document.body.dataset[key]) document.title = document.body.dataset[key];
  }
  applyLanguage(saved || preferred);
  button?.addEventListener('click', () => applyLanguage(root.dataset.language === 'zh' ? 'en' : 'zh'));
})();
