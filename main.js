/* =====================================================
   BMC Electrical - Main JavaScript
   ===================================================== */

document.addEventListener('DOMContentLoaded', function() {
  
  // -----------------------------------------------------
  // Smooth Scroll for Navigation Links
  // -----------------------------------------------------
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // -----------------------------------------------------
  // Navigation Background on Scroll
  // -----------------------------------------------------
  const nav = document.querySelector('nav');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
      nav.style.background = 'rgba(10, 10, 10, 0.9)';
    }
  });

  // -----------------------------------------------------
  // Button Click Handlers
  // -----------------------------------------------------
  const ctaButtons = document.querySelectorAll('.nav-cta, .btn-primary');
  
  ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Scroll to contact section
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  const callButton = document.querySelector('.btn-secondary');
  
  if (callButton) {
    callButton.addEventListener('click', function() {
      // Replace with actual phone number
      window.location.href = 'tel:0131XXXXXXX';
    });
  }

  // -----------------------------------------------------
  // Intersection Observer for Animations
  // -----------------------------------------------------
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    '.stat-card, .review-card, .about-feature, .service-item'
  );
  
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Add animate-in class styles
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);

  // -----------------------------------------------------
  // Mobile Menu Toggle (for future enhancement)
  // -----------------------------------------------------
  // This can be expanded to add a hamburger menu for mobile
  
  console.log('BMC Electrical website loaded successfully.');

});
