window.addEventListener('DOMContentLoaded', () => {

    const board = document.querySelector('#board')
    let numOfRows = board.children.length;
    let attempts = 0;
    let gameOver = false;

    const row1Tiles = document.getElementById('row1').children;
    // const wrong = document.getElementById('')
    const row2Tiles = document.getElementById('row2').children;
    const row3Tiles = document.getElementById('row3').children;
    const row4Tiles = document.getElementById('row4').children;
    const row5Tiles = document.getElementById('row5').children;
    const submitButton = document.getElementById('submit-button');
    const errorMessage = document.getElementById('error-message');

    let answer = pickWord().toUpperCase();
    console.log(answer);

    function changeKeyboardColor(char, color, i) {
        const key = document.getElementById(char);
        console.log(key)
        if (char === answer[i]) {
            key.style.backgroundColor = color;
        } else if (answer.includes(char)) {
            key.style.backgroundColor = color;
        } else {
            key.style.backgroundColor = color;
        }
    }


    function changeColor(tile, i, guessWord) {
        let tileText = tile.innerText;
        console.log(tileText);
        if (tileText === answer[i]) {
            tile.style.backgroundColor = "#538d4e";
            tile.style.borderColor = "#538d4e"
            changeKeyboardColor(tileText.toUpperCase(), "#538d4e", i)
        } else if (answer.includes(tileText)) {
            tile.style.backgroundColor = "#b59f3b";
            tile.style.borderColor = "#b59f3b"
            changeKeyboardColor(tileText.toUpperCase(), "#b59f3b", i)
        } else {
            tile.style.backgroundColor = "#3a3a3c";
            changeKeyboardColor(tileText.toUpperCase(), "#3a3a3c", i)
        }
    }

    function updateTiles(totalAttempts, playerGuess) {
        switch (totalAttempts) {
            case 1:
                // console.log(row1Tiles);
                for (let i = 0; i < row1Tiles.length; i++) {
                    row1Tiles[i].innerText = playerGuess[i];
                    changeColor(row1Tiles[i], i, playerGuess);
                }
                break;
            case 2:
                for (let i = 0; i < row1Tiles.length; i++) {
                    row2Tiles[i].innerText = playerGuess[i];
                    changeColor(row2Tiles[i], i, playerGuess);
                }
                break;
            case 3:
                for (let i = 0; i < row1Tiles.length; i++) {
                    row3Tiles[i].innerText = playerGuess[i];
                    changeColor(row3Tiles[i], i, playerGuess);
                }
                break;
            case 4:
                for (let i = 0; i < row1Tiles.length; i++) {
                    row4Tiles[i].innerText = playerGuess[i];
                    changeColor(row4Tiles[i], i, playerGuess);
                }
                break;
            case 5:
                for (let i = 0; i < row1Tiles.length; i++) {
                    row5Tiles[i].innerText = playerGuess[i];
                    changeColor(row5Tiles[i], i, playerGuess);
                }
                break;
            default:
                errorMessage.innerText = "GAME OVER!"
        }
    }

    // // console.log(numOfRows);
    // if (attempts >= numOfRows) {
    //     submitButton.disabled = true;
    // }

    function onSubmit(event) { // function for when we hit submit
        event.preventDefault(); // prevent the page from reloading
        errorMessage.innerText = ""
            //get guess from input field
        let guess = document.getElementById('guess-input').value.toUpperCase()
        console.log(guess)
            // input validation 
            // check if guess is correct length and an english word
        if (guess.length === answer.length && filteredWordBank.includes(guess.toLowerCase())) {
            // if it is, update attempts by 1
            // call update tiles function
            // reset input field to be blank
            attempts++;
            updateTiles(attempts, guess);
        } else if (guess.length === answer.length && !filteredWordBank.includes(guess.toLowerCase())) {
            errorMessage.innerText = "Thats not a word!";
        } else {
            console.log('neither')
        }
        document.getElementById('guess-input').value = "";
    }
    submitButton.addEventListener('click', onSubmit);
})