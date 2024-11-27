const navItems = document.querySelectorAll('.nav-link');

navItems.forEach(link => {
    link.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});

const slideRight = {
    distance: '200%',
    delay: '800',
    reset: true,
    origin: 'left',
    opacity: 0
}

ScrollReveal().reveal('.landing-profile', {delay: 600, reset: true});
ScrollReveal().reveal('.intro', slideRight);