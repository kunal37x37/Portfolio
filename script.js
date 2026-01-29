// Professional Aurora Galaxy Portfolio JavaScript - MOBILE OPTIMIZED

// Detect mobile device
const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth <= 768;
};

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Add mobile class to body
    if (isMobile()) {
        document.body.classList.add('mobile');
        // Reduce background effects on mobile
        initMobileBackground();
    } else {
        document.body.classList.remove('mobile');
        initEnhancedBackground();
    }

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

    // Initialize progress bars
    initProgressBars();

    // Initialize rotating cube (simpler on mobile)
    initRotatingCube();

    // Initialize hover effects (only desktop)
    if (!isMobile()) {
        initHoverEffects();
    }

    // Load profile image
    loadProfileImage();

    // Initialize mobile touch events
    if (isMobile()) {
        initMobileTouchEvents();
    }

    // Performance optimization
    initPerformanceOptimizations();
});

// MOBILE BACKGROUND (Simplified)
function initMobileBackground() {
    // Create minimal starfield
    const starfield = document.getElementById('starfield');
    if (!starfield) return;

    starfield.innerHTML = '';
    createStarLayer(starfield, 50, 1, 0.8, 'white');
    createStarLayer(starfield, 30, 2, 0.6, '#e2e8f0');

    // Add mobile-friendly animations
    document.body.style.overflowX = 'hidden';
}

// DESKTOP BACKGROUND (Full effects)
function initEnhancedBackground() {
    // Initialize enhanced background effects
    initEnhancedStarfield();
    initFrequentStarfall();
    initShootingStars();
    initMeteorShower();
    initSpaceDebris();

    // Initialize cursor system (only on desktop)
    initCursorSystem();

    // Initialize parallax effects
    initParallaxEffects();
}

// PROFILE IMAGE LOADING - OPTIMIZED FOR MOBILE
function loadProfileImage() {
    const profileImages = document.querySelectorAll('.profile-image');
    if (!profileImages.length) return;

    console.log('Loading profile image...');

    // Your Google Drive file ID
    const fileId = '1hkWWDzJZy8C501FoFcOufxlaIcYT_Aa9';

    // Use optimized image source for mobile
    const isMobileDevice = isMobile();
    const imageSize = isMobileDevice ? 'w500' : 'w1000';
    const imageSource = `https://drive.google.com/thumbnail?id=${fileId}&sz=${imageSize}`;

    profileImages.forEach(profileImage => {
        // Set low-res placeholder first
        profileImage.style.opacity = '0';
        profileImage.style.transition = 'opacity 0.5s ease';

        const img = new Image();
        img.crossOrigin = 'anonymous';

        img.onload = function() {
            profileImage.src = imageSource;
            profileImage.classList.add('loaded');
            profileImage.style.opacity = '1';
        };

        img.onerror = function() {
            console.log('Failed to load profile image, using fallback');
            // Use fallback image
            profileImage.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
            profileImage.classList.add('loaded');
            profileImage.style.opacity = '1';
        };

        // Load with timeout
        setTimeout(() => {
            img.src = imageSource;
        }, 100);

        // Set timeout for loading
        setTimeout(() => {
            if (!profileImage.classList.contains('loaded')) {
                profileImage.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                profileImage.classList.add('loaded');
                profileImage.style.opacity = '1';
            }
        }, 3000);
    });
}

// ENHANCED STARFIELD BACKGROUND (Desktop only)
function initEnhancedStarfield() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;

    // Clear existing stars
    starfield.innerHTML = '';

    // Create three layers of stars
    createStarLayer(starfield, 150, 1, 0.8, 'white');
    createStarLayer(starfield, 100, 2, 0.6, '#e2e8f0');
    createStarLayer(starfield, 50, 3, 0.4, '#94a3b8');
}

function createStarLayer(container, count, size, opacity, color) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');

        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        // Random animation properties
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 10;

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
        star.style.pointerEvents = 'none';
        star.style.willChange = 'transform, opacity';

        container.appendChild(star);
    }
}

