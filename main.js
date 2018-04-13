let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length)
        slideIndex = 1;
    if (n == 0)
        slideIndex = slides.length;
    if (n < slideIndex)
        slideIndex = slides.length;

    for( i = 0; i < slides.length; i++ ) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
}



function getID(temp) {

    if( temp == "homeID" )
        scrollToDiv("#section1");

    if( temp == "discoverID" )
        scrollToDiv("#section2");
    
    if( temp == "galleryID" )
        scrollToDiv("#section4");
    
    if( temp == "aboutID" )
        scrollToDiv("#section5");
    
    
    
}

function scrollToDiv(id) {
    $('html,body').animate({
        scrollTop:$(id).offset().top
        },2000);

}