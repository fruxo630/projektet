// Back to Top button
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 950 || document.documentElement.scrollTop> 950) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Send user back to the top of the page
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}