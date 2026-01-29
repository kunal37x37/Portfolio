// Professional Aurora Galaxy Portfolio JavaScript - Optimized for Mobile

// Performance optimization variables
let isAnimating = false;
let lastScrollTime = 0;
const SCROLL_THROTTLE = 100;
let resizeTimeout;

// Device detection with improved accuracy
const isMobile = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;

    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(userAgent) ||
        (isTouchDevice && isSmallScreen);
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Loaded - Initializing Portfolio');

    // Initialize loading screen
    initLoadingScreen();

    // Start initializing components after loading screen
    setTimeout(initializePortfolio, 100);
});

// Initialize portfolio components
function initializePortfolio() {
    console.log('Initializing portfolio components...');

    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Initialize performance-optimized background effects
    initOptimizedBackgroundEffects();

    // Initialize theme
    initTheme();

    // Initialize typing effect
    initTypewriterEffect();

    // Initialize navigation
    initNavigation();

    // Initialize form submission
    initFormSubmission();

    // Initialize scroll animations
    initScrollAnimations();

    // Initialize back to top button
    initBackToTop();

    // Initialize smooth scrolling
    initSmoothScrolling();

    // Initialize rotating cube with mobile fallback
    initRotatingCube();

    // Initialize hover effects (desktop only)
    if (!isMobile()) {
        initHoverEffects();
        initCursorSystem();
    }

    // Initialize progress bars after content is loaded
    setTimeout(initProgressBars, 500);

    // Load profile image
    loadProfileImage();

    // Hide loading screen
    setTimeout(hideLoadingScreen, 800);
}

// LOADING SCREEN
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (!loadingScreen) return;

    // Show loading screen
    loadingScreen.style.display = 'flex';

    // Simulate loading progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15;
        const progressBar = document.querySelector('.loading-progress');
        if (progressBar) {
            progressBar.style.width = Math.min(progress, 100) + '%';
        }

        if (progress >= 100) {
            clearInterval(progressInterval);
        }
    }, 100);
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const contentContainer = document.getElementById('contentContainer');

    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        loadingScreen.style.transition = 'opacity 0.5s ease, visibility 0.5s';
    }

    if (contentContainer) {
        contentContainer.style.opacity = '1';
        contentContainer.style.visibility = 'visible';
    }
}

// OPTIMIZED BACKGROUND EFFECTS
function initOptimizedBackgroundEffects() {
    console.log('Initializing optimized background effects...');

    // Only run heavy effects on desktop
    if (!isMobile()) {
        initEnhancedStarfield();
        initFrequentStarfall();
        initShootingStars();
        initMeteorShower();
        initSpaceDebris();
    } else {
        // Mobile: Simplified starfield only
        initMobileStarfield();
    }

    // Initialize performance monitoring
    initPerformanceMonitoring();
}

// MOBILE STARFIELD (Optimized)
function initMobileStarfield() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;

    starfield.innerHTML = '';

    // Reduced star count for mobile
    createStarLayer(starfield, 150, 1, 0.8, 'white');
    createStarLayer(starfield, 100, 2, 0.6, '#e2e8f0');

    console.log('Mobile starfield initialized');
}

// ENHANCED STARFIELD (Desktop)
function initEnhancedStarfield() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;

    starfield.innerHTML = '';

    createStarLayer(starfield, 200, 1, 0.8, 'white');
    createStarLayer(starfield, 150, 2, 0.6, '#e2e8f0');
    createStarLayer(starfield, 100, 3, 0.4, '#94a3b8');

    console.log('Enhanced starfield initialized');
}

