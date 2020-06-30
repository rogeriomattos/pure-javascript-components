var banner = document.getElementById('Banner');
            
var currentSlide = 0;

var slides = banner.children;

function nextSlide() {
    if(currentSlide == slides.length - 1)
        currentSlide = 0;
    else 
        currentSlide++;

    changeSlide();
}

function previousSlide() {

    if(currentSlide == 0)
        currentSlide = slides.length - 1;
    else
        currentSlide--;

    changeSlide();
}

function changeSlide() {
    for(var i = 0; i < slides.length; i++)
    {
        if(i == currentSlide)
            slides[i].className = 'current';
        else
            slides[i].className = '';
    }       
}

function init() {
    changeSlide();

    setInterval(nextSlide, 2000);
}

init();
