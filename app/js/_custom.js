document.addEventListener("DOMContentLoaded", function() {


// Slider
$('.slider').slick({
	slidesToShow: 1,
	autoplay: true,
  autoplaySpeed: 4000,
	infinite: true,
	arrows: false,
	dots: true
});

// CARD SLIDER
$('.card__slider').slick({
	slidesToShow: 1,
	arrows: false,
	dots: true
});

// SELECT
$('select').selectize({
	create: true
});


// MODAL START

// Get modal element
let modal = document.getElementById('my-modal')
// Get open modal button
let modalBtn = document.getElementById('modal-btn')
let modalBtn2 = document.getElementById('modal-btn2')
// Get close button
let closeBtn = document.getElementById('close-btn')

// Listener for click
modalBtn.addEventListener('click', openModal)
modalBtn2.addEventListener('click', openModal)

// Listener for close
closeBtn.addEventListener('click', closeModal)

// Listener for close
window.addEventListener('click', clickOutside)

// Function to open modal
function openModal(e) {
	modal.style.display = 'block'
}
// Function to close modal
function closeModal() {
	modal.style.display = 'none'
}
// Function to close modal if outside click
function clickOutside(e) {
	if(e.target == modal){
		modal.style.display = 'none'
	}
}
// MODAL END


// Watch all button 
var modalBody = document.querySelector('.modal-body')
var mySpeed = 500;
var allHeight = modalBody.scrollHeight;
var startHeight = modalBody.clientHeight;
$('#my-modal').css('display', 'none')

$('.modal-footer__open').click(function(e){
	e.preventDefault()
	$('.modal-body').animate({height:allHeight+20}, mySpeed);
	$('.modal-footer').toggleClass('active')
});
$('.modal-footer__close').click(function(e){
	e.preventDefault()
	$('.modal-body').animate({height:startHeight}, mySpeed);
	$('.modal-footer').toggleClass('active')
});

// mobile buttons
const mobileOpenBtn = document.querySelector('.header__mobile')
const mobileCloseBtn = document.querySelector('.menu__item--close')
const mobileMenu = document.querySelector('.header .menu')

mobileOpenBtn.addEventListener('click', function(){
	mobileMenu.classList.add('active')
})
mobileCloseBtn.addEventListener('click', function(){
	mobileMenu.classList.remove('active')
})


// modal click
modalItemButton = document.getElementsByClassName('modal-body__item')
modalGeneralCity = document.querySelector('.modal-header__city')
for(let i = 0; i < modalItemButton.length; i++){
	modalItemButton[i].addEventListener('click', function(e){
		e.preventDefault()
		modalGeneralCity.innerHTML = this.children[1].innerHTML
	})
}


// Fixed top button
if($(window).width() > 1200) {
// Fixed menu
  jQuery(function($) {
	        $(window).scroll(function(){
	            if($(this).scrollTop()>140){
	                $('.back_to_top').addClass('active');
	            }
	            else if ($(this).scrollTop()<140){
	                $('.back_to_top').removeClass('active');
	            }
	        });
	    });

$(function() {
    $('.back_to_top').click(function(){
       $('html, body').animate({scrollTop:0}, 'slow');
   });
});

} 

});
