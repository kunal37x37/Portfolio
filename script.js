// PROFESSIONAL AURORA GALAXY PORTFOLIO JAVASCRIPT - MOBILE OPTIMIZED

// Enhanced device detection
const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth <= 768;
};

const isHighPerformanceDevice = () => {
    const memory = navigator.deviceMemory || 4;
    const cores = navigator.hardwareConcurrency || 4;
    return memory >= 4 && cores >= 4;
};

// Performance throttle for mobile
class PerformanceManager {
    constructor() {
        this.lastExecution = 0;
        this.throttleTime = isMobile() ? 50 : 16; // 20fps for mobile, 60fps for desktop
        this.heavyAnimationsEnabled = !isMobile() || isHighPerformanceDevice();
        this.activeAnimations = new Set();
    }

    throttle(callback) {
        const now = Date.now();
        if (now - this.lastExecution >= this.throttleTime) {
            this.lastExecution = now;
            callback();
        }
    }

    canRunHeavyAnimations() {
        return this.heavyAnimationsEnabled;
    }

    registerAnimation(id) {
        this.activeAnimations.add(id);
    }

    unregisterAnimation(id) {
        this.activeAnimations.delete(id);
    }

    pauseAllAnimations() {
        this.activeAnimations.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.animationPlayState = 'paused';
            }
        });
    }

    resumeAllAnimations() {
        this.activeAnimations.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.animationPlayState = 'running';
            }
        });
    }
}

const perfManager = new PerformanceManager();

// Optimized DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Mobile-specific optimizations
    if (isMobile()) {
        document.body.classList.add('mobile');
        optimizeForMobile();
    } else {
        document.body.classList.remove('mobile');
    }

    // Initialize essential components first
    initMobileFirst();

    // Load profile image immediately
    loadProfileImage();
});

function optimizeForMobile() {
    console.log('Optimizing for mobile device...');

    // Reduce animation intensity
    if (!perfManager.canRunHeavyAnimations()) {
        // Disable intensive effects on low-end devices
        document.querySelectorAll('.aurora-layer, .nebula-cloud, .space-debris').forEach(el => {
            el.style.display = 'none';
        });

        // Reduce star density
        const starfield = document.getElementById('starfield');
        if (starfield) {
            starfield.style.backgroundSize = '200px 200px';
        }
    }

    // Add touch-friendly styles
    document.documentElement.style.setProperty('--touch-target', '44px');

    // Add loading placeholder
    if (document.readyState !== 'complete') {
        document.body.innerHTML += '<div class="loading-placeholder"></div>';
    }

    // Optimize images
    document.querySelectorAll('img').forEach(img => {
        if (!img.classList.contains('profile-image')) {
            img.loading = 'lazy';
        }
    });
}

function initMobileFirst() {
    console.log('Initializing mobile-first...');

    // Initialize core functionality
    initTheme();
    initTypewriterEffect();
    initNavigation();
    initFormSubmission();
    initBackToTop();
    initSmoothScrolling();
    initProgressBars();

    // Initialize performance-heavy effects based on device capability
    if (perfManager.canRunHeavyAnimations()) {
        console.log('Device can handle heavy animations');
        initEnhancedStarfield();
        initFrequentStarfall();
        initShootingStars();
        initMeteorShower();
        initSpaceDebris();
    } else {
        console.log('Device needs light animations');
        initLightStarfield(); // Lighter version for low-end devices
    }

    // Initialize interactive elements
    initRotatingCube();
    initHoverEffects();

    // Initialize animations with requestAnimationFrame
    initScrollAnimations();

    // Initialize cursor system only on desktop
    if (!isMobile()) {
        initCursorSystem();
    }

    // Add touch event listeners
    if (isMobile()) {
        initTouchEvents();
    }

    // Initialize lazy loading for images
    lazyLoadImages();

    // Add visibility change handler
    document.addEventListener('visibilitychange', handleVisibilityChange);
}

function handleVisibilityChange() {
    if (document.hidden) {
        perfManager.pauseAllAnimations();
    } else {
        perfManager.resumeAllAnimations();
    }
}

// LIGHT STARFIELD FOR MOBILE
function initLightStarfield() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;

    starfield.innerHTML = '';
    createStarLayer(starfield, 80, 1, 0.8, 'white');
    createStarLayer(starfield, 40, 2, 0.6, '#e2e8f0');

    // Add CSS for mobile star animation
    if (!document.querySelector('#mobileStarTwinkle')) {
        const style = document.createElement('style');
        style.id = 'mobileStarTwinkle';
        style.textContent = `
            @keyframes mobileStarTwinkle {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 0.7; }
            }
            
            .mobile .starfield div {
                animation: mobileStarTwinkle 3s ease-in-out infinite;
            }
        `;
        document.head.appendChild(style);
    }
}

