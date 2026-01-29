// Professional Aurora Galaxy Portfolio JavaScript - MOBILE OPTIMIZED

// Detect mobile device
const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Optimize for mobile first
if (isMobile()) {
    // Remove heavy elements immediately
    document.addEventListener('DOMContentLoaded', function() {
        const heavyElements = [
            '.aurora-layer',
            '.nebula-cloud',
            '.space-debris',
            '.cursor-triangle',
            '.cursor-circle',
            '.cursor-trail',
            '.shooting-stars',
            '.meteor-shower'
        ];

        heavyElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                if (el.parentNode) {
                    el.parentNode.removeChild(el);
                }
            });
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Loaded - Mobile:', isMobile());

    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Mobile optimizations
    if (isMobile()) {
        initMobileOptimizations();
    } else {
        // Desktop only effects
        initEnhancedStarfield();
        initFrequentStarfall();
        initShootingStars();
        initMeteorShower();
        initSpaceDebris();
        initCursorSystem();
        initParallaxEffects();
    }

    // Common features for both mobile and desktop
    initTheme();
    initTypewriterEffect();
    initNavigation();
    initFormSubmission();
    initScrollAnimations();
    initBackToTop();
    initSmoothScrolling();
    initProgressBars();
    initRotatingCube();
    initHoverEffects();
    loadProfileImage();

    // Mobile specific optimizations
    if (isMobile()) {
        initTouchOptimizations();
        simplifyAnimations();
    }
});

// MOBILE OPTIMIZATIONS
function initMobileOptimizations() {
    console.log('Initializing mobile optimizations');

    // Add mobile class to body
    document.body.classList.add('mobile');

    // Disable complex animations
    document.querySelectorAll('.aurora-layer, .nebula-cloud').forEach(el => {
        el.style.animationPlayState = 'paused';
        el.style.opacity = '0.1';
    });

    // Simplify cube animation
    const cube = document.querySelector('.rotating-cube');
    if (cube) {
        cube.style.animationDuration = '30s';
        cube.style.animationTimingFunction = 'linear';
    }

    // Reduce background effects
    const starfield = document.getElementById('starfield');
    if (starfield) {
        starfield.style.backgroundImage = 'none';
        createSimpleStarfield();
    }

    // Remove cursor elements
    ['cursorTriangle', 'cursorCircle', 'cursorTrail'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
    });

    // Optimize images
    optimizeImages();
}

function createSimpleStarfield() {
    if (!isMobile()) return;

    const starfield = document.getElementById('starfield');
    if (!starfield) return;

    // Simple star pattern for mobile
    starfield.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: 
            radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.3) 1px, transparent 2px),
            radial-gradient(1px 1px at 30% 40%, rgba(255,255,255,0.2) 1px, transparent 2px),
            radial-gradient(1px 1px at 50% 60%, rgba(255,255,255,0.1) 1px, transparent 2px);
        background-size: 200px 200px;
        pointer-events: none;
        z-index: -2;
    `;
}

function initTouchOptimizations() {
    console.log('Initializing touch optimizations');

    // Touch-friendly buttons
    const buttons = document.querySelectorAll('a, button, .cta-button, .nav-item');
    buttons.forEach(btn => {
        btn.style.minHeight = '44px';
        btn.style.minWidth = '44px';

        btn.addEventListener('touchstart', function(e) {
            this.style.transform = 'scale(0.97)';
            this.style.transition = 'transform 100ms ease';
        });

        btn.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });

        btn.addEventListener('touchcancel', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Prevent double-tap zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // Improve scroll performance
    document.addEventListener('touchmove', function(e) {
        // Allow native scrolling
    }, { passive: true });
}

function simplifyAnimations() {
    // Reduce animation complexity
    const animatedElements = document.querySelectorAll('*[style*="animation"], *[class*="animate"]');
    animatedElements.forEach(el => {
        if (el.style.animationDuration) {
            const duration = parseFloat(el.style.animationDuration);
            if (duration < 1) {
                el.style.animationDuration = (duration * 2) + 's';
            }
        }
    });

    // Simplify cube faces
    const cubeFaces = document.querySelectorAll('.cube-face');
    cubeFaces.forEach(face => {
        face.style.backdropFilter = 'none';
        face.style.background = 'rgba(255,255,255,0.03)';
    });
}

function optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Add lazy loading
        img.loading = 'lazy';

        // Reduce quality hint for mobile
        if (img.complete) {
            img.style.imageRendering = 'optimizeQuality';
        }
    });
}

// ENHANCED STARFIELD BACKGROUND - OPTIMIZED
function initEnhancedStarfield() {
    if (isMobile()) return; // Skip on mobile

    const starfield = document.getElementById('starfield');
    if (!starfield) return;

    // Clear existing stars
    starfield.innerHTML = '';

    // Reduced star count for performance
    const starCount = 200;

    // Use CSS text for better performance
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const opacity = Math.random() * 0.7 + 0.3;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 10;

        star.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background: white;
            border-radius: 50%;
            opacity: ${opacity};
            animation: starTwinkle ${duration}s infinite ${delay}s;
            pointer-events: none;
            will-change: opacity;
        `;

        starfield.appendChild(star);
    }
}

