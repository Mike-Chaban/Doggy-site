var slideIndex3 = 1;
showSlides(slideIndex3);

// Next/previous controls
function plusSlides3(n3) {
    showSlides(slideIndex3 += n3);
}

// Thumbnail image controls
function currentSlide3(n3) {
    showSlidesVyazkaVideo(slideIndex3 = n3);
}

function showSlidesVyazkaVideo(n) {
    var i3;
    var slides3 = document.getElementsByClassName("mySlides3");
    var dots3 = document.getElementsByClassName("dot3");
    if (n3 > slides3.length) {slideIndex = 1}
    if (n3 < 1) {slideIndex = slides3.length}
    for (i3 = 0; i3 < slides3.length; i3++) {
        slides3[i3].style.display = "none";
    }
    for (i3 = 0; i3 < dots3.length; i3++) {
        dots3[i3].className = dots3[i3].className.replace(" active", "");
    }
    dots3[slideIndex3-1].className += " active";
}