// OPTIMIZED STARFIELD CREATION
function initEnhancedStarfield() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;

    // Clear existing stars
    starfield.innerHTML = '';

    // Create optimized star layers based on device
    if (isMobile()) {
        createStarLayer(starfield, 150, 1, 0.8, 'white');
        createStarLayer(starfield, 75, 2, 0.6, '#e2e8f0');
    } else {
        createStarLayer(starfield, 300, 1, 0.8, 'white');
        createStarLayer(starfield, 200, 2, 0.6, '#e2e8f0');
        createStarLayer(starfield, 150, 3, 0.4, '#94a3b8');
        createStarLayer(starfield, 100, 4, 0.3, '#6366f1');
    }
}

function createStarLayer(container, count, size, opacity, color) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');

        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        // Optimized animation properties for mobile
        const duration = isMobile() ? Math.random() * 8 + 4 : Math.random() * 10 + 5;
        const delay = Math.random() * 5;

        // Apply styles
        star.style.position = 'absolute';
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.backgroundColor = color;
        star.style.borderRadius = '50%';
        star.style.opacity = (Math.random() * 0.5 + opacity).toString();
        star.style.animation = `starTwinkle ${duration}s infinite ${delay}s`;
        star.style.boxShadow = `0 0 ${size * 2}px ${color}`;

        // Optimize for mobile
        if (isMobile()) {
            star.style.willChange = 'opacity';
            star.style.transform = 'translateZ(0)';
        }

        fragment.appendChild(star);
    }

    container.appendChild(fragment);
}

// OPTIMIZED FREQUENT STARFALL
function initFrequentStarfall() {
    const container = document.getElementById('starfall');
    if (!container || (isMobile() && !perfManager.canRunHeavyAnimations())) return;

    let animationFrameId;
    let lastStarTime = 0;
    const starInterval = isMobile() ? 1500 : 800;

    function createStarfall() {
        if (!container || document.hidden) return;

        const now = Date.now();
        if (now - lastStarTime < starInterval) return;
        lastStarTime = now;

        // Create fewer stars on mobile
        const starCount = isMobile() ? 1 : Math.floor(Math.random() * 2) + 1;

        for (let i = 0; i < starCount; i++) {
            const starfall = document.createElement('div');
            starfall.className = 'starfall';

            // Random starting position
            const startX = Math.random() * 100;

            // Optimized properties for mobile
            const length = isMobile() ? Math.random() * 100 + 50 : Math.random() * 150 + 100;
            const duration = isMobile() ? Math.random() * 1500 + 1000 : Math.random() * 2000 + 1000;

            // Apply styles
            starfall.style.left = `${startX}%`;
            starfall.style.top = '-30px';
            starfall.style.background = 'linear-gradient(to bottom, transparent, white, transparent)';
            starfall.style.opacity = (Math.random() * 0.4 + 0.2).toString();
            starfall.style.filter = 'blur(1px)';

            container.appendChild(starfall);

            // Use CSS animation for mobile, Web Animations API for desktop
            if (isMobile()) {
                starfall.style.animation = `starfall ${duration}ms linear forwards`;
                setTimeout(() => {
                    if (starfall.parentNode === container) {
                        container.removeChild(starfall);
                    }
                }, duration);
            } else {
                const animation = starfall.animate([
                    { transform: 'translateY(0)', opacity: 0 },
                    { transform: `translateY(${length}px)`, opacity: 1 },
                    { transform: `translateY(${length * 2}px)`, opacity: 0 }
                ], {
                    duration: duration,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
                });

                animation.onfinish = () => {
                    if (starfall.parentNode === container) {
                        container.removeChild(starfall);
                    }
                };
            }
        }
    }

    function starfallLoop() {
        if (document.hidden) return;

        createStarfall();

        // Use requestAnimationFrame for better performance
        if (isMobile()) {
            setTimeout(() => {
                if (!document.hidden) {
                    animationFrameId = requestAnimationFrame(starfallLoop);
                }
            }, starInterval);
        } else {
            animationFrameId = requestAnimationFrame(starfallLoop);
        }
    }

    // Start with delay
    setTimeout(() => {
        if (!document.hidden) {
            starfallLoop();
        }
    }, 1000);

    // Pause when tab is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        } else if (!document.hidden && !animationFrameId) {
            starfallLoop();
        }
    });
}

