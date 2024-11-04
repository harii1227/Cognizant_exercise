$(document).ready(function(){
    // Initial counter value
    let counter = 0;

    // Update the displayed counter value
    function updateCounter() {
        $("#counterDisplay").text(counter);
    }

    // Decrease the counter when the '-' button is clicked
    $("#decreaseButton").click(function(){
        counter--;
        updateCounter();
    });

    // Increase the counter when the '+' button is clicked
    $("#increaseButton").click(function(){
        counter++;
        updateCounter();
    });
});
