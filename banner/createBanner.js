function createBanner(slideClass, time, autoPlay){
    if(slideClass == undefined){
        console.error('SlideClass is undefined');
        return;
    }
    
    var observers = [];

    if(autoPlay == undefined)
        autoPlay = true;

    var currentSlide = 0;
    var slides = document.getElementsByClassName(slideClass);
    var interval = null;

    function subscribe(observerFunction) {
        observers.push(observerFunction);
        notifyAll({currentSlide: currentSlide, slides: slides});
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
        
        notifyAll({currentSlide: currentSlide, slides: slides});
        
    }
    
    function previousSlide() {
        
        if(currentSlide == 0)
            currentSlide = slides.length - 1;
        else
            currentSlide--;
        
        notifyAll({currentSlide: currentSlide, slides: slides});
        
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

