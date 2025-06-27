/**
 * IZI Support Theme JavaScript - Enhanced Version
 * Fixed for XAMPP and local environments
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 IZI Support Theme JavaScript Loading...');
    
    // Partners Carousel Animation - ENHANCED AND BULLETPROOF
    function initPartnersCarousel() {
        console.log('🎠 Initializing Partners Carousel...');
        
        const partnersContainer = document.querySelector('.partners-container');
        const partnersCarousel = document.querySelector('.partners-carousel');
        
        if (!partnersContainer || !partnersCarousel) {
            console.error('❌ Partners carousel elements not found');
            // Try again after a delay
            setTimeout(initPartnersCarousel, 1000);
            return;
        }

        console.log('✅ Partners carousel elements found');
        
        // Force CSS styles with highest priority
        const forceStyles = () => {
            partnersContainer.style.setProperty('overflow', 'hidden', 'important');
            partnersContainer.style.setProperty('position', 'relative', 'important');
            partnersContainer.style.setProperty('width', '100%', 'important');
            partnersContainer.style.setProperty('height', '100px', 'important');
            partnersContainer.style.setProperty('display', 'block', 'important');
            
            partnersCarousel.style.setProperty('display', 'flex', 'important');
            partnersCarousel.style.setProperty('flex-direction', 'row', 'important');
            partnersCarousel.style.setProperty('gap', '2rem', 'important');
            partnersCarousel.style.setProperty('width', 'calc(200% + 4rem)', 'important');
            partnersCarousel.style.setProperty('height', '100%', 'important');
            partnersCarousel.style.setProperty('align-items', 'center', 'important');
            partnersCarousel.style.setProperty('position', 'relative', 'important');
            partnersCarousel.style.setProperty('left', '0', 'important');
            partnersCarousel.style.setProperty('top', '0', 'important');
            partnersCarousel.style.setProperty('margin', '0', 'important');
            partnersCarousel.style.setProperty('padding', '0', 'important');
            
            // Force GPU acceleration
            partnersCarousel.style.setProperty('transform', 'translate3d(0, 0, 0)', 'important');
            partnersCarousel.style.setProperty('will-change', 'transform', 'important');
            partnersCarousel.style.setProperty('backface-visibility', 'hidden', 'important');
        };
        
        forceStyles();
        
        // Multiple animation techniques for maximum compatibility
        const startAnimation = () => {
            console.log('🎬 Starting carousel animation...');
            
            // Method 1: CSS Animation
            partnersCarousel.style.setProperty('animation', 'scrollHorizontal 25s linear infinite', 'important');
            
            // Method 2: Webkit prefix
            partnersCarousel.style.setProperty('-webkit-animation', 'scrollHorizontal 25s linear infinite', 'important');
            
            // Method 3: Fallback using transform directly (for older browsers)
            if (!partnersCarousel.style.animation) {
                console.log('🔄 Using transform fallback animation');
                let startTime = null;
                const duration = 25000; // 25 seconds
                
                const animateTransform = (timestamp) => {
                    if (!startTime) startTime = timestamp;
                    const progress = (timestamp - startTime) % duration;
                    const percentage = progress / duration;
                    const translateX = -(percentage * 50); // Move 50% of width
                    
                    partnersCarousel.style.transform = `translateX(${translateX}%)`;
                    
                    requestAnimationFrame(animateTransform);
                };
                
                requestAnimationFrame(animateTransform);
            }
            
            console.log('✅ Animation methods applied');
        };
        
        // Pause/Resume on hover
        partnersContainer.addEventListener('mouseenter', function() {
            partnersCarousel.style.setProperty('animation-play-state', 'paused', 'important');
            console.log('⏸️ Animation paused');
        });
        
        partnersContainer.addEventListener('mouseleave', function() {
            partnersCarousel.style.setProperty('animation-play-state', 'running', 'important');
            console.log('▶️ Animation resumed');
        });
        
        // Emergency restart function
        const restartAnimation = () => {
            console.log('🔄 Restarting animation...');
            partnersCarousel.style.animation = 'none';
            partnersCarousel.offsetHeight; // Force reflow
            partnersCarousel.style.setProperty('animation', 'scrollHorizontal 25s linear infinite', 'important');
        };
        
        // Start animation with multiple attempts
        setTimeout(() => {
            startAnimation();
            forceStyles(); // Reapply styles after animation start
        }, 100);
        
        // Backup restart every 30 seconds
        setInterval(restartAnimation, 30000);
        
        // Restart on window focus (helpful for development)
        window.addEventListener('focus', () => {
            setTimeout(restartAnimation, 500);
        });
        
        // Watch for style changes and reapply if needed
        const observer = new MutationObserver(() => {
            forceStyles();
        });
        
        observer.observe(partnersCarousel, {
            attributes: true,
            attributeFilter: ['style', 'class']
        });
        
        console.log('✅ Partners carousel initialized successfully');
        return true;
    }

    // Enhanced smooth scrolling
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu && mobileMenu.classList.contains('show')) {
                        mobileMenu.classList.remove('show');
                        const menuButton = document.getElementById('mobile-menu-button');
                        if (menuButton) {
                            const icon = menuButton.querySelector('svg');
                            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
                        }
                    }
                    
                    // Scroll to target with offset for fixed header
                    const headerHeight = 80;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Enhanced intersection observer for animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Special handling for partners section
                    if (entry.target.classList.contains('partners-container')) {
                        setTimeout(() => {
                            window.iziSupport?.restartPartnersAnimation?.();
                        }, 200);
                    }
                }
            });
        }, observerOptions);

        // Observe all elements with fade-in class
        const fadeInElements = document.querySelectorAll('.fade-in');
        fadeInElements.forEach(el => {
            observer.observe(el);
        });

        // Also observe partners container
        const partnersContainer = document.querySelector('.partners-container');
        if (partnersContainer) {
            observer.observe(partnersContainer);
        }
    }

    // Mobile menu with enhanced functionality
    function initMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', function() {
                const isOpen = mobileMenu.classList.contains('show');
                
                if (isOpen) {
                    mobileMenu.classList.remove('show');
                } else {
                    mobileMenu.classList.add('show');
                }
                
                // Toggle hamburger icon
                const icon = this.querySelector('svg');
                if (isOpen) {
                    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
                } else {
                    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
                }
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                    mobileMenu.classList.remove('show');
                    const icon = mobileMenuButton.querySelector('svg');
                    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
                }
            });

            // Close mobile menu on window resize if desktop
            window.addEventListener('resize', function() {
                if (window.innerWidth >= 768) {
                    mobileMenu.classList.remove('show');
                    const icon = mobileMenuButton.querySelector('svg');
                    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
                }
            });
        }
    }

    // Header scroll effect
    function initHeaderScrollEffect() {
        const header = document.querySelector('.site-header');
        if (!header) return;

        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Enhanced stagger animations
    function initStaggerAnimations() {
        const staggerContainers = document.querySelectorAll('.stagger-animation');
        
        staggerContainers.forEach(container => {
            const items = container.children;
            Array.from(items).forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`;
            });
        });
    }

    // Enhanced hover effects
    function initEnhancedHoverEffects() {
        const hoverElements = document.querySelectorAll('.hover-lift');
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
        });
    }

    // Comprehensive debug function
    function debugPartnersCarousel() {
        const partnersContainer = document.querySelector('.partners-container');
        const partnersCarousel = document.querySelector('.partners-carousel');
        
        console.group('🔍 PARTNERS CAROUSEL DEBUG');
        console.log('Container found:', !!partnersContainer);
        console.log('Carousel found:', !!partnersCarousel);
        
        if (partnersContainer) {
            const containerStyles = window.getComputedStyle(partnersContainer);
            console.log('Container styles:', {
                overflow: containerStyles.overflow,
                width: containerStyles.width,
                height: containerStyles.height,
                position: containerStyles.position,
                display: containerStyles.display
            });
        }
        
        if (partnersCarousel) {
            const carouselStyles = window.getComputedStyle(partnersCarousel);
            console.log('Carousel styles:', {
                display: carouselStyles.display,
                animation: carouselStyles.animation,
                width: carouselStyles.width,
                transform: carouselStyles.transform,
                willChange: carouselStyles.willChange
            });
            console.log('Partner cards count:', partnersCarousel.children.length);
            
            // Check if animation is actually running
            const animationName = carouselStyles.animationName;
            const animationDuration = carouselStyles.animationDuration;
            const animationIterationCount = carouselStyles.animationIterationCount;
            
            console.log('Animation details:', {
                name: animationName,
                duration: animationDuration,
                iterationCount: animationIterationCount,
                playState: carouselStyles.animationPlayState
            });
        }
        
        // Check if CSS keyframes are loaded
        const keyframes = document.styleSheets;
        let keyframesFound = false;
        for (let i = 0; i < keyframes.length; i++) {
            try {
                const rules = keyframes[i].cssRules || keyframes[i].rules;
                for (let j = 0; j < rules.length; j++) {
                    if (rules[j].name === 'scrollHorizontal') {
                        keyframesFound = true;
                        console.log('✅ CSS keyframes found');
                        break;
                    }
                }
            } catch (e) {
                // Cross-origin stylesheet, skip
            }
        }
        
        if (!keyframesFound) {
            console.warn('⚠️ CSS keyframes not found');
        }
        
        console.groupEnd();
    }

    // Cache busting for CSS in development
    function handleCacheBusting() {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('🔄 Development mode detected - checking for cache issues');
            
            // Add timestamp to force CSS reload if needed
            const timestamp = new Date().getTime();
            console.log('Cache buster timestamp:', timestamp);
        }
    }

    // Initialize all functions in correct order
    console.log('📋 Initializing all components...');
    
    handleCacheBusting();
    initSmoothScrolling();
    initScrollAnimations();
    initMobileMenu();
    initHeaderScrollEffect();
    initStaggerAnimations();
    initEnhancedHoverEffects();
    
    // Initialize partners carousel with multiple attempts
    let carouselInitialized = false;
    let attempts = 0;
    const maxAttempts = 5;
    
    const tryInitCarousel = () => {
        attempts++;
        console.log(`🎠 Carousel initialization attempt ${attempts}/${maxAttempts}`);
        
        carouselInitialized = initPartnersCarousel();
        
        if (!carouselInitialized && attempts < maxAttempts) {
            setTimeout(tryInitCarousel, 1000);
        } else if (carouselInitialized) {
            console.log('✅ Carousel successfully initialized');
            setTimeout(debugPartnersCarousel, 1000);
        } else {
            console.error('❌ Failed to initialize carousel after all attempts');
            debugPartnersCarousel();
        }
    };
    
    // Start carousel initialization
    setTimeout(tryInitCarousel, 300);

    // Global utility functions
    window.iziSupport = {
        restartPartnersAnimation: function() {
            const partnersCarousel = document.querySelector('.partners-carousel');
            if (partnersCarousel) {
                partnersCarousel.style.animation = 'none';
                partnersCarousel.offsetHeight; // Trigger reflow
                partnersCarousel.style.setProperty('animation', 'scrollHorizontal 25s linear infinite', 'important');
                console.log('🔄 Animation manually restarted');
                return true;
            }
            return false;
        },
        
        debugCarousel: debugPartnersCarousel,
        
        forceCarouselStyles: function() {
            const partnersContainer = document.querySelector('.partners-container');
            const partnersCarousel = document.querySelector('.partners-carousel');
            
            if (partnersContainer && partnersCarousel) {
                partnersContainer.style.setProperty('overflow', 'hidden', 'important');
                partnersCarousel.style.setProperty('animation', 'scrollHorizontal 25s linear infinite', 'important');
                console.log('🎨 Forced carousel styles applied');
                return true;
            }
            return false;
        },
        
        isMobile: () => window.innerWidth < 768,
        isTablet: () => window.innerWidth >= 768 && window.innerWidth < 1024,
        isDesktop: () => window.innerWidth >= 1024
    };

    // Final setup and diagnostics
    setTimeout(() => {
        console.group('🎯 IZI Support Theme - Final Status');
        console.log('✅ Theme loaded successfully');
        console.log('📱 Viewport width:', window.innerWidth);
        console.log('📱 Device type:', 
            window.iziSupport.isMobile() ? 'Mobile' : 
            window.iziSupport.isTablet() ? 'Tablet' : 'Desktop'
        );
        console.log('🎠 Carousel initialized:', carouselInitialized);
        console.log('🔧 Global utilities available:', !!window.iziSupport);
        console.groupEnd();
        
        // One final debug
        if (carouselInitialized) {
            debugPartnersCarousel();
        }
    }, 2000);
    
    // Emergency backup - restart animation on visibility change
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden && window.iziSupport) {
            setTimeout(() => {
                window.iziSupport.restartPartnersAnimation();
            }, 500);
        }
    });
});

// Additional XAMPP-specific fixes
window.addEventListener('load', function() {
    console.log('🏁 Window fully loaded - final carousel check');
    
    // Final attempt to ensure animation is working
    setTimeout(() => {
        if (window.iziSupport) {
            window.iziSupport.forceCarouselStyles();
            window.iziSupport.restartPartnersAnimation();
        }
    }, 1000);
});