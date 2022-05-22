// @ts-nocheck
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
        });
    });

    window.onscroll = function() {
        if (window.pageYOffset > 122) {
            scrollHeader.classList.add('header__scroll');
        } else if (window.pageYOffset < 122) {
            scrollHeader.classList.remove('header__scroll');
        }
    };
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