// FREQUENT STARFALL EFFECT - OPTIMIZED
function initFrequentStarfall() {
    if (isMobile()) return;

    const container = document.getElementById('starfall');
    if (!container) return;

    let animationFrame;
    let lastTime = 0;
    const interval = 1000; // 1 second

    function createStarfall(timestamp) {
        if (!lastTime) lastTime = timestamp;
        const elapsed = timestamp - lastTime;

        if (elapsed > interval) {
            lastTime = timestamp;

            const starfall = document.createElement('div');
            const startX = Math.random() * 100;
            const length = Math.random() * 100 + 50;
            const duration = Math.random() * 1.5 + 0.5;

            starfall.style.cssText = `
                position: absolute;
                left: ${startX}%;
                top: -30px;
                width: 1px;
                height: ${length}px;
                background: linear-gradient(to bottom, transparent, white, transparent);
                animation: starfall ${duration}s linear forwards;
                pointer-events: none;
                will-change: transform;
            `;

            container.appendChild(starfall);

            setTimeout(() => {
                if (starfall.parentNode === container) {
                    container.removeChild(starfall);
                }
            }, duration * 1000);
        }

        animationFrame = requestAnimationFrame(createStarfall);
    }

    // Start animation
    animationFrame = requestAnimationFrame(createStarfall);

    // Cleanup function
    return () => {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
    };
}