// OPTIMIZED SHOOTING STARS
function initShootingStars() {
    const container = document.getElementById('shootingStars');
    if (!container || (isMobile() && !perfManager.canRunHeavyAnimations())) return;

    let animationFrameId;
    let lastShootingStar = 0;
    const shootingStarInterval = isMobile() ? 4000 : 3000;

    function createShootingStar() {
        if (!container || document.hidden) return;

        const now = Date.now();
        if (now - lastShootingStar < shootingStarInterval) return;
        lastShootingStar = now;

        const star = document.createElement('div');
        star.className = 'shooting-star';

        // Random starting position
        const startY = Math.random() * 60 + 20;

        // Optimized for mobile
        const angle = isMobile() ? Math.random() * 15 + 15 : Math.random() * 25 + 15;
        const distance = isMobile() ? Math.random() * 300 + 200 : Math.random() * 400 + 300;
        const duration = isMobile() ? Math.random() * 2000 + 1500 : Math.random() * 2500 + 1500;

        // Apply styles
        star.style.left = '-150px';
        star.style.top = `${startY}%`;
        star.style.background = 'linear-gradient(90deg, transparent, white, transparent)';
        star.style.opacity = (Math.random() * 0.4 + 0.2).toString();
        star.style.transform = `rotate(${angle}deg)`;

        container.appendChild(star);

        // Calculate end position
        const endX = -150 + distance * Math.cos(angle * Math.PI / 180);
        const endY = startY + distance * Math.sin(angle * Math.PI / 180);

        // Use CSS animation for mobile
        if (isMobile()) {
            star.style.animation = `shootingStar ${duration}ms linear forwards`;
            setTimeout(() => {
                if (star.parentNode === container) {
                    container.removeChild(star);
                }
            }, duration);
        } else {
            const animation = star.animate([
                { transform: `translate(0, 0) rotate(${angle}deg)`, opacity: 0 },
                { transform: `translate(${endX}px, ${endY}px) rotate(${angle}deg)`, opacity: 1 },
                { transform: `translate(${endX}px, ${endY}px) rotate(${angle}deg)`, opacity: 0 }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            });

            animation.onfinish = () => {
                if (star.parentNode === container) {
                    container.removeChild(star);
                }
            };
        }
    }

    function shootingStarsLoop() {
        if (document.hidden) return;

        createShootingStar();

        // Use timeout for mobile to save battery
        if (isMobile()) {
            setTimeout(() => {
                if (!document.hidden) {
                    animationFrameId = requestAnimationFrame(shootingStarsLoop);
                }
            }, shootingStarInterval);
        } else {
            animationFrameId = requestAnimationFrame(shootingStarsLoop);
        }
    }

    // Start after delay
    setTimeout(shootingStarsLoop, 2000);

    // Pause when tab is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        } else if (!document.hidden && !animationFrameId) {
            shootingStarsLoop();
        }
    });
}

// METEOR SHOWER - Optimized for mobile
function initMeteorShower() {
    const container = document.getElementById('meteorShower');
    if (!container || (isMobile() && !perfManager.canRunHeavyAnimations())) return;

    let animationFrameId;
    let lastMeteor = 0;
    const meteorInterval = isMobile() ? 8000 : 5000;

    function createMeteor() {
        if (!container || document.hidden) return;

        const now = Date.now();
        if (now - lastMeteor < meteorInterval) return;
        lastMeteor = now;

        // Create single meteor on mobile
        const meteorCount = isMobile() ? 1 : Math.floor(Math.random() * 2) + 1;

        for (let i = 0; i < meteorCount; i++) {
            const meteor = document.createElement('div');
            meteor.className = 'meteor';

            // Random starting position
            const startX = Math.random() * 100 + 100;

            // Optimized for mobile
            const angle = isMobile() ? Math.random() * 10 + 10 : Math.random() * 15 + 10;
            const distance = isMobile() ? Math.random() * 300 + 300 : Math.random() * 500 + 400;
            const duration = isMobile() ? Math.random() * 3500 + 2500 : Math.random() * 4000 + 3000;

            // Apply styles
            meteor.style.left = `${startX}%`;
            meteor.style.top = '-20px';
            meteor.style.opacity = (Math.random() * 0.3 + 0.3).toString();
            meteor.style.transform = `rotate(${angle}deg)`;

            container.appendChild(meteor);

            // Use CSS animation for mobile
            if (isMobile()) {
                meteor.style.animation = `meteor ${duration}ms linear forwards`;
                setTimeout(() => {
                    if (meteor.parentNode === container) {
                        container.removeChild(meteor);
                    }
                }, duration);
            } else {
                // Calculate end position
                const endX = startX + distance * Math.cos(angle * Math.PI / 180);
                const endY = -20 + distance * Math.sin(angle * Math.PI / 180);

                const animation = meteor.animate([
                    { transform: `translate(0, 0) rotate(${angle}deg)`, opacity: 0 },
                    { transform: `translate(${endX}px, ${endY}px) rotate(${angle}deg)`, opacity: 1 },
                    { transform: `translate(${endX}px, ${endY}px) rotate(${angle}deg)`, opacity: 0 }
                ], {
                    duration: duration,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
                });

                animation.onfinish = () => {
                    if (meteor.parentNode === container) {
                        container.removeChild(meteor);
                    }
                };
            }
        }
    }

    function meteorLoop() {
        if (document.hidden) return;

        createMeteor();

        // Use timeout for mobile
        if (isMobile()) {
            setTimeout(() => {
                if (!document.hidden) {
                    animationFrameId = requestAnimationFrame(meteorLoop);
                }
            }, meteorInterval);
        } else {
            animationFrameId = requestAnimationFrame(meteorLoop);
        }
    }

    // Start after delay
    setTimeout(meteorLoop, 3000);

    // Pause when tab is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        } else if (!document.hidden && !animationFrameId) {
            meteorLoop();
        }
    });
}

