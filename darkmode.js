// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Save the user's preference in local storage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      document.querySelector('#darkModeToggle i').classList.replace('fa-moon', 'fa-sun');
    } else {
      localStorage.setItem('darkMode', 'disabled');
      document.querySelector('#darkModeToggle i').classList.replace('fa-sun', 'fa-moon');
    }
  }
  
  // Function to set initial dark mode state
  function setInitialDarkMode() {
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      document.querySelector('#darkModeToggle i').classList.replace('fa-moon', 'fa-sun');
    }
  }
  
  // Add event listener to dark mode toggle button
  document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', toggleDarkMode);
    
    // Set initial dark mode state
    setInitialDarkMode();
  });