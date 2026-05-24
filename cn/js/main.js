/*!
 * ElevateMind — Main JavaScript
 */

(function() {
  'use strict';

  // ===== THEME =====
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('em-theme', theme);
  }

  const savedTheme = localStorage.getItem('em-theme') || 'light';
  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ===== COOKIE BANNER =====
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieAccept = document.getElementById('cookie-accept');
  
  if (cookieBanner && !localStorage.getItem('em-cookie')) {
    setTimeout(() => cookieBanner.classList.add('visible'), 1500);
  }
  
  if (cookieAccept) {
    cookieAccept.addEventListener('click', () => {
      localStorage.setItem('em-cookie', 'accepted');
      cookieBanner.classList.remove('visible');
    });
  }

  // ===== SCROLL TO TOP =====
  const scrollTop = document.getElementById('scroll-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollTop?.classList.add('visible');
    } else {
      scrollTop?.classList.remove('visible');
    }
  });

  if (scrollTop) {
    scrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== READING PROGRESS =====
  const readProgress = document.getElementById('read-progress');
  
  if (readProgress) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      readProgress.style.width = progress + '%';
    });
  }

  // ===== SEARCH =====
  const searchInput = document.getElementById('search-input');
  
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
          window.location.href = '/search.html?q=' + encodeURIComponent(query);
        }
      }
    });
  }

  // ===== MOBILE MENU =====
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('visible');
    });
  }

  // ===== STICKY AD =====
  const stickyAd = document.getElementById('sticky-ad');
  
  if (stickyAd) {
    let adShown = false;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 800 && !adShown) {
        stickyAd.classList.add('visible');
        adShown = true;
      }
    });
    
    const closeAd = document.getElementById('close-sticky-ad');
    if (closeAd) {
      closeAd.addEventListener('click', () => {
        stickyAd.classList.remove('visible');
      });
    }
  }

  // ===== NEWSLETTER POPUP =====
  const newsletterPopup = document.getElementById('newsletter-popup');
  
  if (newsletterPopup && !localStorage.getItem('em-newsletter-shown')) {
    setTimeout(() => {
      if (window.scrollY > 1500) {
        newsletterPopup.classList.add('visible');
        localStorage.setItem('em-newsletter-shown', 'true');
      }
    }, 30000);
    
    const closePopup = document.getElementById('close-newsletter');
    if (closePopup) {
      closePopup.addEventListener('click', () => {
        newsletterPopup.classList.remove('visible');
      });
    }
  }

  // ===== EXIT INTENT =====
  let exitShown = false;
  document.addEventListener('mouseout', (e) => {
    if (e.clientY < 10 && !exitShown && !localStorage.getItem('em-exit-shown')) {
      const exitPopup = document.getElementById('exit-popup');
      if (exitPopup) {
        exitPopup.classList.add('visible');
        exitShown = true;
        localStorage.setItem('em-exit-shown', 'true');
      }
    }
  });

  // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.article-card, .category-card, .trailblazer-card').forEach(el => {
    observer.observe(el);
  });

  // ===== SOCIAL SHARE =====
  window.shareArticle = function(platform, url, title) {
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      reddit: `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
    };
    
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  // ===== ANALYTICS (Placeholder) =====
  window.gaTrack = function(event, params) {
    // Placeholder for Google Analytics or similar
    console.log('[Analytics]', event, params);
  };

})();
