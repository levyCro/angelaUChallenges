const buttonColours = ['red', 'blue', 'green', 'yellow']
let gamePattern = []
let userClickedPattern = []

// detect button click and store it in userClickedPattern
$('.btn').on('click', function(){
    let juserChosenColour = $(this).attr('id')

    userClickedPattern.push(juserChosenColour)
    console.log(userClickedPattern)
    
})

// fuction to get random number and play sounds
function nextSequence() {
    let randomNumber = buttonColours[Math.floor(Math.random() * buttonColours.length)];
    
    gamePattern.push(randomNumber)
    $("#"+ randomNumber).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    

    var audio = new Audio("sounds/"+ randomNumber +".mp3");
    audio.play();
    
    
}

nextSequence()


