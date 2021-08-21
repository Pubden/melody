$(document).ready(() => {
    $('#07').addClass('floor-in');
    
    $('svg path').mouseover(function() {
        $('svg path').removeClass('floor-in');
        let floor = $(this).attr('id');
        $('.floor-number').text(floor);
        $(this).addClass('floor-in');
    });

    $('.floor-up').click(function() {
        if(Number($('.floor-number').text()) < 18) {
            $('svg path').removeClass('floor-in');
            let counter = Number($('.floor-number').text()) + 1;
            if(counter < 10) {
            counter = "0" + counter;
            }
            $('.floor-number').text(counter);
            $('#' + counter).addClass('floor-in');
        }
    });

    $('.floor-down').click(function() {
        if(Number($('.floor-number').text()) > 2) {
            $('svg path').removeClass('floor-in');
            let counter = Number($('.floor-number').text()) -1;
            if(counter < 10) {
            counter = "0" + counter;
            }
            $('.floor-number').text(counter);
            $('#' + counter).addClass('floor-in');
        }
    });
});