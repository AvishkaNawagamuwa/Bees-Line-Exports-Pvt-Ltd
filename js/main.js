/**
 * Bees Line Exports - Main JavaScript
 * Premium Interactive Features
 */

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// ==========================================
// Navbar Scroll Effect & Active Link
// ==========================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// Mobile Menu Toggle
// ==========================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('active');

    // Toggle icon
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
});

// Close mobile menu when clicking a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ==========================================
// Product Filtering
// ==========================================
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Filter products with animation
        productCards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
                card.classList.add('hidden');
            }
        });
    });
});

// ==========================================
// Product Details Modal
// ==========================================
const productModal = document.getElementById('product-modal');
const closeModalBtn = document.getElementById('close-modal');
const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

viewDetailsButtons.forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.getAttribute('data-product');
        const description = this.getAttribute('data-description');
        const mg = this.getAttribute('data-mg');
        const benefits = this.getAttribute('data-benefits').split('|');
        const image = this.getAttribute('data-image');

        // Set modal content
        document.getElementById('modal-title').textContent = productName;
        document.getElementById('modal-description').textContent = description;
        document.getElementById('modal-mg').textContent = mg;
        document.getElementById('modal-image').src = image;
        document.getElementById('modal-image').alt = productName;

        // Set benefits
        const benefitsList = document.getElementById('modal-benefits');
        benefitsList.innerHTML = '';
        benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.className = 'flex items-start space-x-3';
            li.innerHTML = `
                <div class="w-6 h-6 bg-gradient-to-br from-honey-gold to-amber-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i class="fas fa-check text-white text-xs"></i>
                </div>
                <span class="text-text-muted">${benefit}</span>
            `;
            benefitsList.appendChild(li);
        });

        // Store product name for inquiry
        document.getElementById('inquiry-btn').setAttribute('data-product', productName);

        // Show modal
        productModal.classList.remove('hidden');
        productModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    });
});

closeModalBtn.addEventListener('click', closeProductModal);

productModal.addEventListener('click', function (e) {
    if (e.target === productModal) {
        closeProductModal();
    }
});

function closeProductModal() {
    productModal.classList.add('hidden');
    productModal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// Inquiry button in modal
document.getElementById('inquiry-btn').addEventListener('click', function () {
    const productName = this.getAttribute('data-product');

    // Close product modal
    closeProductModal();

    // Scroll to contact form
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });

    // Auto-fill product field after a short delay
    setTimeout(() => {
        document.getElementById('product').value = productName;
        document.getElementById('subject').value = 'Product Inquiry';
        document.getElementById('product').focus();
    }, 800);
});

// ==========================================
// Certificate Modal
// ==========================================
const certModal = document.getElementById('cert-modal');
const closeCertModalBtn = document.getElementById('close-cert-modal');
const certCards = document.querySelectorAll('.cert-card');

certCards.forEach(card => {
    card.addEventListener('click', function () {
        const certName = this.getAttribute('data-cert');
        const certDesc = this.getAttribute('data-desc');

        document.getElementById('cert-modal-title').textContent = certName;
        document.getElementById('cert-modal-description').textContent = certDesc;

        certModal.classList.remove('hidden');
        certModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    });
});

closeCertModalBtn.addEventListener('click', closeCertModal);

certModal.addEventListener('click', function (e) {
    if (e.target === certModal) {
        closeCertModal();
    }
});

function closeCertModal() {
    certModal.classList.add('hidden');
    certModal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// ==========================================
// Contact Form Handling
// ==========================================
const contactForm = document.getElementById('contact-form');
const successModal = document.getElementById('success-modal');
const closeSuccessModalBtn = document.getElementById('close-success-modal');
const toast = document.getElementById('toast');

contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);

    // Show loading state
    const btnText = document.getElementById('btn-text');
    const btnIcon = document.getElementById('btn-icon');
    const btnSpinner = document.getElementById('btn-spinner');
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    btnText.textContent = 'Sending...';
    btnIcon.classList.add('hidden');
    btnSpinner.classList.remove('hidden');
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');

    try {
        // Send form data to PHP backend
        const response = await fetch('php/contact.php', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            // Show success modal
            successModal.classList.remove('hidden');
            successModal.classList.add('flex');
            document.body.style.overflow = 'hidden';

            // Reset form
            contactForm.reset();
        } else {
            // Show error toast
            showToast(result.message || 'Failed to send message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        showToast('Network error. Please check your connection and try again.');
    } finally {
        // Reset button state
        btnText.textContent = 'Send Message';
        btnIcon.classList.remove('hidden');
        btnSpinner.classList.add('hidden');
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
    }
});