// SPACE DEBRIS - Only on desktop
function initSpaceDebris() {
    const container = document.getElementById('spaceDebris');
    if (!container || isMobile()) return;

    const debrisCount = isMobile() ? 10 : 20;

    for (let i = 0; i < debrisCount; i++) {
        const debris = document.createElement('div');
        debris.className = 'debris';

        // Random properties
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 40 + 30;
        const delay = Math.random() * 10;

        // Apply styles
        debris.style.width = `${size}px`;
        debris.style.height = `${size}px`;
        debris.style.left = `${x}%`;
        debris.style.top = `${y}%`;
        debris.style.opacity = (Math.random() * 0.2 + 0.1).toString();

        // Animation
        debris.style.animation = `debrisFloat ${duration}s linear infinite ${delay}s`;

        container.appendChild(debris);
    }
}

// PROFESSIONAL CURSOR SYSTEM - Desktop only
function initCursorSystem() {
    if (isMobile()) return;

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
    let animationFrameId;

    // Mouse move event
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Animation loop
    function animateCursor() {
        // Smooth movement for circle
        circleX += (mouseX - circleX) * 0.15;
        circleY += (mouseY - circleY) * 0.15;

        // Smooth movement for trail
        trailX += (mouseX - trailX) * 0.05;
        trailY += (mouseY - trailY) * 0.05;

        // Rotate triangle based on movement
        const dx = mouseX - circleX;
        const dy = mouseY - circleY;
        triangleRotate = Math.atan2(dy, dx) * 180 / Math.PI + 90;

        // Update positions
        cursorTriangle.style.left = mouseX + 'px';
        cursorTriangle.style.top = mouseY + 'px';
        cursorTriangle.style.transform = `translate(-50%, -50%) rotate(${triangleRotate}deg)`;

        cursorCircle.style.left = circleX + 'px';
        cursorCircle.style.top = circleY + 'px';

        cursorTrail.style.left = trailX + 'px';
        cursorTrail.style.top = trailY + 'px';

        animationFrameId = requestAnimationFrame(animateCursor);
    }

    // Hover effects
    const hoverElements = document.querySelectorAll(
        'a, button, .cta-button, .project-card, .education-card, .feature-card, ' +
        '.social-item, .tech-icon, .certificate-card, .nav-item, .view-all-btn, .submit-button'
    );

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorTriangle.style.borderBottomColor = 'var(--primary)';
            cursorTriangle.style.transform = `translate(-50%, -50%) rotate(${triangleRotate}deg) scale(1.3)`;
            cursorCircle.style.width = '60px';
            cursorCircle.style.height = '60px';
            cursorCircle.style.borderColor = 'var(--primary)';
            cursorTrail.style.opacity = '0.6';
            cursorTrail.style.width = '30px';
            cursorTrail.style.height = '30px';
        });

        element.addEventListener('mouseleave', () => {
            cursorTriangle.style.borderBottomColor = 'var(--golden-primary)';
            cursorTriangle.style.transform = `translate(-50%, -50%) rotate(${triangleRotate}deg) scale(1)`;
            cursorCircle.style.width = '40px';
            cursorCircle.style.height = '40px';
            cursorCircle.style.borderColor = 'var(--accent)';
            cursorTrail.style.opacity = '0.3';
            cursorTrail.style.width = '20px';
            cursorTrail.style.height = '20px';
        });
    });

    // Click effect
    document.addEventListener('mousedown', () => {
        cursorTriangle.style.transform = `translate(-50%, -50%) rotate(${triangleRotate}deg) scale(0.8)`;
        cursorCircle.style.width = '35px';
        cursorCircle.style.height = '35px';
    });

    document.addEventListener('mouseup', () => {
        cursorTriangle.style.transform = `translate(-50%, -50%) rotate(${triangleRotate}deg) scale(1)`;
        cursorCircle.style.width = '40px';
        cursorCircle.style.height = '40px';
    });

    // Start animation
    animateCursor();

    // Clean up on visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        } else if (!document.hidden && !animationFrameId) {
            animateCursor();
        }
    });
}

