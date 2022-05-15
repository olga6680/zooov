window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header'),
        menuItem = document.querySelectorAll('.header__menu_item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        header.classList.toggle('header_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            header.classList.toggle('header_active');
        })
    })
});