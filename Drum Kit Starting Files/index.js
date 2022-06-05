const buttons = document.querySelectorAll('.drum').length


// a loop to detect buttons pressed
for (let i = 0; i < buttons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {

        let buttonText = this.innerHTML

        makeSound(buttonText)

        buttonAnimation(buttonText)

    
    })
}

// detect if key is pressed
document.addEventListener('keydown', function(event) {
    
    makeSound(event.key)

    buttonAnimation(event.key)
})

// function with switch case to play the sounds
function makeSound(key) {
        switch (key) {
            case 'w':
                let tom1 = new Audio('sounds/tom-1.mp3')
                tom1.play();
                break;

            case 'a' :
                let tom2 = new Audio('sounds/tom-2.mp3')
                tom2.play();
                break;

            case 's' :
                let tom3 = new Audio('sounds/tom-3.mp3')
                tom3.play(); 
                break;
                
            case 'd' :
                let tom4 = new Audio('sounds/tom-4.mp3')
                tom4.play();
                break;
                
            case 'j' :
                let crash = new Audio('sounds/crash.mp3')
                crash.play();
                break;

            case 'k' : 
                let kickBass = new Audio('sounds/kick-bass.mp3')
                kickBass.play();
                break;

            case 'l' :
                let snare = new Audio('sounds/snare.mp3')
                snare.play();
                break;    

                default: console.log(buttonText)
        }
}

function buttonAnimation(currentKey) {
    
    const activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")
    // removing the pressed animation  
    setTimeout(() => {
        activeButton.classList.remove("pressed");

    }, 100)
}