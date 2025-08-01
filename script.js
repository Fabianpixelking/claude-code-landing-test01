// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    this.classList.toggle('active');
});

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const faqAnswer = faqItem.querySelector('.faq-answer');
            
            // Close all other FAQ items
            faqQuestions.forEach(otherQuestion => {
                const otherItem = otherQuestion.parentElement;
                if (otherItem !== faqItem) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current FAQ item
            faqItem.classList.toggle('active');
        });
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card, .step');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Power indicator animation in hero section
document.addEventListener('DOMContentLoaded', function() {
    const gasIndicator = document.querySelector('.indicator.gas');
    const electricIndicator = document.querySelector('.indicator.electric');
    
    setInterval(function() {
        gasIndicator.classList.toggle('active');
        electricIndicator.classList.toggle('active');
    }, 3000);
});

// Smooth scroll for CTA buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// Form handling for CTA buttons (placeholder functionality)
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        if (!this.getAttribute('onclick') && !this.getAttribute('href')) {
            e.preventDefault();
            
            // Create a simple modal or alert
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
            `;
            
            const modalContent = document.createElement('div');
            modalContent.style.cssText = `
                background: white;
                padding: 3rem;
                border-radius: 15px;
                text-align: center;
                max-width: 500px;
                margin: 2rem;
            `;
            
            modalContent.innerHTML = `
                <h2 style="color: #ff6b35; margin-bottom: 1rem;">Vielen Dank für Ihr Interesse!</h2>
                <p style="margin-bottom: 2rem; color: #666;">Dies ist eine Demo-Landing-Page. In einer echten Implementierung würde hier der Bestellprozess starten.</p>
                <button onclick="this.closest('[style*=position]').remove()" style="
                    background: #ff6b35;
                    color: white;
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 50px;
                    font-weight: 600;
                    cursor: pointer;
                ">Schließen</button>
            `;
            
            modal.appendChild(modalContent);
            document.body.appendChild(modal);
            
            // Close modal when clicking outside
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        }
    });
});

// Add loading animation to page
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-background');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Counter animation for pricing
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(function() {
        start += increment;
        element.textContent = Math.floor(start) + ' €';
        
        if (start >= target) {
            element.textContent = target + ' €';
            clearInterval(timer);
        }
    }, 16);
}

// Trigger counter animation when pricing section is visible
const pricingObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const priceElement = entry.target.querySelector('.current-price');
            if (priceElement && !priceElement.dataset.animated) {
                priceElement.dataset.animated = 'true';
                animateCounter(priceElement, 849);
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const pricingSection = document.querySelector('.pricing');
    if (pricingSection) {
        pricingObserver.observe(pricingSection);
    }
});

// Add scroll indicator
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #ff6b35, #f7931e);
        z-index: 10001;
        transition: width 0.3s ease;
    `;
    
    document.body.appendChild(scrollIndicator);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        scrollIndicator.style.width = scrollPercent + '%';
    });
});