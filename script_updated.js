
// Smooth Scroll for Menu Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Handler
document.querySelector('.consult-form form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Bedankt voor het aanvragen van je consult. Wij nemen spoedig contact met je op!');
});

// Highlight Active Menu Item on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Responsive Navbar Fix
window.addEventListener('resize', () => {
    const menu = document.querySelector('.menu');
    if (window.innerWidth < 768) {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
    } else {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'row';
    }
});
