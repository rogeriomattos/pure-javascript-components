function createDebounce(){
    
    var time = null;
    /**
     * fn ()=> void
     * wait number default 1000 
     */
    return function(fn, wait){
                if(wait == undefined)
                    wait = 1000;
                
                clearTimeout(time);

                time = setTimeout(function(){
                    fn();
                }, wait);
            };
}