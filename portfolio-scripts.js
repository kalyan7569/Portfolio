// ===== INITIALIZE AOS (Animate On Scroll) =====
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// ===== PARTICLES.JS CONFIGURATION =====
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

// ===== TYPING EFFECT =====
const typedTextElement = document.getElementById('typed-text');
const textArray = [
  'Lead Application Developer',
  'Full-Stack Engineer',
  'Cloud Solutions Architect',
  'AWS Certified Professional',
  '.NET Core Developer'
];
let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = textArray[textArrayIndex];
  
  if (isDeleting) {
    typedTextElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedTextElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}

// Start typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(type, 1000);
});

// ===== SCROLL PROGRESS BAR =====
window.addEventListener('scroll', function() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = scrolled + '%';
});

// ===== BACK TO TOP BUTTON =====
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetElement.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    }
  });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== STATS COUNTER ANIMATION =====
function animateCounter(element, target, duration) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

// Trigger counter animation when stats section is in view
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = document.querySelectorAll('.stat-number');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        animateCounter(counter, target, 2000);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
  statsObserver.observe(statsSection);
}

// ===== SKILL BAR ANIMATION =====
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach(bar => {
        bar.style.animation = 'skillProgress 2s ease forwards';
      });
      skillsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
  skillsObserver.observe(skillsSection);
}

// ===== CAROUSEL AUTO-PLAY PAUSE ON HOVER =====
const carousel = document.querySelector('#carouselExampleControls');
if (carousel) {
  carousel.addEventListener('mouseenter', function() {
    $(this).carousel('pause');
  });
  
  carousel.addEventListener('mouseleave', function() {
    $(this).carousel('cycle');
  });
}

// ===== LOADING ANIMATION =====
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

// ===== DYNAMIC YEAR FOR COPYRIGHT =====
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-text');
if (footerText) {
  footerText.innerHTML = footerText.innerHTML.replace('2026', currentYear);
}

// ===== PARALLAX EFFECT FOR TITLE SECTION =====
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const titleSection = document.querySelector('#title');
  if (titleSection) {
    titleSection.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
  }
});

// ===== EASTER EGG: KONAMI CODE =====
let konamiCode = [];
const konamiPattern = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

document.addEventListener('keydown', function(e) {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);
  
  if (konamiCode.join(',') === konamiPattern.join(',')) {
    triggerEasterEgg();
  }
});

function triggerEasterEgg() {
  const body = document.body;
  body.style.animation = 'rainbow 2s linear infinite';
  
  setTimeout(() => {
    body.style.animation = '';
    alert('🎉 You found the Easter Egg! Konami Code activated! 🎮');
  }, 2000);
}

// Add rainbow keyframes dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }
`;
document.head.appendChild(style);

// ===== CONSOLE MESSAGE =====
console.log('%c👋 Hello, Developer!', 'color: #4facfe; font-size: 24px; font-weight: bold;');
console.log('%cThanks for checking out my portfolio! Feel free to reach out: kalyanreddy4119@gmail.com', 'color: #1f4068; font-size: 14px;');
console.log('%c🎮 Psst... Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A', 'color: #e43f5a; font-size: 12px; font-style: italic;');

// ===== PREVENT CONTEXT MENU (OPTIONAL) =====
// Uncomment if you want to prevent right-click
// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
// });

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// ===== FORM VALIDATION (IF CONTACT FORM EXISTS) =====
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Add your form validation and submission logic here
    const formData = new FormData(contactForm);
    
    // Example: Send to server or email service
    console.log('Form submitted:', Object.fromEntries(formData));
    
    // Show success message
    alert('Thank you! Your message has been sent.');
    contactForm.reset();
  });
}

// ===== THEME TOGGLE (OPTIONAL FUTURE FEATURE) =====
function initThemeToggle() {
  const themeToggle = document.querySelector('#theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }
}

// Initialize theme toggle if button exists
initThemeToggle();

// ===== ACTIVE NAVIGATION HIGHLIGHTING =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ===== MOBILE MENU CLOSE ON LINK CLICK =====
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarLinks = document.querySelectorAll('.nav-link');

navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  });
});

// ===== ACCESSIBILITY: SKIP TO CONTENT =====
const skipLink = document.createElement('a');
skipLink.href = '#features';
skipLink.className = 'skip-to-content';
skipLink.textContent = 'Skip to content';
skipLink.style.cssText = `
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
`;

skipLink.addEventListener('focus', function() {
  this.style.top = '0';
});

skipLink.addEventListener('blur', function() {
  this.style.top = '-40px';
});

document.body.insertBefore(skipLink, document.body.firstChild);

// ===== PRINT STYLES =====
window.addEventListener('beforeprint', function() {
  console.log('Preparing to print...');
});

window.addEventListener('afterprint', function() {
  console.log('Print dialog closed');
});
