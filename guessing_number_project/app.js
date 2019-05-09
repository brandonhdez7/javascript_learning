// game funtions
    //player must guess number betweeen min and max
    //players get a certain amount of guesses
    //notify user of guesses remaining
    //notify the user of correct answer if looses
    //let player choose to play again

    //game values
    let min = 1,max = 10, winningNum = getWinningNum(min, max), guessesLeft = 3;

    //ui elements
    const game = document.getElementById('game')
    const minNum = document.querySelector('.min-num');
    const maxNum = document.querySelector('.max-num');
    const guessInput = document.querySelector('#guess-input');
    const guessBtn = document.getElementById('guess-btn')
    const message = document.querySelector('.message')

//assign UI min and max

minNum.textContent = min
maxNum.textContent = max

//play again even listener
game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload()
    }
})

//listen for guess

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value)
    console.log(guess)

    //validate input
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red' )
    }

    //check if won
    if (guess === winningNum){
        //game over - won
        gameOver(true, `${winningNum} is correct!, You Win`, 'green')
    }else{
        //wrong number
        guessesLeft -= 1;
        if(guessesLeft === 0){
        //game over - lost
        gameOver(false, `Game Over!, You Lost. The correct number was ${winningNum}`, 'red')
        }else{
            //game continues - wrong answer
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
            //change border green to show that user won
            guessInput.style.borderColor = 'red'
            //clear input 
            guessInput.value = '';
        }

    }
})

//game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red'
    guessInput.disabled = true
    //change border green to show that user won
    guessInput.style.borderColor = color
    //set message color
    message.style.color = color
    // set message that user won
    setMessage(msg)

    //play again
    guessBtn.value = 'Play Again'
    guessBtn.className += 'play-again'
}

//get winnning number
function getWinningNum(min, max){
    return Math.floor(Math.random() * (max-min+1) + min);
}

//set message
function setMessage(msg, color){
    message.style.color = color
    message.textContent = msg;
}