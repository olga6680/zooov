// @ts-nocheck
window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header'),
        menuItem = document.querySelectorAll('.header__menu_item'),
        hamburger = document.querySelector('.hamburger'),
        scrollHeader = document.querySelector('.header'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    hamburger.addEventListener('click', () => {
        header.classList.toggle('header_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            header.classList.toggle('header_active');
        });
    });

    window.onscroll = function() {
        if (window.pageYOffset > 122) {
            scrollHeader.classList.add('header__scroll');
        } else if (window.pageYOffset < 122) {
            scrollHeader.classList.remove('header__scroll');
        }
    };

    function hideTabContent() {
        if (window.matchMedia("(max-width: 1440px)").matches) {
            tabsContent.forEach(item => {
                item.style.display = 'none';
            });

            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        }
    }

    function showTabContent(i = 0) {
        if (window.matchMedia("(max-width: 1440px)").matches) {
            tabsContent[i].style.display = 'block';
            tabs[i].classList.add('tabheader__item_active');
        }
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('feeding__tabheader-item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});

$(function() {

    $('.about__consist-slider').slick({
        slidesToShow: 2,
        responsive: [{
            breakpoint: 1440,
            settings: {
                arrows: false,
                dots: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });

    $('.sets__slider').slick({
        slidesToShow: 3,
        infinite: true,
        responsive: [{
                breakpoint: 1440,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    centerPadding: '40px'
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '20px'
                }
            }
        ]
    });

    $('.ration__slider').slick({
        slidesToShow: 4,
        infinite: true,
        responsive: [{
                breakpoint: 1440,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 3,
                    centerPadding: '40px'
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '40px'
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '20px'
                }
            }
        ]
    });

});