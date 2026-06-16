document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');

  const setMenuState = (isOpen) => {
    if (!mobileMenuBtn || !sidebar) return;
    sidebar.classList.toggle('show', isOpen);
    backdrop?.classList.toggle('show', isOpen);
    mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Close course navigation' : 'Open course navigation');
  };

  if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener('click', () => {
      setMenuState(!sidebar.classList.contains('show'));
    });
  }

  backdrop?.addEventListener('click', () => setMenuState(false));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuState(false);
  });

  const currentPath = window.location.pathname.replace(/\/+$/, '');
  const links = document.querySelectorAll('.nav-link');

  links.forEach((link) => {
    const linkPath = new URL(link.href).pathname.replace(/\/+$/, '');
    if (currentPath.endsWith(linkPath)) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
      link.scrollIntoView({ block: 'center', behavior: 'auto' });
    }

    link.addEventListener('click', () => setMenuState(false));
  });
});
