// Function to change font colors
function changeFontColor() {
    document.getElementById('text1').style.color = '#00FFFF';  // Cyan color
    document.getElementById('text2').style.color = '#ADFF2F';  // GreenYellow color
}

// Attach event listener to the button
document.getElementById('submit-btn').addEventListener('click', changeFontColor);