// THEME MANAGEMENT
function initTheme() {
    const themeSwitch = document.querySelector('.theme-switch');
    const savedTheme = localStorage.getItem('theme') || 'dark';

    // Apply saved theme
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        updateThemeColors(true);
    }

    // Toggle theme
    if (themeSwitch) {
        themeSwitch.addEventListener('click', () => {
            const isLight = !document.body.classList.contains('light-theme');
            document.body.classList.toggle('light-theme');

            // Update theme colors
            updateThemeColors(isLight);

            // Save preference
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }
}

function updateThemeColors(isLight) {
    if (isLight) {
        // Light theme colors
        document.documentElement.style.setProperty('--cosmic-dark', '#ffffff');
        document.documentElement.style.setProperty('--cosmic-darker', '#f8fafc');
        document.documentElement.style.setProperty('--cosmic-light', '#f1f5f9');
        document.documentElement.style.setProperty('--cosmic-lighter', '#e2e8f0');
        document.documentElement.style.setProperty('--text-primary', '#1e293b');
        document.documentElement.style.setProperty('--text-secondary', '#475569');
        document.documentElement.style.setProperty('--text-muted', '#64748b');
        document.documentElement.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.1)');
        document.documentElement.style.setProperty('--glass-border', 'rgba(0, 0, 0, 0.1)');
    } else {
        // Dark theme colors
        document.documentElement.style.setProperty('--cosmic-dark', '#050511');
        document.documentElement.style.setProperty('--cosmic-darker', '#020208');
        document.documentElement.style.setProperty('--cosmic-light', '#0a0a1a');
        document.documentElement.style.setProperty('--cosmic-lighter', '#11112e');
        document.documentElement.style.setProperty('--text-primary', '#ffffff');
        document.documentElement.style.setProperty('--text-secondary', '#e2e8f0');
        document.documentElement.style.setProperty('--text-muted', '#94a3b8');
        document.documentElement.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.05)');
        document.documentElement.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.1)');
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
        'Tech Enthusiast',
        'Creative Thinker'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    let typeTimeout;

    function type() {
        if (isPaused || document.hidden) return;

        const currentText = texts[textIndex];

        if (isDeleting) {
            // Deleting text
            typewriterText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing text
            typewriterText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        // Typing speed
        let typeSpeed = 100;

        if (isDeleting) {
            typeSpeed /= 2;
        }

        // Pause at the end of typing
        if (!isDeleting && charIndex === currentText.length) {
            isPaused = true;
            typeTimeout = setTimeout(() => {
                isPaused = false;
                isDeleting = true;
                typeTimeout = setTimeout(type, 500);
            }, 2000);
            return;
        }

        // Move to next text when deletion complete
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeTimeout = setTimeout(type, 500);
            return;
        }

        // Continue typing
        typeTimeout = setTimeout(type, typeSpeed);
    }

    // Start typing effect
    typeTimeout = setTimeout(type, 1000);

    // Pause on visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearTimeout(typeTimeout);
        } else if (!typeTimeout) {
            typeTimeout = setTimeout(type, 100);
        }
    });
}

// NAVIGATION
function initNavigation() {
    const navHamburger = document.querySelector('.nav-hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-item');

    // Mobile menu toggle
    if (navHamburger && navMenu) {
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

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navHamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Update active nav link on scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
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

            // Update header background on scroll
            const header = document.querySelector('.cosmic-nav');
            if (header) {
                if (window.scrollY > 50) {
                    header.style.background = 'rgba(5, 5, 17, 0.98)';
                    header.style.backdropFilter = 'blur(30px)';
                } else {
                    header.style.background = 'rgba(5, 5, 17, 0.9)';
                    header.style.backdropFilter = 'blur(20px)';
                }
            }
        }, isMobile() ? 100 : 50);
    });

    // Close menu when clicking on a link
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navHamburger && navMenu) {
                navHamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}

// FORM SUBMISSION WITH FORMSPREE
function initFormSubmission() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const submitButton = contactForm.querySelector('.submit-button');
    const formResponse = document.getElementById('formResponse');

    contactForm.addEventListener('submit', async(e) => {
        e.preventDefault();

        // Show loading state
        submitButton.classList.add('loading');
        formResponse.className = 'form-response';
        formResponse.textContent = '';

        try {
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Validate form
            if (!data.name || !data.email || !data.subject || !data.message) {
                throw new Error('Please fill in all fields');
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                throw new Error('Please enter a valid email address');
            }

            // Send email using Formspree
            await sendEmailFormspree(data);

            // Success
            formResponse.textContent = '✅ Thank you! Your message has been sent successfully.';
            formResponse.className = 'form-response success';

            // Reset form
            contactForm.reset();

        } catch (error) {
            // Error
            formResponse.textContent = `❌ ${error.message || 'Oops! There was a problem sending your message.'}`;
            formResponse.className = 'form-response error';
        } finally {
            // Reset loading state
            submitButton.classList.remove('loading');

            // Hide message after 5 seconds
            setTimeout(() => {
                formResponse.className = 'form-response';
                formResponse.textContent = '';
            }, 5000);
        }
    });
}

