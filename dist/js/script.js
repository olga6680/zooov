window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        header.classList.toggle('header_active');
    });
});