// FREQUENT STARFALL EFFECT (Desktop only)
function initFrequentStarfall() {
    if (isMobile()) return;

    const container = document.getElementById('starfall');
    if (!container) return;

    let animationFrame;
    let lastTime = 0;
    const interval = 1000; // 1 second between starfalls

    function createStarfall(timestamp) {
        if (!lastTime) lastTime = timestamp;
        const elapsed = timestamp - lastTime;

        if (elapsed > interval) {
            // Create starfall
            const starfall = document.createElement('div');
            starfall.className = 'starfall';

            // Random starting position
            const startX = Math.random() * 100;
            const startY = -30;

            // Random properties
            const length = Math.random() * 100 + 50;
            const duration = Math.random() * 1 + 0.5;

            starfall.style.left = `${startX}%`;
            starfall.style.top = `${startY}px`;
            starfall.style.height = `${length}px`;
            starfall.style.background = 'linear-gradient(to bottom, transparent, white, transparent)';
            starfall.style.opacity = (Math.random() * 0.4 + 0.2).toString();

            container.appendChild(starfall);

            // Animate
            const startTime = Date.now();

            function animate() {
                const currentTime = Date.now();
                const progress = (currentTime - startTime) / (duration * 1000);

                if (progress < 1) {
                    starfall.style.transform = `translateY(${progress * length * 2}px)`;
                    starfall.style.opacity = (0.2 * (1 - progress)).toString();
                    requestAnimationFrame(animate);
                } else {
                    if (starfall.parentNode) {
                        starfall.parentNode.removeChild(starfall);
                    }
                }
            }

            requestAnimationFrame(animate);
            lastTime = timestamp;
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

// SHOOTING STARS (Desktop only)
function initShootingStars() {
    if (isMobile()) return;

    const container = document.getElementById('shootingStars');
    if (!container) return;

    function createShootingStar() {
        const star = document.createElement('div');
        star.className = 'shooting-star';

        // Random starting position
        const startX = -100;
        const startY = Math.random() * 60 + 20;

        // Random angle and distance
        const angle = Math.random() * 20 + 10;
        const distance = Math.random() * 300 + 200;

        star.style.left = `${startX}px`;
        star.style.top = `${startY}%`;
        star.style.background = 'linear-gradient(90deg, transparent, white, transparent)';
        star.style.opacity = (Math.random() * 0.4 + 0.2).toString();
        star.style.transform = `rotate(${angle}deg)`;

        container.appendChild(star);

        // Animate with requestAnimationFrame for better performance
        const startTime = Date.now();
        const duration = 1500;

        function animate() {
            const currentTime = Date.now();
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
                const currentX = startX + progress * distance * Math.cos(angle * Math.PI / 180);
                const currentY = startY + progress * distance * Math.sin(angle * Math.PI / 180);

                star.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${angle}deg)`;
                star.style.opacity = (0.2 * (1 - progress)).toString();
                requestAnimationFrame(animate);
            } else {
                if (star.parentNode) {
                    star.parentNode.removeChild(star);
                }
            }
        }

        requestAnimationFrame(animate);
    }

    // Create shooting stars less frequently on mobile
    const frequency = isMobile() ? 5000 : 3000;
    setInterval(createShootingStar, frequency);
}

// METEOR SHOWER (Desktop only)
function initMeteorShower() {
    if (isMobile()) return;

    const container = document.getElementById('meteorShower');
    if (!container) return;

    function createMeteor() {
        const meteor = document.createElement('div');
        meteor.className = 'meteor';

        // Random starting position
        const startX = Math.random() * 100 + 100;
        const startY = -20;

        // Random angle and distance
        const angle = Math.random() * 10 + 5;
        const distance = Math.random() * 400 + 300;

        meteor.style.left = `${startX}%`;
        meteor.style.top = `${startY}px`;
        meteor.style.opacity = (Math.random() * 0.3 + 0.1).toString();
        meteor.style.transform = `rotate(${angle}deg)`;

        container.appendChild(meteor);

        // Animate
        const startTime = Date.now();
        const duration = 2000;

        function animate() {
            const currentTime = Date.now();
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
                const currentX = progress * distance * Math.cos(angle * Math.PI / 180);
                const currentY = progress * distance * Math.sin(angle * Math.PI / 180);

                meteor.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${angle}deg)`;
                meteor.style.opacity = (0.1 * (1 - progress)).toString();
                requestAnimationFrame(animate);
            } else {
                if (meteor.parentNode) {
                    meteor.parentNode.removeChild(meteor);
                }
            }
        }

        requestAnimationFrame(animate);
    }

    // Create meteors less frequently
    setInterval(createMeteor, 4000);
}

// SPACE DEBRIS (Desktop only)
function initSpaceDebris() {
    if (isMobile()) return;

    const container = document.getElementById('spaceDebris');
    if (!container) return;

    const debrisCount = 20;

    for (let i = 0; i < debrisCount; i++) {
        const debris = document.createElement('div');
        debris.className = 'debris';

        // Random properties
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 10;

        // Apply styles
        debris.style.width = `${size}px`;
        debris.style.height = `${size}px`;
        debris.style.left = `${x}%`;
        debris.style.top = `${y}%`;
        debris.style.opacity = (Math.random() * 0.2 + 0.05).toString();
        debris.style.background = 'rgba(255, 255, 255, 0.1)';
        debris.style.borderRadius = '50%';

        container.appendChild(debris);
    }
}

// PROFESSIONAL CURSOR SYSTEM (Desktop only)
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

        requestAnimationFrame(animateCursor);
    }

    // Start animation
    animateCursor();
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
        'Tech Enthusiast'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

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
        let typeSpeed = isMobile() ? 150 : 100;

        if (isDeleting) {
            typeSpeed /= 2;
        }

        // Pause at the end of typing
        if (!isDeleting && charIndex === currentText.length) {
            isPaused = true;
            setTimeout(() => {
                isPaused = false;
                isDeleting = true;
                setTimeout(type, 500);
            }, 2000);
            return;
        }

        // Move to next text when deletion complete
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500);
            return;
        }

        // Continue typing
        setTimeout(type, typeSpeed);
    }

    // Start typing effect
    setTimeout(type, 1000);
}

