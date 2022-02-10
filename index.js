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

    let answer = pickWord();
    console.log(answer);

    function changeColor(tile, i, guessWord) {
        let tileText = tile.innerText;
        if (tileText === answer[i]) {
            tile.style.backgroundColor = "#538d4e";
            tile.style.borderColor = "#538d4e"
                // changeKeyboardColor(tileText, )
        } else if (answer.includes(tileText)) {
            tile.style.backgroundColor = "#b59f3b";
            tile.style.borderColor = "#b59f3b"
        } else {
            tile.style.backgroundColor = "#3a3a3c";
        }
    }

    // function changeKeyboardColor(tile, i, guessWord) {
    //     let tileText = tile.innerText;
    //     console.log(tile, i, guessWord, tileText);
    //     if (tileText === answer[i]) {
    //         tile.style.backgroundColor = "#538d4e";
    //     } else if (answer.includes(tileText)) {
    //         tile.style.backgroundColor = "#b59f3b";
    //     } else {
    //         tile.style.backgroundColor = "#3a3a3c";
    //     }
    // }

    function updateTiles(totalAttempts) {
        let guess = document.getElementById('guess-input').value
        switch (totalAttempts) {
            case 1:
                // console.log(row1Tiles);
                for (let i = 0; i < row1Tiles.length; i++) {
                    row1Tiles[i].innerText = guess[i];
                    changeColor(row1Tiles[i], i, guess);
                }
                break;
            case 2:
                for (let i = 0; i < row1Tiles.length; i++) {
                    row2Tiles[i].innerText = guess[i];
                    changeColor(row2Tiles[i], i, guess);
                }
                break;
            case 3:
                for (let i = 0; i < row1Tiles.length; i++) {
                    row3Tiles[i].innerText = guess[i];
                    changeColor(row3Tiles[i], i, guess);
                }
                break;
            case 4:
                for (let i = 0; i < row1Tiles.length; i++) {
                    row4Tiles[i].innerText = guess[i];
                    changeColor(row4Tiles[i], i, guess);
                }
                break;
            case 5:
                for (let i = 0; i < row1Tiles.length; i++) {
                    row5Tiles[i].innerText = guess[i];
                    changeColor(row5Tiles[i], i, guess);
                }
                break;
                //to do 
                // input validation
                // game over check
                // disable button on some checks
                // new game button that will
                //      clear the board
                //      generate a new random word for the game
                //      reset attempts to 0

        }
    }
    // console.log(numOfRows);
    if (attempts >= numOfRows) {
        submitForm.disabled = true;
        c
    }

    function onSubmit(event) { // function for when we hit submit
        event.preventDefault(); // prevent the page from reloading
        errorMessage.innerText = ""
            //get guess from input field
        let guess = document.getElementById('guess-input').value
            // input validation 
            // check if guess is correct length and an english word
        if (guess.length === answer.length && filteredWordBank.includes(guess)) {
            // if it is, update attempts by 1
            // call update tiles function
            // reset input field to be blank
            attempts++;
            updateTiles(attempts);
        } else if (guess.length === answer.length && !filteredWordBank.includes(guess)) {
            errorMessage.innerText = "Thats not a word!";
        }
        document.getElementById('guess-input').value = "";
    }
    submitButton.addEventListener('click', onSubmit);
})