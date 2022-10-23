/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Grid, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
//import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.bottom-header__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.bottom-header__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 7.5,
			slidesPerGroup: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			watchSlidesProgress: true,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				nextEl: '.controlls-slider__next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.main-block__swiper')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.main-block__swiper', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 15,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.controlls-swiper-main__arrow-prev',
				nextEl: '.controlls-swiper-main__arrow-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.slider-products_top')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-products_top', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Grid],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			slidesPerGroup: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.header-products__prev_top',
				nextEl: '.header-products__next_top',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					autoHeight: false,
					spaceBetween: 15,
					slidesPerView: 2,
					slidesPerGroup: 2,

					grid: {
						rows: 2,
						fill: 'row'
					},
				},
				768: {
					autoHeight: false,
					spaceBetween: 15,
					slidesPerView: 2,
					slidesPerGroup: 2,

					grid: {
						rows: 2,
						fill: 'row'
					},
				},
				992: {
					autoHeight: false,
					spaceBetween: 20,
					slidesPerView: 3,
					grid: {
						rows: 2,
						fill: 'row'
					},
				},
				1179: {
					autoHeight: false,
					slidesPerView: 4,
					grid: {
						rows: 2,
						fill: 'row'
					},
				},
				1180: {
					autoHeight: true,
					spaceBetween: 30,
					slidesPerView: 4,
					grid: {
						rows: 1,
						fill: 'row',
					},
				},
			},
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.slider-products_new')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-products_new', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Grid],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			slidesPerGroup: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.header-products__prev_new',
				nextEl: '.header-products__next_new',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					autoHeight: false,
					spaceBetween: 15,
					slidesPerView: 2,
					slidesPerGroup: 2,

					grid: {
						rows: 2,
						fill: 'row'
					},
				},
				768: {
					autoHeight: false,
					spaceBetween: 15,
					slidesPerView: 2,
					slidesPerGroup: 2,

					grid: {
						rows: 2,
						fill: 'row'
					},
				},
				992: {
					autoHeight: false,
					spaceBetween: 20,
					slidesPerView: 3,
					grid: {
						rows: 2,
						fill: 'row'
					},
				},
				1179: {
					autoHeight: false,
					slidesPerView: 4,
					grid: {
						rows: 2,
						fill: 'row'
					},
				},
				1180: {
					autoHeight: true,
					spaceBetween: 30,
					slidesPerView: 4,
					grid: {
						rows: 1,
						fill: 'row',
					},
				},
			},
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.slider-products_card')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-products_card', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			slidesPerGroup: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.header-products__prev_card',
				nextEl: '.header-products__next_card',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					autoHeight: false,
					spaceBetween: 15,
					slidesPerView: 2,
				},
				768: {
					autoHeight: false,
					spaceBetween: 15,
					slidesPerView: 2,
				},
				992: {
					autoHeight: false,
					spaceBetween: 20,
					slidesPerView: 3,
				},
				1179: {
					autoHeight: false,
					slidesPerView: 4,
				},
				1180: {
					autoHeight: true,
					spaceBetween: 30,
					slidesPerView: 4,
				},
			},
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.advantages-page__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.advantages-page__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 15,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			// Пагинация
			pagination: {
				el: '.advantages-page__controlls',
				clickable: true
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.products-catalog__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.products-catalog__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Grid],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 30,
			autoHeight: false,
			speed: 800,
			grid: {
				rows: 3,
				fill: 'row'
			},
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.header-products__prev_new',
				nextEl: '.header-products__next_new',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					spaceBetween: 15,
					slidesPerView: 2,
					slidesPerGroup: 2,

					grid: {
						rows: 4,
						fill: 'row'
					},
				},
				768: {
					spaceBetween: 15,
					slidesPerView: 2,
					slidesPerGroup: 2,

					grid: {
						rows: 4,
						fill: 'row'
					},
				},
				992: {
					spaceBetween: 20,
					slidesPerView: 3,
					grid: {
						rows: 4,
						fill: 'row'
					},
				},
				992: {
					slidesPerView: 2,
					grid: {
						rows: 4,
						fill: 'row'
					},
				},
				993: {
					spaceBetween: 30,
					slidesPerView: 3,
					grid: {
						rows: 3,
						fill: 'row',
					},
				},
			},
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.comments-feedback__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.comments-feedback__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 15,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.comments-feedback__prev',
				nextEl: '.comments-feedback__next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.addresses-contacts__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.addresses-contacts__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.addresses-contacts__prev',
				nextEl: '.addresses-contacts__next',
			},

			// Брейкпоинты
			breakpoints: {
				200: {
					slidesPerView: 1,
					pagination: {
						el: '.addresses-contacts__controlls',
						clickable: true,
					},
				},
				480: {
					slidesPerView: 2,
					pagination: {
						el: '.addresses-contacts__controlls',
						clickable: true,
					},
				},
				768: {
					slidesPerView: 2,
					pagination: {
						el: '.addresses-contacts__controlls',
						clickable: true,
					},
				},
				991: {
					slidesPerView: 2,
					pagination: {
						el: '.addresses-contacts__controlls',
						clickable: true,
					},
				},
				992: {
					slidesPerView: 3,
				},
			},
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.delivery-main__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.delivery-main__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.delivery-main__prev',
				nextEl: '.delivery-main__next',
			},

			// Брейкпоинты
			/*breakpoints: {
				200: {
					slidesPerView: 1,
					pagination: {
						el: '.addresses-contacts__controlls',
						clickable: true,
					},
				},
				480: {
					slidesPerView: 2,
					pagination: {
						el: '.addresses-contacts__controlls',
						clickable: true,
					},
				},
				768: {
					slidesPerView: 2,
					pagination: {
						el: '.addresses-contacts__controlls',
						clickable: true,
					},
				},
				991: {
					slidesPerView: 2,
					pagination: {
						el: '.addresses-contacts__controlls',
						clickable: true,
					},
				},
				992: {
					slidesPerView: 3,
				},
			},*/
			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});