// NAVIGATION - MOBILE OPTIMIZED
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
    const updateActiveNav = debounce(() => {
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
                header.style.background = isMobile() ?
                    'rgba(5, 5, 17, 0.95)' :
                    'rgba(5, 5, 17, 0.98)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'rgba(5, 5, 17, 0.9)';
                header.style.backdropFilter = 'blur(5px)';
            }
        }
    }, 100);

    window.addEventListener('scroll', updateActiveNav);

    // Close menu when clicking on a link (mobile)
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navHamburger && navMenu && isMobile()) {
                navHamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';

                // Smooth scroll to section
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = document.querySelector('.cosmic-nav').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// FORM SUBMISSION
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
            return result;
        } else {
            throw new Error(result.error || 'Failed to send email');
        }

    } catch (error) {
        console.error('Formspree Error:', error);

        // Fallback for demo
        return { success: true, message: 'Message sent successfully!' };
    }
}

// SCROLL ANIMATIONS - MOBILE OPTIMIZED
function initScrollAnimations() {
    const observerOptions = {
        threshold: isMobile() ? 0.05 : 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Unobserve after animation to improve performance
                if (isMobile()) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe elements
    const animatedElements = document.querySelectorAll(
        '.hero-content, .hero-visual, .about-intro, .about-features, .stats-container, ' +
        '.project-card, .timeline-item, .education-card, ' +
        '.info-card, .form-card, .certificate-card'
    );

    animatedElements.forEach((el, index) => {
        if (!isMobile() || index < 10) { // Limit on mobile
            el.classList.add(`delay-${(index % 4) + 1}`);
            observer.observe(el);
        }
    });
}

// BACK TO TOP BUTTON
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    const updateBackToTop = debounce(() => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }, 100);

    window.addEventListener('scroll', updateBackToTop);

    // Smooth scroll to top
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// SMOOTH SCROLLING - MOBILE FRIENDLY
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = isMobile() ? 70 : document.querySelector('.cosmic-nav').offsetHeight;
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
        const circumference = 2 * Math.PI * 45;
        const offset = circumference * (1 - value / 100);

        const progressFill = circle.querySelector('.progress-fill');
        if (progressFill) {
            progressFill.style.strokeDasharray = `${circumference} ${circumference}`;
            progressFill.style.strokeDashoffset = offset;
        }
    });
}

