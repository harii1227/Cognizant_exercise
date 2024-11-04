// Wait for the document to be ready
document.addEventListener("DOMContentLoaded", function() {
    const colorBox = document.getElementById('color-box');

    // Add event listeners to each button to change the color of the box
    document.getElementById('red-button').addEventListener('click', function() {
        colorBox.style.backgroundColor = 'red';
    });

    document.getElementById('green-button').addEventListener('click', function() {
        colorBox.style.backgroundColor = 'green';
    });

    document.getElementById('blue-button').addEventListener('click', function() {
        colorBox.style.backgroundColor = 'blue';
    });
});