// SHOOTING STARS - OPTIMIZED
function initShootingStars() {
    if (isMobile()) return;

    const container = document.getElementById('shootingStars');
    if (!container) return;

    let animationFrame;
    const shootingStars = [];
    const maxStars = 3;

    function updateShootingStars(timestamp) {
        // Remove old stars
        shootingStars.forEach((star, index) => {
            if (timestamp - star.startTime > 2000) {
                if (star.element.parentNode === container) {
                    container.removeChild(star.element);
                }
                shootingStars.splice(index, 1);
            }
        });

        // Add new star if needed
        if (shootingStars.length < maxStars && Math.random() > 0.95) {
            createShootingStar(timestamp);
        }

        animationFrame = requestAnimationFrame(updateShootingStars);
    }

    function createShootingStar(timestamp) {
        const star = document.createElement('div');
        const startX = -150;
        const startY = Math.random() * 60 + 20;
        const angle = Math.random() * 25 + 15;
        const distance = Math.random() * 400 + 300;

        star.style.cssText = `
            position: absolute;
            left: ${startX}px;
            top: ${startY}%;
            width: 150px;
            height: 2px;
            background: linear-gradient(90deg, transparent, white, transparent);
            transform: rotate(${angle}deg);
            pointer-events: none;
            will-change: transform;
        `;

        container.appendChild(star);

        const animation = star.animate([
            { transform: `translate(0, 0) rotate(${angle}deg)`, opacity: 0 },
            { transform: `translate(${distance}px, ${distance * Math.tan(angle * Math.PI / 180)}px) rotate(${angle}deg)`, opacity: 1 },
            { transform: `translate(${distance * 1.2}px, ${distance * 1.2 * Math.tan(angle * Math.PI / 180)}px) rotate(${angle}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 2000 + 1500,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        });

        shootingStars.push({
            element: star,
            startTime: timestamp,
            animation: animation
        });

        animation.onfinish = () => {
            if (star.parentNode === container) {
                container.removeChild(star);
            }
        };
    }

    animationFrame = requestAnimationFrame(updateShootingStars);

    return () => {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
        shootingStars.forEach(star => {
            if (star.animation) star.animation.cancel();
            if (star.element.parentNode === container) {
                container.removeChild(star.element);
            }
        });
    };
}

// METEOR SHOWER - OPTIMIZED
function initMeteorShower() {
    if (isMobile()) return;

    const container = document.getElementById('meteorShower');
    if (!container) return;

    let timeout;

    function createMeteor() {
        const meteor = document.createElement('div');
        const startX = Math.random() * 100 + 100;
        const angle = Math.random() * 15 + 10;
        const duration = Math.random() * 3000 + 2000;

        meteor.style.cssText = `
            position: absolute;
            left: ${startX}%;
            top: -20px;
            width: 200px;
            height: 1px;
            background: linear-gradient(90deg, transparent, #FFD700, transparent);
            transform: rotate(${angle}deg);
            opacity: 0;
            pointer-events: none;
            will-change: transform, opacity;
        `;

        container.appendChild(meteor);

        const animation = meteor.animate([
            { transform: `translate(0, 0) rotate(${angle}deg)`, opacity: 0 },
            { transform: `translate(-${Math.random() * 200 + 100}px, ${Math.random() * 200 + 100}px) rotate(${angle}deg)`, opacity: 0.5 },
            { transform: `translate(-${Math.random() * 400 + 200}px, ${Math.random() * 400 + 200}px) rotate(${angle}deg)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        });

        animation.onfinish = () => {
            if (meteor.parentNode === container) {
                container.removeChild(meteor);
            }
        };

        // Schedule next meteor
        const nextDelay = Math.random() * 5000 + 3000;
        timeout = setTimeout(createMeteor, nextDelay);
    }

    // Start with delay
    timeout = setTimeout(createMeteor, 3000);

    return () => {
        if (timeout) clearTimeout(timeout);
    };
}

// SPACE DEBRIS - OPTIMIZED
function initSpaceDebris() {
    if (isMobile()) return;

    const container = document.getElementById('spaceDebris');
    if (!container) return;

    const debrisCount = 15; // Reduced count

    for (let i = 0; i < debrisCount; i++) {
        const debris = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 30 + 20;
        const delay = Math.random() * 10;

        debris.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            opacity: ${Math.random() * 0.3 + 0.1};
            animation: float ${duration}s linear infinite ${delay}s;
            pointer-events: none;
            will-change: transform;
        `;

        container.appendChild(debris);
    }
}

// PROFESSIONAL CURSOR SYSTEM - DESKTOP ONLY
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
    let animationFrame;

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

        // Update positions
        cursorTriangle.style.left = mouseX + 'px';
        cursorTriangle.style.top = mouseY + 'px';

        cursorCircle.style.left = circleX + 'px';
        cursorCircle.style.top = circleY + 'px';

        cursorTrail.style.left = trailX + 'px';
        cursorTrail.style.top = trailY + 'px';

        animationFrame = requestAnimationFrame(animateCursor);
    }

    // Hover effects
    const hoverElements = document.querySelectorAll(
        'a, button, .cta-button, .project-card, .education-card, .feature-card, ' +
        '.social-item, .tech-icon, .certificate-card, .nav-item, .view-all-btn, .submit-button'
    );

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorTriangle.style.transform = 'translate(-50%, -50%) scale(1.3)';
            cursorCircle.style.width = '60px';
            cursorCircle.style.height = '60px';
        });

        element.addEventListener('mouseleave', () => {
            cursorTriangle.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorCircle.style.width = '40px';
            cursorCircle.style.height = '40px';
        });
    });

    // Start animation
    animationFrame = requestAnimationFrame(animateCursor);

    // Cleanup
    return () => {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
    };
}

// PROFILE IMAGE LOADING - OPTIMIZED
function loadProfileImage() {
    const profileImage = document.querySelector('.profile-image');
    if (!profileImage) return;

    console.log('Loading profile image...');

    // Multiple fallback sources
    const imageSources = [
        'assets/profile_image.png',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ];

    let currentIndex = 0;

    function loadImage() {
        if (currentIndex >= imageSources.length) {
            console.log('All sources failed');
            return;
        }

        const source = imageSources[currentIndex];
        console.log(`Loading image: ${source}`);

        const img = new Image();

        img.onload = function() {
            console.log(`✓ Image loaded: ${source}`);
            profileImage.src = source;
            profileImage.style.opacity = '1';
            profileImage.style.transition = 'opacity 0.5s ease';

            // Optimize for mobile
            if (isMobile()) {
                profileImage.style.imageRendering = 'optimizeQuality';
            }
        };

        img.onerror = function() {
            console.log(`✗ Failed to load: ${source}`);
            currentIndex++;
            setTimeout(loadImage, 500);
        };

        // Set timeout for stalled requests
        setTimeout(() => {
            if (!img.complete) {
                console.log(`Timeout for: ${source}`);
                currentIndex++;
                loadImage();
            }
        }, 3000);

        img.src = source;
    }

    // Start loading
    loadImage();
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

// TYPEWRITER EFFECT - OPTIMIZED
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
    let timeout;

    function type() {
        if (isPaused) return;

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
        let typeSpeed = isMobile() ? 150 : 100; // Slower on mobile

        if (isDeleting) {
            typeSpeed /= 2;
        }

        // Pause at the end of typing
        if (!isDeleting && charIndex === currentText.length) {
            isPaused = true;
            timeout = setTimeout(() => {
                isPaused = false;
                isDeleting = true;
                timeout = setTimeout(type, 500);
            }, 2000);
            return;
        }

        // Move to next text when deletion complete
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            timeout = setTimeout(type, 500);
            return;
        }

        // Continue typing
        timeout = setTimeout(type, typeSpeed);
    }

    // Start typing effect with delay
    timeout = setTimeout(type, 1000);

    // Cleanup
    return () => {
        if (timeout) clearTimeout(timeout);
    };
}

// NAVIGATION - OPTIMIZED FOR MOBILE
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
            if (navMenu.classList.contains('active') &&
                !navHamburger.contains(e.target) &&
                !navMenu.contains(e.target)) {
                navHamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close menu on ESC key
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
        // Throttle scroll events
        if (scrollTimeout) return;

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
                    header.style.backdropFilter = 'blur(10px)';
                } else {
                    header.style.background = 'rgba(5, 5, 17, 0.9)';
                    header.style.backdropFilter = 'blur(5px)';
                }
            }

            scrollTimeout = null;
        }, isMobile() ? 100 : 50); // Longer delay on mobile
    });

    // Close menu when clicking on a link
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navHamburger && navMenu && navMenu.classList.contains('active')) {
                navHamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}

// FORM SUBMISSION WITH FORMSPREE - OPTIMIZED
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
            const response = await fetch('https://formspree.io/f/meegkrwa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                    _replyto: data.email
                })
            });

            const result = await response.json();

            if (response.ok) {
                // Success
                formResponse.textContent = '✅ Thank you! Your message has been sent successfully.';
                formResponse.className = 'form-response success';

                // Reset form
                contactForm.reset();

            } else {
                throw new Error(result.error || 'Failed to send email');
            }

        } catch (error) {
            // Error
            console.error('Form submission error:', error);
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

// SCROLL ANIMATIONS - OPTIMIZED
function initScrollAnimations() {
    // Use IntersectionObserver for better performance
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Use requestAnimationFrame for smooth animations
                requestAnimationFrame(() => {
                    entry.target.classList.add('animate-in');
                });
            }
        });
    }, observerOptions);

    // Observe only visible elements
    const animatedElements = document.querySelectorAll(
        '.hero-content, .hero-visual, .about-intro, .about-features, ' +
        '.project-card, .timeline-item, .education-card, ' +
        '.info-card, .form-card, .certificate-card'
    );

    animatedElements.forEach((el, index) => {
        // Add delay only for desktop
        if (!isMobile()) {
            el.classList.add(`delay-${(index % 4) + 1}`);
        }
        observer.observe(el);
    });
}

// BACK TO TOP BUTTON - OPTIMIZED
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    let scrollTimeout;

    window.addEventListener('scroll', () => {
        // Throttle scroll events
        if (scrollTimeout) return;

        scrollTimeout = setTimeout(() => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
            scrollTimeout = null;
        }, isMobile() ? 150 : 50);
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

// SMOOTH SCROLLING - OPTIMIZED
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.cosmic-nav').offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// PROGRESS BARS ANIMATION - OPTIMIZED
function initProgressBars() {
    const progressCircles = document.querySelectorAll('.circular-progress');

    progressCircles.forEach(circle => {
        const value = circle.getAttribute('data-value') || 88;
        const progressFill = circle.querySelector('.progress-fill');

        if (progressFill) {
            // Use transform for better performance
            const circumference = 2 * Math.PI * 45;
            const offset = circumference * (1 - value / 100);

            progressFill.style.transform = `rotate(-90deg)`;
            progressFill.style.transformOrigin = 'center';
            progressFill.style.strokeDasharray = `${circumference} ${circumference}`;
            progressFill.style.strokeDashoffset = offset;
        }
    });
}

// ROTATING CUBE INTERACTION - OPTIMIZED
function initRotatingCube() {
    const rotatingCube = document.querySelector('.rotating-cube');
    if (!rotatingCube) return;

    // Slower rotation on mobile
    if (isMobile()) {
        rotatingCube.style.animationDuration = '30s';
    }

    let isHovering = false;
    let animationFrame;

    // Mouse enter/leave events (desktop only)
    if (!isMobile()) {
        rotatingCube.addEventListener('mouseenter', () => {
            isHovering = true;
            rotatingCube.style.animationPlayState = 'paused';
        });

        rotatingCube.addEventListener('mouseleave', () => {
            isHovering = false;
            rotatingCube.style.animationPlayState = 'running';
        });

        // Mouse move for manual rotation
        rotatingCube.addEventListener('mousemove', (e) => {
            if (!isHovering) return;

            const rect = rotatingCube.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;

            // Calculate rotation based on mouse position
            const rotationX = (deltaY / rect.height) * 180;
            const rotationY = (deltaX / rect.width) * 180;

            // Use requestAnimationFrame for smooth updates
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }

            animationFrame = requestAnimationFrame(() => {
                rotatingCube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
            });
        });
    }

    return () => {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
    };
}

// HOVER EFFECTS - DISABLED ON MOBILE
function initHoverEffects() {
    if (isMobile()) return; // No hover effects on mobile

    // Add hover effect to cards
    const cards = document.querySelectorAll('.feature-card, .project-card, .education-card, .certificate-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// PARALLAX EFFECTS - DESKTOP ONLY
function initParallaxEffects() {
    if (isMobile()) return;

    const auroraLayers = document.querySelectorAll('.aurora-layer');
    const nebulaClouds = document.querySelectorAll('.nebula-cloud');

    let animationFrame;
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth;
        mouseY = e.clientY / window.innerHeight;
    });

    function updateParallax() {
        // Parallax for aurora layers
        auroraLayers.forEach((layer, index) => {
            const speed = (index + 1) * 0.8;
            const x = (mouseX - 0.5) * 50 * speed;
            const y = (mouseY - 0.5) * 50 * speed;

            layer.style.transform = `translate(${x}px, ${y}px)`;
        });

        // Parallax for nebula clouds
        nebulaClouds.forEach((cloud, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * 100 * speed;
            const y = (mouseY - 0.5) * 100 * speed;

            cloud.style.transform = `translate(${x}px, ${y}px)`;
        });

        animationFrame = requestAnimationFrame(updateParallax);
    }

    // Start parallax effect
    animationFrame = requestAnimationFrame(updateParallax);

    return () => {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
    };
}

// WINDOW RESIZE HANDLER - OPTIMIZED
let resizeTimeout;
window.addEventListener('resize', () => {
    // Debounce resize events
    if (resizeTimeout) clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
        // Only reinitialize if needed
        if (!isMobile()) {
            initEnhancedStarfield();
            initCursorSystem();
        }
    }, 250);
});

// PERFORMANCE OPTIMIZATION
window.addEventListener('load', () => {
    console.log('Page fully loaded');

    // Add loaded class for transitions
    document.body.classList.add('loaded');

    // Remove loading indicators if any
    const loadingElements = document.querySelectorAll('.loading-indicator');
    loadingElements.forEach(el => el.remove());

    // Optimize animations after load
    if (isMobile()) {
        // Reduce animation quality on mobile
        document.querySelectorAll('*[style*="animation"]').forEach(el => {
            const style = window.getComputedStyle(el);
            const animation = style.animation;
            if (animation && animation.includes('steps')) {
                el.style.animation = animation.replace(/\d+ steps/, '10 steps');
            }
        });
    }
});

// CLEANUP FUNCTION
function cleanup() {
    // Clear all timeouts and intervals
    const highestId = setTimeout(() => {}, 0);
    for (let i = 0; i < highestId; i++) {
        clearTimeout(i);
        clearInterval(i);
    }

    // Cancel all animations
    if (typeof Animation !== 'undefined') {
        document.getAnimations().forEach(anim => anim.cancel());
    }
}

// Add cleanup on page unload
window.addEventListener('beforeunload', cleanup);

// Add performance monitoring
if (typeof PerformanceObserver !== 'undefined') {
    const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
            console.log(`${entry.name}: ${entry.duration}ms`);
        });
    });

    observer.observe({ entryTypes: ['paint', 'measure'] });
}

console.log('Script loaded successfully');