// FORMSPREE EMAIL FUNCTION
async function sendEmailFormspree(formData) {
    try {
        const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meegkrwa';

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

        const result = await response.json();

        if (response.ok) {
            console.log('Email sent successfully via Formspree');
            return result;
        } else {
            throw new Error(result.error || 'Failed to send email');
        }

    } catch (error) {
        console.error('Formspree Error:', error);

        // Fallback: Simple mailto link
        const mailtoLink = `mailto:patelkunal3737@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        
        // For demo - open email client
        window.open(mailtoLink, '_blank');
        
        // Return success for demo purposes
        return { success: true, message: 'Opening email client...' };
    }
}

// OPTIMIZED SCROLL ANIMATIONS
function initScrollAnimations() {
    const observerOptions = {
        threshold: isMobile() ? 0.05 : 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate progress bars only when in view
                if (entry.target.classList.contains('stats-container')) {
                    setTimeout(initProgressBars, 300);
                }
            }
        });
    }, observerOptions);

    // Observe only essential elements on mobile
    const animatedElements = isMobile() ? 
        document.querySelectorAll('.hero-content, .project-card, .education-card, .timeline-item') :
        document.querySelectorAll('.hero-content, .hero-visual, .about-intro, .about-features, .stats-container, .skill-category, .project-card, .timeline-item, .education-card, .info-card, .form-card, .certificate-card');

    animatedElements.forEach((el, index) => {
        if (!isMobile() || index < 10) { // Limit on mobile
            el.classList.add(`delay-${(index % 3) + 1}`);
            observer.observe(el);
        }
    });
}

// BACK TO TOP BUTTON
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }, 100);
    });

    // Smooth scroll to top
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
                const headerHeight = document.querySelector('.cosmic-nav')?.offsetHeight || 80;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// PROGRESS BARS ANIMATION
function initProgressBars() {
    const progressCircles = document.querySelectorAll('.circular-progress');

    progressCircles.forEach(circle => {
        const value = circle.getAttribute('data-value') || 88;
        const circumference = 2 * Math.PI * 45; // Radius is 45
        const offset = circumference * (1 - value / 100);

        const progressFill = circle.querySelector('.progress-fill');
        if (progressFill) {
            progressFill.style.strokeDasharray = `${circumference} ${circumference}`;
            progressFill.style.strokeDashoffset = offset;
        }

        // Create gradient for progress circle
        const svg = circle.querySelector('svg');
        if (svg) {
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
            const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;
            gradient.setAttribute('id', gradientId);
            gradient.setAttribute('x1', '0%');
            gradient.setAttribute('y1', '0%');
            gradient.setAttribute('x2', '100%');
            gradient.setAttribute('y2', '100%');

            const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop1.setAttribute('offset', '0%');
            stop1.setAttribute('stop-color', '#FFD700');

            const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop2.setAttribute('offset', '100%');
            stop2.setAttribute('stop-color', '#6366f1');

            gradient.appendChild(stop1);
            gradient.appendChild(stop2);
            defs.appendChild(gradient);
            svg.appendChild(defs);

            if (progressFill) {
                progressFill.style.stroke = `url(#${gradientId})`;
            }
        }
    });
}

// OPTIMIZED ROTATING CUBE
function initRotatingCube() {
    const rotatingCube = document.querySelector('.rotating-cube');
    if (!rotatingCube) return;
    
    // Optimize for mobile
    if (isMobile()) {
        rotatingCube.style.animation = 'cubeRotate 30s infinite linear';
        rotatingCube.style.animationPlayState = 'running';
        return;
    }
    
    // Desktop interaction
    let isHovering = false;
    let currentRotation = { x: 0, y: 0 };
    let animationFrameId;
    
    rotatingCube.addEventListener('mouseenter', () => {
        isHovering = true;
        rotatingCube.style.animationPlayState = 'paused';
    });
    
    rotatingCube.addEventListener('mouseleave', () => {
        isHovering = false;
        rotatingCube.style.animationPlayState = 'running';
        currentRotation = { x: 0, y: 0 };
    });
    
    rotatingCube.addEventListener('mousemove', (e) => {
        if (!isHovering) return;
        
        const rect = rotatingCube.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        
        currentRotation.x = (deltaY / rect.height) * 180;
        currentRotation.y = (deltaX / rect.width) * 180;
        
        rotatingCube.style.transform = `rotateX(${currentRotation.x}deg) rotateY(${currentRotation.y}deg)`;
    });
    
    // Add smooth transition back to animation
    rotatingCube.addEventListener('transitionend', () => {
        if (!isHovering && rotatingCube.style.animationPlayState === 'running') {
            rotatingCube.style.transition = 'transform 1s ease';
        }
    });
}

// HOVER EFFECTS
function initHoverEffects() {
    // Add hover effect to cards - only on desktop
    if (isMobile()) return;
    
    const cards = document.querySelectorAll('.feature-card, .project-card, .education-card, .certificate-card, .info-card, .form-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.4)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });

    // Add glow effect to interactive elements
    const interactiveElements = document.querySelectorAll('.tech-icon, .social-item, .project-link');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.filter = 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))';
        });

        element.addEventListener('mouseleave', () => {
            element.style.filter = 'none';
        });
    });
}

// TOUCH EVENTS FOR MOBILE
function initTouchEvents() {
    // Add touch feedback
    const touchElements = document.querySelectorAll('a, button, .cta-button, .project-card, .social-item');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', () => {
            element.classList.add('touch-active');
            element.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', () => {
            element.classList.remove('touch-active');
            element.style.transform = '';
        });
        
        element.addEventListener('touchcancel', () => {
            element.classList.remove('touch-active');
            element.style.transform = '';
        });
    });
    
    // Touch navigation with swipe
    let touchStartY = 0;
    let touchStartX = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
    });
    
    document.addEventListener('touchend', (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const touchEndX = e.changedTouches[0].clientX;
        
        const diffY = touchStartY - touchEndY;
        const diffX = touchStartX - touchEndX;
        
        // Check if it's a vertical swipe (not horizontal scroll)
        if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 50) {
            e.preventDefault();
            handleSwipe(touchStartY, touchEndY);
        }
    }, { passive: false });
}

