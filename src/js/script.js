window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header'),
        menuItem = document.querySelectorAll('.header__menu_item'),
        hamburger = document.querySelector('.hamburger'),
        scrollHeader = document.querySelector('.header');

    hamburger.addEventListener('click', () => {
        header.classList.toggle('header_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            header.classList.toggle('header_active');
        })
    })

    window.onscroll = function() {
        if (window.pageYOffset > 122) {
            scrollHeader.classList.add('header__scroll');
        } else if (window.pageYOffset < 122) {
            scrollHeader.classList.remove('header__scroll');
        }
    }
});