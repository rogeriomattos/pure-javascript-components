function createBanner(slideClass, time, autoPlay){
    if(slideClass == undefined){
        console.error('SlideClass is undefined');
        return;
    }
    
    var currentSlide;
    var slides;
    var interval;
    
    init();

    function init(){
        if(autoPlay == undefined)
            autoPlay = true;
        
        currentSlide = 0;

        slides = document.getElementsByClassName(slideClass);

        interval = null;
    
        if(slides.length > 0)
            slides[0].style.display = 'block';
    
        if(autoPlay)
            start();
    }

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
                slides[i].style.display = 'block';
            else
                slides[i].style.display = 'none';
        }       
    }

    function start(){
        if(time && autoPlay)
            interval = setInterval(nextSlide, time);
    }
    
    function pause(){
        if(autoPlay)
            clearInterval(interval);
    }

    return {
        nextSlide: nextSlide,
        previousSlide: previousSlide,
        pause: pause,
        start: start,
        currentSlide: function(){ return currentSlide;}
    };
}

var banner = createBanner('slide', 1000);

document.getElementById('banner').addEventListener('mouseenter', banner.pause);
document.getElementById('banner').addEventListener('mouseleave', banner.start);

document.getElementById('next').addEventListener('mouseenter', banner.pause);
document.getElementById('next').addEventListener('mouseleave', banner.start);
document.getElementById('next').addEventListener('click', banner.nextSlide);

document.getElementById('previous').addEventListener('mouseenter', banner.pause);
document.getElementById('previous').addEventListener('mouseleave', banner.start);
document.getElementById('previous').addEventListener('click', banner.previousSlide);
