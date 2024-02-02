$(function(){

    // preload audio
    var toast = new Audio('toast.wav');
    $('.code').on('click', function(e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();

        var discountCode = $(this).data('name');
        $('#liveToast').find('.toast-body').html('Discount Code: ' + discountCode);
        $('#liveToast').toast({ autohide: false }).toast('show');
    });

    $(document).on("keydown", function(e) {
        if(e.key == "Escape") {
            $('#liveToast').toast('hide'); // Close the toast when Escape is pressed
        }
    });
});