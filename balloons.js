$(function () {

    $(document).ready(function(){
        const animations = ["bounce", "flash", "pulse", "rubberBand", "shakeX", "shakeY", "headShake", "swing", "tada", "wobble", "jello", "heartBeat"];
        let randomNum = Math.floor(Math.random() * animations.length);
        $("#random_animation").addClass("animate__" + animations[randomNum]);
    })
    
    $('#birthday').pickadate({ format: 'mmmm, d' });
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        $('#balloonToast').toast({ autohide: false }).toast('hide');
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    $("#submit").on("click", function(e) {
        let allUnchecked = true;
        $('.form-check-input').each(function () {
            if($(this).prop("checked")) {
                allUnchecked = false;
                return false;
            }
        })
        
        if(allUnchecked) {
            $('#balloonToast').toast({ autohide: false }).toast('show');
        }
    });

    $(document).on("keydown", function(e) {
        if(e.key == "Escape") {
            $('#balloonToast').toast('hide'); // Close the toast when Escape is pressed
        }
    });

    $("input[name='balloonOption']").on("change", function() {
        let selectedOption = $("input[name='balloonOption']:checked").attr("id");
        
        if (selectedOption === "allBalloonsChecked") {
            $('.form-check-input').prop('checked', true);
            $('#redImg').removeClass().addClass('balloon-img animate__animated animate__bounceInDown');
            $('#greenImg').removeClass().addClass('balloon-img animate__animated animate__bounceInDown');
            $('#blueImg').removeClass().addClass('balloon-img animate__animated animate__bounceInDown');
        } else if (selectedOption === "allBalloonsUnchecked") {
            $('.form-check-input').prop('checked', false);
            $('#redImg').removeClass().addClass('balloon-img animate__animated animate__bounceOutUp');
            $('#greenImg').removeClass().addClass('balloon-img animate__animated animate__bounceOutUp');
            $('#blueImg').removeClass().addClass('balloon-img animate__animated animate__bounceOutUp');
        }
    });

    $('.form-check-label').on('mouseenter', function() {
        var balloonColor = $(this).text();
        var h1 = $('h1');
        
        switch(balloonColor) {
            case 'Red balloons':
                h1.css('color', 'red');
                break;
            case 'Green balloons':
                h1.css('color', 'green');
                break;
            case 'Blue balloons':
                h1.css('color', 'blue');
                break;
        }
    });
    
});
