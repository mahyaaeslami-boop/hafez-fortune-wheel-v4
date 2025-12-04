// ========================================
// Modern Interactive UI/UX Enhancements
// ========================================

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate sections on scroll
document.addEventListener('DOMContentLoaded', () => {
    // Apply fade-in to all sections
    const sections = document.querySelectorAll('section, .about-card, .story-card, .contact-card');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        fadeInObserver.observe(section);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = \	ranslateY(\px)\;
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add glass-card class to existing cards
    const cards = document.querySelectorAll('.about-card, .story-card, .quiz-intro, .question-container');
    cards.forEach(card => {
        card.classList.add('glass-card');
    });

    // Enhanced button interactions
    const buttons = document.querySelectorAll('button, .get-faal-button, .quiz-button, .admin-access-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = \
                position: absolute;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                transform: translate(-50%, -50%);
                left: \px;
                top: \px;
                pointer-events: none;
                animation: ripple 0.6s ease-out;
            \;
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation CSS
    const style = document.createElement('style');
    style.textContent = \
        @keyframes ripple {
            to {
                width: 100px;
                height: 100px;
                opacity: 0;
            }
        }
        
        .hero-content {
            transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .about-card, .story-card {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        img {
            opacity: 0;
            transition: opacity 0.3s ease-in;
        }
        
        img.loaded {
            opacity: 1;
        }
    \;
    document.head.appendChild(style);

    // Lazy load images with fade-in
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });

    // Add particle effect on click
    document.addEventListener('click', (e) => {
        if (e.target.matches('.get-faal-button, .quiz-button')) {
            createParticleBurst(e.clientX, e.clientY);
        }
    });

    function createParticleBurst(x, y) {
        const colors = ['#ffd700', '#ff6f00', '#00bcd4', '#d32f2f'];
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = 'magic-particle';
            particle.style.cssText = \
                position: fixed;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: \;
                left: \px;
                top: \px;
                pointer-events: none;
                z-index: 9999;
            \;
            
            document.body.appendChild(particle);
            
            const angle = (Math.PI * 2 * i) / 12;
            const velocity = 100 + Math.random() * 100;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            
            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: \	ranslate(\px, \px) scale(0)\, opacity: 0 }
            ], {
                duration: 800,
                easing: 'cubic-bezier(0, .9, .57, 1)'
            }).onfinish = () => particle.remove();
        }
    }

    // Progressive enhancement for wheel section
    const wheelSection = document.querySelector('.wheel-section');
    if (wheelSection) {
        wheelSection.addEventListener('mouseenter', () => {
            wheelSection.style.background = \
                radial-gradient(ellipse at center, rgba(211, 47, 47, 0.25), transparent),
                linear-gradient(180deg, #16213e 0%, #0a0e27 100%)
            \;
        });
        wheelSection.addEventListener('mouseleave', () => {
            wheelSection.style.background = \
                radial-gradient(ellipse at center, rgba(211, 47, 47, 0.15), transparent),
                linear-gradient(180deg, #16213e 0%, #0a0e27 100%)
            \;
        });
    }
});

// Performance optimization
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

const throttledScroll = debounce(() => {}, 100);
window.addEventListener('scroll', throttledScroll);