closeSuccessModalBtn.addEventListener('click', function () {
    successModal.classList.add('hidden');
    successModal.classList.remove('flex');
    document.body.style.overflow = 'auto';
});

successModal.addEventListener('click', function (e) {
    if (e.target === successModal) {
        successModal.classList.add('hidden');
        successModal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }
});

// ==========================================
// Toast Notification
// ==========================================
function showToast(message) {
    const toastMessage = document.getElementById('toast-message');
    toastMessage.textContent = message;

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

// ==========================================
// Smooth Scroll for All Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if it's just '#'
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// Form Validation Enhancement
// ==========================================
const formInputs = contactForm.querySelectorAll('input, select, textarea');

formInputs.forEach(input => {
    // Add visual feedback on blur
    input.addEventListener('blur', function () {
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.classList.add('error-border');
        } else {
            this.classList.remove('error-border');
            if (this.value.trim()) {
                this.classList.add('success-border');
            }
        }
    });

    // Remove error border on input
    input.addEventListener('input', function () {
        this.classList.remove('error-border');
    });

    // Email validation
    if (input.type === 'email') {
        input.addEventListener('blur', function () {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.classList.add('error-border');
            }
        });
    }
});

// ==========================================
// Keyboard Navigation Support
// ==========================================
document.addEventListener('keydown', function (e) {
    // Close modals with ESC key
    if (e.key === 'Escape') {
        if (!productModal.classList.contains('hidden')) {
            closeProductModal();
        }
        if (!certModal.classList.contains('hidden')) {
            closeCertModal();
        }
        if (!successModal.classList.contains('hidden')) {
            successModal.classList.add('hidden');
            successModal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        }
    }
});

// ==========================================
// Lazy Loading for Images (if needed)
// ==========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    // Observe images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// Prevent Multiple Form Submissions
// ==========================================
let formSubmitting = false;

contactForm.addEventListener('submit', function (e) {
    if (formSubmitting) {
        e.preventDefault();
        return false;
    }
});

// ==========================================
// Auto-hide Toast on Click
// ==========================================
toast.addEventListener('click', function () {
    this.classList.remove('show');
});

// ==========================================
// Performance: Debounce Scroll Event
// ==========================================
let scrollTimeout;
window.addEventListener('scroll', function () {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = window.requestAnimationFrame(function () {
        // Scroll-dependent logic here
    });
});

// ==========================================
// Add animations to stats on scroll
// ==========================================
const stats = document.querySelectorAll('.hero-stats > div');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';

            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);

            statsObserver.unobserve(entry.target);
        }
    });
});

stats.forEach(stat => statsObserver.observe(stat));

// ==========================================
// Console Welcome Message
// ==========================================
console.log('%c🐝 Bees Line Exports (Pvt) Ltd', 'font-size: 20px; font-weight: bold; color: #F4B400;');
console.log('%cFrom Nature\'s Wisdom to Everyday Well-Being', 'font-size: 14px; color: #666;');
console.log('%c✨ Premium Herbal Wellness Solutions from Sri Lanka', 'font-size: 12px; color: #999;');

// ==========================================
// Error Boundary for Global Errors
// ==========================================
window.addEventListener('error', function (e) {
    console.error('Global error:', e.error);
    // You can add error reporting here
});

// ==========================================
// Page Load Performance Tracking
// ==========================================
window.addEventListener('load', function () {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`⚡ Page loaded in ${loadTime}ms`);
});
