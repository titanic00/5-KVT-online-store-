// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


//========================================================================================================================================================

const catalogButton = document.querySelector('.bottom-header__catalog');
const catalogNavigation = document.querySelector('.menu-bottom-header');

const catalogMenu = document.querySelectorAll('[class*=list-menu-bottom__link_]');
const catalogSubmenu = document.querySelectorAll('[class*=submenu-menu-bottom__item_]');

const burgerMenu = document.querySelector('.icons-top-header__button');

const submenuExit = document.querySelector('.submenu-menu-bottom__button');

// open and close catalog menu
catalogButton.addEventListener('click', () => {
    if (catalogNavigation.classList.contains('menu-bottom-header_submenu-open'))
        catalogNavigation.classList.remove('menu-bottom-header_submenu-open');
    catalogNavigation.classList.toggle('menu-bottom-header_open');
});

// open submenu
catalogMenu.forEach(el => el.addEventListener('click', (event) => {
    catalogNavigation.classList.add('menu-bottom-header_submenu-open');
    const getClass = event.target.classList[event.target.classList.length - 1];
    const submenuNumber = getClass[getClass.length - 1]

    if (catalogSubmenu[submenuNumber]) {

        for (let i = 0; i < catalogSubmenu.length; i++) {
            catalogSubmenu[i].classList.remove('submenu-menu-bottom__item_active');
        }

        catalogSubmenu[submenuNumber].classList.add('submenu-menu-bottom__item_active');
    }
}));

// close submenu if you click on burger
burgerMenu.addEventListener('click', () => {
    catalogNavigation.classList.remove('menu-bottom-header_submenu-open');
});

submenuExit.addEventListener('click', () => {
    catalogNavigation.classList.remove('menu-bottom-header_submenu-open');
    for (let i = 0; i < catalogSubmenu.length; i++) {
        catalogSubmenu[i].classList.remove('submenu-menu-bottom__item_active');
    }
})

//========================================================================================================================================================

const advantagesList = document.querySelectorAll('.advantages-page__item');

if (window.innerWidth < 575.98) {
    advantagesList.forEach(el => el.classList.toggle('swiper-slide'));
}

//========================================================================================================================================================

// open filter menu

const openFilterBtn = document.querySelector('.view-page__filter-button');
const filter = document.querySelector('.products-catalog__filter');

if (openFilterBtn) {
    openFilterBtn.addEventListener('click', () => {
        filter.classList.toggle('products-catalog__filter_open');
    })
}

//========================================================================================================================================================

// yandex maps
ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
        center: [55.86075156885886, 37.37243999999997],
        zoom: 10
    });

    let placemark_1 = new ymaps.Placemark([55.86075156885886, 37.37243999999997], {
        balloonContentBody: "125310, Россия, г Москва, ул Муравская, дом 42, строение 1"
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../../img/contacts/map/icon.png',
        iconImageSize: [30, 30],
        iconImageOffset: [0, 0],
        clusterDisableClickZoom: true
    });
    map.geoObjects.add(placemark_1);

    let placemark_2 = new ymaps.Placemark([55.69805246076385, 37.47252274703783], {
        balloonContentBody: "125310, Россия, г Москва, ул Муравская, дом 42, строение 1"
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../../img/contacts/map/icon.png',
        iconImageSize: [30, 30],
        iconImageOffset: [0, 0]
    });
    map.geoObjects.add(placemark_2);

    let placemark_3 = new ymaps.Placemark([55.67865812208224, 37.644184123990954], {
        balloonContentBody: "125310, Россия, г Москва, ул Муравская, дом 42, строение 1"
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../../img/contacts/map/icon.png',
        iconImageSize: [30, 30],
        iconImageOffset: [0, 0]
    });
    map.geoObjects.add(placemark_3);

    let placemark_4 = new ymaps.Placemark([55.756951945225566, 37.69911576461594], {
        balloonContentBody: "125310, Россия, г Москва, ул Муравская, дом 42, строение 1"
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../../img/contacts/map/icon.png',
        iconImageSize: [30, 30],
        iconImageOffset: [0, 0]
    });
    map.geoObjects.add(placemark_4);

    let placemark_5 = new ymaps.Placemark([55.8327696318319, 37.61534501266282], {
        balloonContentBody: "125310, Россия, г Москва, ул Муравская, дом 42, строение 1"
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../../img/contacts/map/icon.png',
        iconImageSize: [30, 30],
        iconImageOffset: [0, 0]
    });
    map.geoObjects.add(placemark_5);

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

//========================================================================================================================================================

const deliveryItemsList = document.querySelectorAll('.delivery-main__item');
const controllsTitle = document.querySelectorAll('.delivery-main__controlls-title');
const eventTriggerPrev = document.querySelectorAll('.delivery-main__prev');
const eventTriggerNext = document.querySelectorAll('.delivery-main__next');

if (window.innerWidth < 767.98) {
    deliveryItemsList.forEach(el => el.classList.toggle('swiper-slide'));
    const currentTitle = document.querySelector('.item-delivery__title');

    controllsTitle.forEach(el => el.innerHTML = currentTitle.innerHTML)
}

eventTriggerNext.forEach(el => el.addEventListener('click', () => {
    const nextSlide = document.querySelector('.swiper-slide-next');

    if (!(nextSlide.querySelector('.item-delivery__title') === null)) {
        controllsTitle.forEach(el => el.innerHTML = nextSlide.querySelector('.item-delivery__title').innerHTML)
    }
    else
        controllsTitle.forEach(el => el.innerHTML = '');

}));

eventTriggerPrev.forEach(el => el.addEventListener('click', () => {
    const prevSlide = document.querySelector('.swiper-slide-prev');

    if (!(prevSlide.querySelector('.item-delivery__title') === null))
        controllsTitle.forEach(el => el.innerHTML = prevSlide.querySelector('.item-delivery__title').innerHTML);
    else
        controllsTitle.forEach(el => el.innerHTML = '');
}));