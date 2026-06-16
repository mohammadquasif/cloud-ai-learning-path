document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const sidebar = document.getElementById('sidebar');

  if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('show');
    });
  }

  // Highlight active link and scroll into view if needed
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll('.nav-link');
  
  links.forEach(link => {
    // Basic exact match or ends-with match
    if (link.href && currentPath.endsWith(new URL(link.href).pathname)) {
      link.classList.add('active');
      link.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  });
});
