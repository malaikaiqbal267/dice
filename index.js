
document.addEventListener("DOMContentLoaded", function() {
    // Hide all dice images except the initial one
    var diceImages = document.querySelectorAll('.dice');
    diceImages.forEach(function(diceImage) {
        diceImage.style.display = 'none';
    });
});

document.getElementById("rollButton").addEventListener("click", function() {
    // Hide the initial dice image
    document.getElementById('initialDice').style.display = 'none';

    // Hide all other dice images
    var diceImages = document.querySelectorAll('.dice');
    diceImages.forEach(function(diceImage) {
        diceImage.style.display = 'none';
    });

    // Generate a random number between 1 and 6
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    // Show the dice image corresponding to the random number
    var selectedDice = document.getElementById('dice' + randomNumber);
    selectedDice.style.display = 'block';
});