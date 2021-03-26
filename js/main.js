//=================init=================\\

$(document).ready(function ()
{
	AOS.init();
})
//=================Replace To SVG=================\\

$(document).ready(function ()
{
	$(window).on('load', function ()
	{
		$('.svg').svgToInline()
	});
})
//=================loading pages=================\\
$(window).on("load", function ()
{
	$(".loading-screen").fadeOut(1000);
});

//=================menu=================\\
$(document).ready(function ()
{
	$('.hamburger').click(function ()
	{
		$(this).toggleClass('open');
		$('.menu-mobile').slideToggle(300);
	});

	// accordion
	$('.btn-sub').on('click', function (event)
	{
		event.preventDefault()
		$(this).toggleClass('active')
		$('.btn-sub').not($(this)).removeClass('active')
		$(this).next().slideToggle()
		$('.menu-mobile .sub-menu').not($(this).next()).slideUp()
	})

});

// menu fixed
function menuFixed()
{
	const menu = document.querySelector('.header-desktop')
	const menuTablet = document.querySelector('.header-tablet')
	window.addEventListener('scroll', () =>
	{
		if (window.pageYOffset >= 330) {
			menu.classList.add('active')
			menuTablet.classList.add('active')
		} else {
			menu.classList.remove('active')
			menuTablet.classList.remove('active')
		}
	})
}
menuFixed()

//=================back to top=================\\
function backToTop()
{
	let btnScrollTop = document.querySelector('.back-to-top')
	window.addEventListener('scroll', () =>
	{
		if (window.pageYOffset >= 700 || window.scrollTo >= 700) {
			btnScrollTop.classList.add('active')
		} else {
			btnScrollTop.classList.remove('active')
		}
	})
	btnScrollTop.addEventListener('click', () =>
	{
		window.scroll({
			'top': 0,
			behavior: 'smooth'
		})
	})
}
backToTop()

//=================modal =================\\
function showModal()
{
	const button = document.querySelectorAll('.action .buy')
	const modal = document.querySelector('.modal')
	const overlay = modal.querySelector('.overlay')
	button.forEach((e, index) =>
	{
		e.addEventListener('click', (element) =>
		{
			element.preventDefault()
			modal.classList.add('active')
			document.querySelector('body').classList.add('overflow')
		})
	})
	overlay.addEventListener('click', () =>
	{
		close()
	})
	window.addEventListener('keyup', (e) =>
	{
		if (e.keyCode === 27) {
			close()
		}
	})
	function close()
	{
		modal.classList.remove('active')
		document.querySelector('body').classList.remove('overflow')
	}
}
showModal()
// button hover 
const buttons = document.querySelectorAll(".btn-hover");

buttons.forEach((button) =>
{
	const div = button.querySelector("span");
	["mouseenter", "mouseleave"].forEach((event) =>
	{
		button.addEventListener(event, (e) =>
		{
			div.style.left = `${e.offsetX}px`;
			div.style.top = `${e.offsetY}px`;
		});
	});
});
// tab
$(document).ready(function ()
{
	$('.tab ul li').on('click', function ()
	{
		let attr = $(this).attr('data-toggle');
		$('#' + attr).fadeIn(800).siblings().hide();
	})
	$('.shirt-section .tab ul li').on('click', function () {
		$(this).addClass('active');
		$('.shirt-section .tab ul li').not($(this)).removeClass('active');
	})
	$('.trousers-section .tab ul li').on('click', function () {
		$(this).addClass('active');
		$('.trousers-section .tab ul li').not($(this)).removeClass('active');
	})
	$('.accessories-section  .tab ul li').on('click', function () {
		$(this).addClass('active');
		$('.accessories-section  .tab ul li').not($(this)).removeClass('active');
	})
})


//=========================================\\
//=================carousel=================\\
//===========================================\\

$(document).ready(function ()
{
	let $carousel = $('.main-carousel');
	$carousel.flickity({
		// options
		cellAlign: 'left',
		contain: false,
		pageDots: false,
		prevNextButtons: false,
		friction: 0.6,
		wrapAround: true,
		fullscreen: true,
		autoPlay: 5000
	});
		$('button.btn-prev').on('click', function ()
		{
			$carousel.flickity('previous');
		})
		$('button.btn-next').on('click', function ()
		{
			$carousel.flickity('next');
		})
})

$(document).ready(function ()
{
	let $carousel = $('.product-carousel');
	$carousel.flickity({
		// options
		cellAlign: 'left',
		contain: false,
		pageDots: false,
		prevNextButtons: true,
		wrapAround: true,
	});
})
$(document).ready(function ()
{
	let $carousel = $('.banner-mobile .banner-mobile__carousel');
	$carousel.flickity({
		// options
		cellAlign: 'left',
		contain: false,
		pageDots: false,
		prevNextButtons: true,
		friction: 0.3,
		wrapAround: true,
		fullscreen: true,
		autoPlay: 4000
	});
})
$(document).ready(function ()
{
	let $carousel = $('.product-mobile__carousel');
	$carousel.flickity({
		// options
		cellAlign: 'left',
		contain: false,
		pageDots: false,
		prevNextButtons: true,
		wrapAround: true,
		fullscreen: true,
		autoPlay: 4000
	});
})
