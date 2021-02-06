// Toggle content for trip recommendations cards
// Content is hidden when page is loaded, when button is pressed the content is shown
document.addEventListener('DOMContentLoaded', toggleContent());
document.addEventListener('DOMContentLoaded', hideContent());


function hideContent() {
    $('.card-body').children('p').hide();
};

function toggleContent() {
    $(".card-button").click(function () {
        $(this).siblings('p').slideToggle('slow');
    });
};

// Adding a button that allows user to scroll to top
// Found on Codepen.io, linked in README file
$(document).ready(function(){
	$(window).scroll(function () {
            // when window is scrolled down 20px the buttons shows
			if ($(this).scrollTop() > 20) {
				$('#scroll-up').fadeIn();
			} else { // button is hidden 
				$('#scroll-up').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#scroll-up').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});

// Smooth scrolling to anchor point
// Followed along with a tutorial on Medium.com, linked in README file
// When link is clicked, page scrolls to that point. Offset included so fixed navbar does not cover part of section that contains the header
$("#home-link").click(function () {
    $('html, body').animate({
        scrollTop: $("#home").offset().top - 66
    }, 800);
    return false;
});

$("#about-link").click(function () {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 66
    }, 800);
    return false;
});

$("#recommendation-link").click(function () {
    $('html, body').animate({
        scrollTop: $("#recommendations").offset().top - 112
    }, 800);
    return false;
});

$("#contact-link").click(function () {
    $(' html,body').animate({
        scrollTop: $("#contact").offset().top - 112
    }, 800);
    return false;
});

// Adding interactive calendar on contact form for dates of travel
// From JqueryUI, linked in README file
$(function() {
    $( ".datepicker" ).datepicker();
} );

// Collapse the burger menu when an item is clicked
// From Stackoverflow, linked in README file
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});