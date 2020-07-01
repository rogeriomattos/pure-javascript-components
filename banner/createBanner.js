function createBanner(slideClass, time, autoPlay){
    if(slideClass == undefined){
        console.error('SlideClass is undefined');
        return;
    }
    
    var observers = [];
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
        
        if(slides.length > 0){
            slides[0].style.display = 'block';
            console.log('init');
            
        }

        if(autoPlay)
            start();
    }

    function subscribe(observerFunction) {
        observers.push(observerFunction);
        notifyAll({currentSlide: currentSlide, slidesLength: slides.length});
    }

    function notifyAll(state) {
        for (var i = 0; i < observers.length; i++) {
            observers[i](state);
        }
    }

    function nextSlide() {
        
        if(currentSlide == slides.length - 1)
            currentSlide = 0;
        else 
            currentSlide++;
        
        notifyAll({currentSlide: currentSlide, slidesLength: slides.length});
        changeSlide();
    }
    
    function previousSlide() {
        
        if(currentSlide == 0)
            currentSlide = slides.length - 1;
        else
            currentSlide--;
        
        notifyAll({currentSlide: currentSlide, slidesLength: slides.length});
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

    function start() {
        stop();
        if(time && autoPlay)
            interval = setInterval(nextSlide, time);
    }
    
    function stop() {
        if(autoPlay)
            clearInterval(interval);
    }

    return {
        nextSlide: nextSlide,
        previousSlide: previousSlide,
        stop: stop,
        start: start,
        subscribe: subscribe
    };
}