function createStarLayer(container, count, size, opacity, color) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 10;

        star.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background-color: ${color};
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + opacity};
            animation: starTwinkle ${duration}s infinite ${delay}s;
            box-shadow: 0 0 ${size * 3}px ${color};
        `;

        fragment.appendChild(star);
    }

    container.appendChild(fragment);
}

// OPTIMIZED STARFALL
function initFrequentStarfall() {
    if (isMobile()) return; // Disabled on mobile

    const container = document.getElementById('starfall');
    if (!container) return;

    function createStarfall() {
        if (isMobile() || document.hidden) return;

        const starfall = document.createElement('div');
        starfall.className = 'starfall';

        const startX = Math.random() * 100;
        const colors = ['#ffffff', '#FFD700'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        starfall.style.cssText = `
            left: ${startX}%;
            top: -30px;
            background: linear-gradient(to bottom, transparent, ${color}, transparent);
            opacity: ${Math.random() * 0.6 + 0.3};
            filter: blur(1px);
        `;

        container.appendChild(starfall);

        const animation = starfall.animate([
            { transform: 'translateY(0)', opacity: 0 },
            { transform: 'translateY(200px)', opacity: 1 },
            { transform: 'translateY(400px)', opacity: 0 }
        ], {
            duration: Math.random() * 2000 + 1000,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        });

        animation.onfinish = () => {
            if (starfall.parentNode) {
                starfall.parentNode.removeChild(starfall);
            }
        };
    }

    // Throttled starfall creation
    function starfallLoop() {
        if (!document.hidden) {
            createStarfall();
        }
        setTimeout(starfallLoop, Math.random() * 1500 + 800);
    }

    setTimeout(starfallLoop, 1000);
}

// OPTIMIZED SHOOTING STARS
function initShootingStars() {
    if (isMobile()) return; // Disabled on mobile

    const container = document.getElementById('shootingStars');
    if (!container) return;

    function createShootingStar() {
        if (isMobile() || document.hidden) return;

        const star = document.createElement('div');
        star.className = 'shooting-star';

        const startY = Math.random() * 60 + 20;
        const angle = Math.random() * 25 + 15;
        const colors = ['#ffffff', '#FFD700'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        star.style.cssText = `
            left: -150px;
            top: ${startY}%;
            background: linear-gradient(90deg, transparent, ${color}, transparent);
            opacity: ${Math.random() * 0.6 + 0.3};
            transform: rotate(${angle}deg);
        `;

        container.appendChild(star);

        const distance = Math.random() * 400 + 300;
        const endX = -150 + distance * Math.cos(angle * Math.PI / 180);
        const endY = startY + distance * Math.sin(angle * Math.PI / 180);

        const animation = star.animate([
            { transform: `translate(0, 0) rotate(${angle}deg)`, opacity: 0 },
            { transform: `translate(${endX}px, ${endY}px) rotate(${angle}deg)`, opacity: 1 },
            { transform: `translate(${endX}px, ${endY}px) rotate(${angle}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 2500 + 1500,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        });

        animation.onfinish = () => {
            if (star.parentNode) {
                star.parentNode.removeChild(star);
            }
        };
    }

    function shootingStarsLoop() {
        if (!document.hidden) {
            createShootingStar();
        }
        setTimeout(shootingStarsLoop, Math.random() * 4000 + 3000);
    }

    setTimeout(shootingStarsLoop, 1500);
}

// SIMPLIFIED METEOR SHOWER
function initMeteorShower() {
    if (isMobile()) return; // Disabled on mobile
    // ... (keep existing meteor shower code but add mobile check)
}

// SPACE DEBRIS
function initSpaceDebris() {
    if (isMobile()) return; // Disabled on mobile
    // ... (keep existing space debris code but add mobile check)
}

// PROFESSIONAL CURSOR SYSTEM (Desktop Only)
function initCursorSystem() {
    if (isMobile()) {
        document.body.classList.add('mobile');
        return;
    }

    const cursorTriangle = document.getElementById('cursorTriangle');
    const cursorCircle = document.getElementById('cursorCircle');
    const cursorTrail = document.getElementById('cursorTrail');

    if (!cursorTriangle || !cursorCircle || !cursorTrail) return;

    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;
    let trailX = 0;
    let trailY = 0;
    let triangleRotate = 0;
    let animationId = null;

    // Throttled mouse move
    let mouseMoveThrottle;
    document.addEventListener('mousemove', (e) => {
        if (mouseMoveThrottle) return;

        mouseMoveThrottle = setTimeout(() => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            mouseMoveThrottle = null;
        }, 16); // ~60fps
    });

    // Animation loop with optimized performance
    function animateCursor() {
        circleX += (mouseX - circleX) * 0.15;
        circleY += (mouseY - circleY) * 0.15;
        trailX += (mouseX - trailX) * 0.05;
        trailY += (mouseY - trailY) * 0.05;

        const dx = mouseX - circleX;
        const dy = mouseY - circleY;
        triangleRotate = Math.atan2(dy, dx) * 180 / Math.PI + 90;

        cursorTriangle.style.transform = `translate(${mouseX}px, ${mouseY}px) rotate(${triangleRotate}deg)`;
        cursorCircle.style.transform = `translate(${circleX}px, ${circleY}px)`;
        cursorTrail.style.transform = `translate(${trailX}px, ${trailY}px)`;

        animationId = requestAnimationFrame(animateCursor);
    }

    // Start animation
    animateCursor();

    // Cleanup on page hide
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        } else if (!document.hidden && !animationId) {
            animateCursor();
        }
    });

    console.log('Cursor system initialized');
}

