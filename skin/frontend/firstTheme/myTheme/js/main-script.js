window.onload = function(){
    console.log("Let's go");
    ;(function(){
        var toogleElem = document.querySelectorAll("#narrow-by-list dt");

        if(toogleElem){
            var activeElement = 2;
            var li = 0;

            // toogleElem.forEach(function(item,i){

            for(var i=0; i<toogleElem.length; i++){

                toogleElem[i].onclick = function(){
                    this.nextElementSibling.classList.toggle("slide-toggle");
                }
                li = toogleElem[i].nextElementSibling.querySelectorAll("li").length;
                if(li > activeElement){
                    // this.nextElementSibling.classList.add('slide-toggle');
                    toogleElem[i].nextElementSibling.classList.add('slide-toggle');
                } else{
                    toogleElem[i].classList.add('no-active');
                }
            }

            // });
        }
    })();//filters

    ;(function(){
        var elem = document.querySelector(".js-click");

        if(elem){
            elem.onclick = function(){
                console.log("click");
                if( this.classList.contains("js-fade-in") ){
                    this.classList.add("js-fade-out");
                    this.classList.remove("js-fade-in");
                } else{
                    this.classList.add("js-fade-in");
                    this.classList.remove("js-fade-out");
                }

            };
        }
    })(); //h1 fade

    ;(function($){
        var $frame = $(".widget-viewed .widget-products");

        var $wrap  = $frame.parent();

        // Call Sly on frame

        $frame.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBar: $wrap.find('.scrollbar'),
            scrollBy: 1,
            speed: 300,
            elasticBounds: 1,
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,

            // Buttons
            prev: null,
            next: null
        });

    })(jQuery); // recently carousels

}
