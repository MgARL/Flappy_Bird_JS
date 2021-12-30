let block = document.getElementById('block');
let hole = document.getElementById('hole');
let character = document.getElementById('character');
let jumping = 0;
counter = 0;

hole.addEventListener('animationiteration', () => {
    let random = -((Math.random() * 300) + 150);
    hole.style.top = random + 'px';
    counter++
})

setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    
    if (jumping === 0){
        character.style.top = (characterTop + 3) + 'px'
    }

    let holeLeft = parseInt(window.getComputedStyle(hole).getPropertyValue('left'));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'));


    // console.log(characterTop - 655, holeTop, holeTop + 150)

    // console.log(holeLeft, characterLeft)

    //need the top and left of character match top and left of hole
    // character top is not equal hole top and hole top + height => ctop 357 hTop -300, 657 difference
    //left + width, if HOLEleft is equal to 57  and 57 + 50 game over
    


    if ((characterTop > 635)||(((holeLeft >= 52) && (holeLeft <= 107)) && ((characterTop - 650 <=  holeTop) || (characterTop - 635 >= holeTop + 155)))){
        alert('game Over! your score is: ' + counter);
        character.style.top = 280 + 'px';
        counter = 0;
    }
}, 10)

function jump(){
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function(){
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
        if((characterTop > 157) && (jumpCount < 15)){
            character.style.top = (characterTop - 5) + 'px'
        }
        if(jumpCount > 20){
            clearInterval(jumpInterval)
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++
    }, 10)
}