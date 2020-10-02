//SLIDESHOW

$(function() {
    var sliding_time = 1500;
    var hold_time = 3000;
    var currslide = 1;

    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');

    setInterval(function() {
        $slideContainer.animate({ 'margin-left': '-=820px' }, sliding_time,
            function() {
                currslide++;
                if (currslide == $slides.length) {
                    currslide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
    }, hold_time);

});