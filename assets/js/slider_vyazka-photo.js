// var slideIndex = 1;
// showSlides(slideIndex);
//
// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
//
// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
// }
var slideIndex2 = 0;
showSlidesVyazkaPhoto();

function showSlidesVyazkaPhoto() {
    var i2;
    var slides2 = document.getElementsByClassName("mySlides2");
    for (i2 = 0; i2 < slides2.length; i2++) {
        slides2[i2].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides2.length) {slideIndex2 = 1}
    slides2[slideIndex2-1].style.display = "block";
    setTimeout(showSlidesVyazkaPhoto, 3000); // Change image every 2 seconds
}