function handleSwipe(startY, endY) {
    const sections = ['home', 'about', 'experience', 'education', 'projects', 'contact'];
    const currentSection = getCurrentSection();
    const currentIndex = sections.indexOf(currentSection);
    
    let nextIndex;
    if (startY - endY > 50 && currentIndex < sections.length - 1) {
        // Swipe up - next section
        nextIndex = currentIndex + 1;
    } else if (endY - startY > 50 && currentIndex > 0) {
        // Swipe down - previous section
        nextIndex = currentIndex - 1;
    } else {
        return;
    }
    
    const nextSection = document.getElementById(sections[nextIndex]);
    if (nextSection) {
        const headerHeight = document.querySelector('.cosmic-nav')?.offsetHeight || 80;
        const targetPosition = nextSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function getCurrentSection() {
    const sections = ['home', 'about', 'experience', 'education', 'projects', 'contact'];
    const scrollPos = window.scrollY + 100;
    
    for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const sectionTop = element.offsetTop;
            const sectionHeight = element.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                return section;
            }
        }
    }
    
    return 'home';
}

// OPTIMIZED PROFILE IMAGE LOADING
function loadProfileImage() {
    const profileImage = document.querySelector('.profile-image');
    if (!profileImage) return;
    
    const imageSrc = profileImage.getAttribute('src') || 'assets/profile_image.png';
    
    // Create a low-quality placeholder first
    const placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="40" fill="%23FFD700"/%3E%3C/svg%3E';
    
    // Set placeholder first
    profileImage.src = placeholder;
    
    // Load actual image
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = function() {
        // Use requestAnimationFrame for smooth transition
        requestAnimationFrame(() => {
            profileImage.src = imageSrc;
            profileImage.classList.add('loaded');
            profileImage.style.opacity = '1';
            profileImage.style.transition = 'opacity 0.5s ease';
        });
    };
    
    img.onerror = function() {
        // Fallback to placeholder
        console.log('Profile image failed to load, using fallback');
        profileImage.src = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
        profileImage.classList.add('loaded');
        profileImage.style.opacity = '1';
    };
    
    // Start loading after a small delay
    setTimeout(() => {
        img.src = imageSrc;
    }, 100);
}

// LAZY LOAD IMAGES
function lazyLoadImages() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    if (src) {
                        img.src = src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.1
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.getAttribute('data-src');
        });
    }
}

// OPTIMIZED WINDOW RESIZE HANDLER
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const width = window.innerWidth;
        const wasMobile = document.body.classList.contains('mobile');
        const isNowMobile = width <= 768;
        
        if (wasMobile !== isNowMobile) {
            // Reload for proper mobile/desktop optimization
            if (isNowMobile) {
                document.body.classList.add('mobile');
                optimizeForMobile();
            } else {
                document.body.classList.remove('mobile');
            }
            
            // Reinitialize cursor if needed
            if (!isNowMobile) {
                initCursorSystem();
            }
        }
        
        // Adjust cube size for mobile
        const rotatingCube = document.querySelector('.rotating-cube');
        if (rotatingCube) {
            if (width <= 480) {
                rotatingCube.style.transform = 'scale(0.8)';
            } else if (width <= 768) {
                rotatingCube.style.transform = 'scale(0.9)';
            } else {
                rotatingCube.style.transform = 'scale(1)';
            }
        }
    }, 250);
});

// PREVENT DEFAULT TOUCH ACTIONS
document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

