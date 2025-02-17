// Close the mobile menu when a nav-link is clicked
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar.classList.contains('show')) {
          const toggleBtn = document.querySelector('.navbar-toggler');
          toggleBtn.click();
        }
      });
    });
  });