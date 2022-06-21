// @ts-nocheck


window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header'),
        menuItem = document.querySelectorAll('.header__menu_item'),
        hamburger = document.querySelector('.hamburger'),
        scrollHeader = document.querySelector('.header'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');


    // accs = document.querySelectorAll('.accordion__title'),
    // accClick = document.querySelector('.accordion__title'),
    // accContent = document.querySelectorAll('.accordion__content');

    //Menu
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

    //Tabs

    function hideTabContent() {
        if (window.matchMedia("(max-width: 1440px)").matches) {
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });

            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        }
    }

    function showTabContent(i = 0) {
        if (window.matchMedia("(max-width: 1440px)").matches) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');
        }
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    //Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    function openModal() {
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);


    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });


    // function hideAccContent() {
    //     accContent.forEach(item => {
    //         item.classList.add('hide');
    //         item.classList.remove('show', 'fade');
    //     });

    //     accs.forEach(item => {
    //         item.classList.remove('accordion__title_active');
    //     });
    // }

    // function showAccContent(i = 0) {
    //     accContent[i].classList.add('show', 'fade');
    //     accContent[i].classList.remove('hide');
    //     accs[i].classList.add('accordion__title_active');
    // }

    // hideAccContent();
    // showAccContent();

    // accClick.addEventListener('click', (i) => {
    //     if (accClick.classList.contains('accordion__title_active')) {
    //         hideAccContent(i);
    //     } else {
    //         if (accClick.classList.contains('accordion__title')) {

    //             showAccContent(0);

    //         }

    //     }

    // });
});

// Sliders

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