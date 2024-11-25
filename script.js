const navItems = document.querySelectorAll('.nav-link');

navItems.forEach(link => {
    link.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});