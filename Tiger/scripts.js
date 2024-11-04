$(document).ready(function() {
    // Apply green border when an animal image is clicked
    $('.circle').on('click', function() {
        $('.circle').removeClass('selected'); // Remove green border from other images
        $(this).addClass('selected'); // Apply green border to the clicked image
    });
});
