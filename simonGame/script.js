const buttonColours = ['red', 'blue', 'green', 'yellow']
let gamePattern = []
let userClickedPattern = []

// detect button click and store it in userClickedPattern
$('.btn').on('click', function () {
    let userChosenColour = $(this).attr('id')

    userClickedPattern.push(userChosenColour)

    playSound(userChosenColour)

    animatePress(userChosenColour)

})


// fuction to get random number and play sounds
function nextSequence() {
    let randomNumber = buttonColours[Math.floor(Math.random() * buttonColours.length)];

    gamePattern.push(randomNumber)
    $("#" + randomNumber).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)

    playSound(randomNumber)

    animatePress(randomNumber)

}
//create function for sounds
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// function for animation css
function animatePress(currentColor) {

    $('#'+ currentColor).addClass('pressed')

    setTimeout(function () {
        $('#'+ currentColor).removeClass('pressed')
    }, 100)
}

nextSequence()