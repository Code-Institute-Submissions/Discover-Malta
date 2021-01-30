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


// Adding a button that allows user to scroll to top, tutorial from W3Schools. Linked in README
//Get the button:
mybutton = document.getElementById("scroll-up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollUp() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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