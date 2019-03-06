$(document).ready(function() {

	// Опеделяем переменные
	var navToggleButton = $('#navigation__button');
	var navToggleIcon = $('.navigation__toggle .fa');
	var navBlock = $('.navigation__list');
	var navBlockOpen = 'navigation__list--open';
	var navLink = $('.navigation__list a');

	// События по клику на иконку
	navToggleButton.on('click', function(e){
		e.preventDefault();
		navBlock.toggleClass(navBlockOpen);
		navButtonToggle();
	})

	// События по клику на ссылки
	navLink.on('click', function(){
		if ( navBlock.hasClass(navBlockOpen) ) {
			navButtonToggle();
		}
		navBlock.removeClass(navBlockOpen);
	})

	// Функция для анимации иконки
	function navButtonToggle(){
		if ( navToggleButton.hasClass("active")) {
			navToggleButton.removeClass("active");
		} else {
			navToggleButton.addClass("active");
		}
	}

	//Вызов слайдера

	$("#slider-person").owlCarousel({
		singleItem: true,
		navigation: true,
		theme: "slider-person-theme",
		navigationText : ["",""],
		slideSpeed: 600
	});




	//Вызов слайдера

	$("#slider-team").owlCarousel({
		navigation: true,
		theme: "slider-team-theme",
		slideSpeed: 600
	});



	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});

}); 