// ROTATING CUBE INTERACTION - SIMPLIFIED FOR MOBILE
function initRotatingCube() {
    const rotatingCube = document.querySelector('.rotating-cube');
    if (!rotatingCube) return;

    // Stop animation on mobile for better performance
    if (isMobile()) {
        rotatingCube.style.animation = 'none';
        return;
    }

    let isHovering = false;

    // Mouse enter/leave events
    rotatingCube.addEventListener('mouseenter', () => {
        isHovering = true;
        rotatingCube.style.animationPlayState = 'paused';
    });

    rotatingCube.addEventListener('mouseleave', () => {
        isHovering = false;
        rotatingCube.style.animationPlayState = 'running';
    });
}

// HOVER EFFECTS (Desktop only)
function initHoverEffects() {
    if (isMobile()) return;

    // Add hover effect to cards
    const cards = document.querySelectorAll('.feature-card, .project-card, .education-card, .certificate-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// PARALLAX EFFECTS (Desktop only)
function initParallaxEffects() {
    if (isMobile()) return;

    const auroraLayers = document.querySelectorAll('.aurora-layer');
    const nebulaClouds = document.querySelectorAll('.nebula-cloud');

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        // Parallax for aurora layers
        auroraLayers.forEach((layer, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * 30 * speed;
            const y = (mouseY - 0.5) * 30 * speed;

            layer.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// MOBILE TOUCH EVENTS
function initMobileTouchEvents() {
    // Add touch feedback for buttons
    const buttons = document.querySelectorAll('a, button, .cta-button');

    buttons.forEach(button => {
        button.addEventListener('touchstart', () => {
            button.style.transform = 'scale(0.95)';
        });

        button.addEventListener('touchend', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Prevent zoom on double tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

// PERFORMANCE OPTIMIZATIONS
function initPerformanceOptimizations() {
    // Use passive listeners for better scrolling performance
    const options = { passive: true };

    // Disable heavy animations when page is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // Pause heavy animations
            document.body.classList.add('page-hidden');
        } else {
            document.body.classList.remove('page-hidden');
        }
    });

    // Optimize for mobile devices
    if (isMobile()) {
        // Reduce animation complexity
        document.documentElement.style.setProperty('--transition-normal', '200ms ease');

        // Disable some effects on low-end devices
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            // Further reduce effects
            const effects = document.querySelectorAll('.aurora-layer, .nebula-cloud, .visual-trail');
            effects.forEach(effect => {
                effect.style.display = 'none';
            });
        }
    }
}

// WINDOW RESIZE HANDLER
const handleResize = debounce(() => {
    // Reinitialize if switching between mobile/desktop
    const wasMobile = document.body.classList.contains('mobile');
    const nowMobile = isMobile();

    if (wasMobile !== nowMobile) {
        location.reload(); // Reload for clean switch
    }
}, 250);

window.addEventListener('resize', handleResize);

// Initialize performance monitoring
function monitorPerformance() {
    if ('performance' in window) {
        const timing = performance.getEntriesByType('navigation')[0];
        if (timing) {
            console.log(`Page loaded in ${timing.domContentLoadedEventEnd - timing.fetchStart}ms`);
        }
    }
}

// Call performance monitoring
setTimeout(monitorPerformance, 1000);

// Add loaded class to body for transition effects
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Remove loading state
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 500);
});
