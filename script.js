document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
  
    // Function to toggle the menu
    function toggleMenu() {
      navLinks.classList.toggle('active');
      navToggle.classList.toggle('active');
    }
  
    // Event listener for the hamburger menu
    navToggle.addEventListener('click', toggleMenu);
  
    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          toggleMenu();
        }
      });
    });
  
    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      const isClickInsideMenu = navLinks.contains(event.target);
      const isClickOnToggle = navToggle.contains(event.target);
      if (!isClickInsideMenu && !isClickOnToggle && navLinks.classList.contains('active')) {
        toggleMenu();
      }
    });
  
    // Resize event to ensure proper display on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  });