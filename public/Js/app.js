// siteMenu();
// function siteMenu() {
//
//     let submenus = document.querySelectorAll('nav.app.scss .submenu >a');
//     submenus.forEach(function (item) {
//         item.addEventListener('click', function (e) {
//             this.parentNode.classList.toggle('opened');
//             this.querySelectorAll('.submenu')
//                 .forEach((sub) => sub.parentNode.classList.remove('opened'));
//             e.stopPropagation();
//         })
//     });
// }
//
let burger = document.querySelector('#burger-button');
let body = document.querySelector('body');
let nav = document.querySelector('nav.main');
let timeout;

nav.addEventListener('mouseover', function () {
    clearTimeout(timeout);
});

nav.addEventListener('mouseout', function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        body.classList.remove('menu-open');
}, 2000);
});
burger.addEventListener('click', function () {
     body.classList.toggle('menu-open');
     console.log('1');
});

// // работает по нажатию на бургер
//
// let burger = document.querySelector('#burger-button');
// let body = document.querySelector('body');
//
//
//
//
// // функция которая покажет меню при наведении мыши
//
// window.onload = function() {
//
//     let menuShow =()=> {
//         document.querySelector('.app.scss').style.marginLeft = 0;
//     }
//     let menuHide = ()=> {
//         document.querySelector('.app.scss').style.marginLeft = '-320px';
//     }
//     document.querySelector('.app.scss').onmouseover = menuShow;
//     document.querySelector('.app.scss').onmouseout = menuHide;
// }
//
//
// let burger = document.querySelector('#burger-button');
// let body = document.querySelector('body');
//
// burger.addEventListener('click', function () {
//     body.classList.toggle('menu-open');
// });
//
//
// //после двух секунд меню прячется
//
// let burger = document.querySelector('#burger-button');
// let body = document.querySelector('body');
// let nav = document.querySelector('nav.app.scss');
// let timeout;
//
// nav.addEventListener('mouseover', function () {
//     clearTimeout(timeout);
// });
//
// nav.addEventListener('mouseout', function () {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//         body.classList.remove('menu-open');
//     }, 2000);
// });
//
// burger.addEventListener('click', function () {
//     body.classList.toggle('menu-open');
//     burger.classList.toggle('close-button');
// });
//
//
//
//
// siteMenu(); //функция для открвывания вложенных ul
//
// function siteMenu() {
//     //меню сйта
//     let submenus = document.querySelectorAll('nav.app.scss .submenu >a');
//     submenus.forEach(function (item) {
//         item.addEventListener('click', function (e) {
//             this.parentNode.classList.toggle('opened');
//             this.querySelectorAll('.submenu')
//                 .forEach((sub) => sub.parentNode.classList.remove('opened'));
//             e.stopPropagation();
//         })
//     });
// }

let fixedSidebar = document.getElementsByClassName('right-sidebar')[0];
let mainContent = document.getElementsByClassName('content')[0];

window.onscroll = function () {
    let contentPosition = window.pageYOffset + mainContent.getBoundingClientRect().top;
    if (contentPosition < window.pageYOffset) {
        fixedSidebar.style.position = 'fixed';
        fixedSidebar.style.top = 20 + 'px';
        fixedSidebar.style.right = 20 + 'px';
        fixedSidebar.style.height = document.documentElement.clientHeight - 40 + 'px';
        mainContent.style.marginRight = fixedSidebar.clientWidth + 37 +'px';
    } else {
        fixedSidebar.style.position = 'static';
        fixedSidebar.style.height = 900 + 'px';
        mainContent.style.marginRight = 'auto';
    }
};