// THEME MANAGEMENT
function initTheme() {
    const themeSwitch = document.getElementById('themeSwitch');
    const savedTheme = localStorage.getItem('theme') || 'dark';

    // Apply saved theme
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }

    // Toggle theme
    if (themeSwitch) {
        themeSwitch.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            localStorage.setItem('theme',
                document.body.classList.contains('light-theme') ? 'light' : 'dark'
            );
        });
    }
}

// TYPEWRITER EFFECT
function initTypewriterEffect() {
    const typewriterText = document.getElementById('typewriterText');
    if (!typewriterText) return;

    const texts = [
        'Full Stack Developer',
        'GoldenSparrow',
        'Problem Solver',
        'Tech Enthusiast'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typewriterText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typewriterText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typeSpeed = 1000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before next
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing effect
    setTimeout(type, 1000);
}

// NAVIGATION
function initNavigation() {
    const navHamburger = document.getElementById('navHamburger');
    const navMenu = document.getElementById('navMenu');
    const navItems = document.querySelectorAll('.nav-item');

    if (navHamburger && navMenu) {
        // Toggle mobile menu
        navHamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navHamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navHamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navHamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking a link
        navItems.forEach(link => {
            link.addEventListener('click', () => {
                navHamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Update active nav on scroll (throttled)
    let scrollThrottle;
    window.addEventListener('scroll', () => {
        if (scrollThrottle) return;

        scrollThrottle = setTimeout(() => {
            updateActiveNav();
            scrollThrottle = null;
        }, 100);
    });

    // Initial update
    updateActiveNav();
}

function updateActiveNav() {
    const navItems = document.querySelectorAll('.nav-item');
    const scrollPos = window.scrollY + 100;

    navItems.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
}

// FORM SUBMISSION
function initFormSubmission() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async(e) => {
        e.preventDefault();

        const submitButton = contactForm.querySelector('.submit-button');
        const formResponse = contactForm.querySelector('.form-response');

        // Show loading
        submitButton.classList.add('loading');

        try {
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Basic validation
            if (!data.name || !data.email || !data.subject || !data.message) {
                throw new Error('Please fill in all fields');
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                throw new Error('Please enter a valid email');
            }

            // Send email (Formspree fallback)
            await sendEmailFormspree(data);

            // Success
            showFormResponse(formResponse, '✅ Message sent successfully!', 'success');
            contactForm.reset();

        } catch (error) {
            // Error
            showFormResponse(formResponse, `❌ ${error.message}`, 'error');
        } finally {
            submitButton.classList.remove('loading');
        }
    });
}

// PROFILE IMAGE LOADING
function loadProfileImage() {
    const profileImage = document.getElementById('profileImage');
    const profileLoading = document.querySelector('.profile-loading');

    if (!profileImage) return;

    console.log('Loading profile image...');

    // Fallback image
    const fallbackImage = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

    // Try to load the image
    const img = new Image();

    img.onload = function() {
        console.log('Profile image loaded successfully');
        profileImage.src = this.src;
        profileImage.style.opacity = '1';

        if (profileLoading) {
            profileLoading.style.display = 'none';
        }
    };

    img.onerror = function() {
        console.log('Profile image failed to load, using fallback');
        profileImage.src = fallbackImage;
        profileImage.style.opacity = '1';

        if (profileLoading) {
            profileLoading.style.display = 'none';
        }
    };

    // Set timeout
    setTimeout(() => {
        if (!img.complete) {
            console.log('Profile image loading timed out');
            img.src = fallbackImage;
        }
    }, 5000);

    // Start loading
    img.src = 'assets/profile_image.png';
}

// SCROLL ANIMATIONS
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animate-in')) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements
    const animatedElements = document.querySelectorAll(
        '.hero-content, .hero-visual, .about-content, .about-stats, ' +
        '.timeline-item, .education-card, .project-card, .certificate-card'
    );

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// BACK TO TOP
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    let scrollThrottle;
    window.addEventListener('scroll', () => {
        if (scrollThrottle) return;

        scrollThrottle = setTimeout(() => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
            scrollThrottle = null;
        }, 100);
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// SMOOTH SCROLLING
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navElement = document.querySelector('.cosmic-nav');
                const headerHeight = navElement ? navElement.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// PROGRESS BARS
function initProgressBars() {
    const progressCircles = document.querySelectorAll('.circular-progress');

    progressCircles.forEach(circle => {
        const value = circle.getAttribute('data-value') || 88;
        const circumference = 2 * Math.PI * 45;
        const offset = circumference * (1 - value / 100);

        const progressFill = circle.querySelector('.progress-fill');
        if (progressFill) {
            progressFill.style.strokeDasharray = `${circumference}`;
            progressFill.style.strokeDashoffset = offset;
        }
    });
}

// ROTATING CUBE
function initRotatingCube() {
    const rotatingCube = document.getElementById('rotatingCube');
    if (!rotatingCube) return;

    if (isMobile()) {
        // Mobile: Disable rotation animation to save battery
        rotatingCube.style.animation = 'none';
        rotatingCube.style.transform = 'rotateX(20deg) rotateY(20deg)';
        return;
    }

    // Desktop: Enable rotation
    let isHovering = false;

    rotatingCube.addEventListener('mouseenter', () => {
        isHovering = true;
        rotatingCube.style.animationPlayState = 'paused';
    });

    rotatingCube.addEventListener('mouseleave', () => {
        isHovering = false;
        rotatingCube.style.animationPlayState = 'running';
    });
}

// HOVER EFFECTS
function initHoverEffects() {
    if (isMobile()) return;

    const cards = document.querySelectorAll('.feature-card, .project-card, .education-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// PERFORMANCE MONITORING
function initPerformanceMonitoring() {
    // Monitor FPS
    let frameCount = 0;
    let lastTime = performance.now();

    function checkFPS() {
        frameCount++;
        const currentTime = performance.now();

        if (currentTime - lastTime >= 1000) {
            const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));

            if (fps < 30 && !isMobile()) {
                console.warn(`Low FPS detected: ${fps}. Consider disabling some effects.`);
            }

            frameCount = 0;
            lastTime = currentTime;
        }

        requestAnimationFrame(checkFPS);
    }

    // Start FPS monitoring
    checkFPS();

    // Monitor memory usage
    if ('memory' in performance) {
        setInterval(() => {
            const memory = performance.memory;
            const usedMB = Math.round(memory.usedJSHeapSize / 1048576);
            const totalMB = Math.round(memory.totalJSHeapSize / 1048576);

            if (usedMB > totalMB * 0.8) {
                console.warn(`High memory usage: ${usedMB}MB / ${totalMB}MB`);
            }
        }, 10000);
    }
}

// WINDOW RESIZE HANDLER
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
        console.log('Window resized, reinitializing...');

        // Reinitialize background effects
        if (!isMobile()) {
            const starfield = document.getElementById('starfield');
            if (starfield) starfield.innerHTML = '';
            initEnhancedStarfield();
        } else {
            const starfield = document.getElementById('starfield');
            if (starfield) starfield.innerHTML = '';
            initMobileStarfield();
        }

        // Update cube rotation for mobile
        const rotatingCube = document.getElementById('rotatingCube');
        if (rotatingCube) {
            if (isMobile()) {
                rotatingCube.style.animation = 'none';
            } else {
                rotatingCube.style.animation = 'cubeRotate 20s infinite linear';
            }
        }

    }, 250);
});

// PAGE VISIBILITY HANDLER
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden, pause animations
        console.log('Page hidden, pausing animations');
    } else {
        // Page is visible, resume animations
        console.log('Page visible, resuming animations');
    }
});

// TOUCH EVENT HANDLERS FOR MOBILE
if (isMobile()) {
    document.addEventListener('touchstart', function() {}, { passive: true });

    // Prevent zoom on double tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

// UTILITY FUNCTIONS
function showFormResponse(element, message, type) {
    if (!element) return;

    element.textContent = message;
    element.className = `form-response ${type}`;

    setTimeout(() => {
        element.className = 'form-response';
        element.textContent = '';
    }, 5000);
}

async function sendEmailFormspree(formData) {
    // Formspree endpoint
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meegkrwa';

    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                _replyto: formData.email
            })
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        return await response.json();
    } catch (error) {
        console.error('Formspree error:', error);
        throw new Error('Failed to send message. Please try again.');
    }
}

// Add star twinkle animation
if (!document.querySelector('#starTwinkle')) {
    const style = document.createElement('style');
    style.id = 'starTwinkle';
    style.textContent = `
        @keyframes starTwinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

console.log('Portfolio initialization complete!');
console.log('Portfolio initialization complete!');