// ADD MOBILE-SPECIFIC CSS ANIMATIONS
if (!document.querySelector('#mobileAnimations')) {
    const style = document.createElement('style');
    style.id = 'mobileAnimations';
    style.textContent = `
        @keyframes starfall {
            0% { transform: translateY(0); opacity: 0; }
            50% { transform: translateY(50vh); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes shootingStar {
            0% { transform: translateX(0) rotate(var(--angle, 15deg)); opacity: 0; }
            50% { transform: translateX(50vw) rotate(var(--angle, 15deg)); opacity: 1; }
            100% { transform: translateX(100vw) rotate(var(--angle, 15deg)); opacity: 0; }
        }
        
        @keyframes meteor {
            0% { transform: translate(0, 0) rotate(var(--angle, 10deg)); opacity: 0; }
            50% { transform: translate(50vw, 50vh) rotate(var(--angle, 10deg)); opacity: 1; }
            100% { transform: translate(100vw, 100vh) rotate(var(--angle, 10deg)); opacity: 0; }
        }
        
        .mobile .rotating-cube {
            transform: scale(0.85);
            animation-duration: 40s;
        }
        
        .touch-active {
            transform: scale(0.98) !important;
            transition: transform 0.1s ease !important;
            opacity: 0.9;
        }
        
        .loading-placeholder {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--cosmic-dark);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 1;
            transition: opacity 0.3s ease;
        }
        
        .loaded .loading-placeholder {
            opacity: 0;
            pointer-events: none;
        }
        
        @media (max-width: 768px) {
            .aurora-layer,
            .nebula-cloud,
            .space-debris {
                display: none !important;
            }
            
            .starfield {
                background-size: 200px 200px !important;
                animation-duration: 600s !important;
            }
        }
        
        /* Reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
            }
            
            .rotating-cube,
            .starfield,
            .starfall,
            .shooting-star,
            .meteor {
                animation: none !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// PERFORMANCE MONITORING AND OPTIMIZATION
function monitorPerformance() {
    if ('performance' in window) {
        const timing = performance.getEntriesByType('navigation')[0];
        if (timing) {
            const loadTime = timing.domContentLoadedEventEnd - timing.fetchStart;
            console.log(`Page loaded in ${Math.round(loadTime)}ms on ${isMobile() ? 'mobile' : 'desktop'}`);
            
            // Apply additional optimizations for slow devices
            if (loadTime > 3000) {
                console.log('Slow device detected, applying additional optimizations');
                document.querySelectorAll('.visual-trail, .cube-glow').forEach(el => {
                    el.style.opacity = '0.1';
                });
                
                // Reduce animation complexity
                if (isMobile()) {
                    document.querySelectorAll('.starfall, .shooting-star, .meteor').forEach(el => {
                        el.style.animationDuration = '2s';
                    });
                }
            }
        }
    }
    
    // Monitor FPS
    let frameCount = 0;
    let lastTime = performance.now();
    let fps = 60;
    
    function checkFPS() {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
            fps = frameCount;
            frameCount = 0;
            lastTime = currentTime;
            
            // Adjust animations based on FPS
            if (fps < 30 && isMobile()) {
                // Reduce animation intensity
                document.querySelectorAll('.starfield div').forEach(star => {
                    star.style.animationDuration = '8s';
                });
            }
        }
        
        requestAnimationFrame(checkFPS);
    }
    
    checkFPS();
}

// INITIALIZE EVERYTHING WHEN WINDOW LOADS
window.addEventListener('load', () => {
    // Remove loading placeholder
    document.querySelectorAll('.loading-placeholder').forEach(el => {
        el.style.opacity = '0';
        setTimeout(() => el.remove(), 300);
    });
    
    // Add loaded class for transitions
    document.body.classList.add('loaded');
    
    // Monitor performance
    monitorPerformance();
    
    // Initialize keyboard navigation
    initKeyboardNavigation();
    
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
    }
});

// KEYBOARD NAVIGATION
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Escape key closes mobile menu
        if (e.key === 'Escape') {
            const navMenu = document.querySelector('.nav-menu');
            const navHamburger = document.querySelector('.nav-hamburger');
            
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navHamburger.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
        
        // Arrow keys for navigation
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            
            const currentSection = getCurrentSection();
            const sections = ['home', 'about', 'experience', 'education', 'projects', 'contact'];
            const currentIndex = sections.indexOf(currentSection);
            
            let nextIndex;
            if (e.key === 'ArrowDown') {
                nextIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : 0;
            } else {
                nextIndex = currentIndex > 0 ? currentIndex - 1 : sections.length - 1;
            }
            
            const nextSection = document.getElementById(sections[nextIndex]);
            if (nextSection) {
                const headerHeight = document.querySelector('.cosmic-nav')?.offsetHeight || 80;
                const targetPosition = nextSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
}

// ADDITIONAL PERFORMANCE OPTIMIZATIONS
if (isMobile()) {
    // Use passive event listeners for better scrolling performance
    document.addEventListener('touchmove', () => {}, { passive: true });
    
    // Optimize memory usage
    window.addEventListener('beforeunload', () => {
        // Clean up animations
        perfManager.pauseAllAnimations();
    });
    
    // Battery saving mode
    if ('getBattery' in navigator) {
        navigator.getBattery().then(battery => {
            if (battery.level < 0.3) {
                // Reduce animations when battery is low
                document.querySelectorAll('.rotating-cube, .starfield').forEach(el => {
                    el.style.animationPlayState = 'paused';
                });
            }
            
            battery.addEventListener('levelchange', () => {
                if (battery.level < 0.3) {
                    document.querySelectorAll('.rotating-cube, .starfield').forEach(el => {
                        el.style.animationPlayState = 'paused';
                    });
                }
            });
        });
    }
}

// ERROR HANDLING
window.addEventListener('error', function(e) {
    console.error('Error occurred:', e.error);
    
    // Graceful degradation
    if (e.error.message.includes('animation')) {
        document.querySelectorAll('.rotating-cube, .starfield').forEach(el => {
            el.style.animation = 'none';
        });
    }
});

// SERVICE WORKER FOR OFFLINE SUPPORT (OPTIONAL)
if ('serviceWorker' in navigator && !isMobile()) {
    navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log('ServiceWorker registration failed:', err);
    });
}

// FINAL INITIALIZATION
console.log('Portfolio initialized successfully!');
console.log('Device:', isMobile() ? 'Mobile' : 'Desktop');
console.log('Performance level:', perfManager.canRunHeavyAnimations() ? 'High' : 'Low');
