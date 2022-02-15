window.addEventListener('DOMContentLoaded', () => {

    const board = document.querySelector('#board')
    let numOfRows = board.children.length;
    let gameOver = false;

    console.log(row1Tiles);

    const submitButton = document.getElementById('submit-button');
    const newGameButton = document.getElementById('new-game-button');
    const alertMessage = document.getElementById('alert-message');
    alertMessage.style.visibility = "hidden"

    const charEntries = new Set();

    // let answer = pickWord().toUpperCase();
    console.log(answer);

    function changeKeyboardColor(char, color, i) {
        const key = document.getElementById(char);
        if (char === answer[i]) {
            key.style.backgroundColor = color;
        } else if (answer.includes(char)) {
            key.style.backgroundColor = color;
        } else {
            key.style.backgroundColor = color;
        }
    }


    function changeColor(row, guessWord) {
        for (let i = 0; i < row.length; i++) {
            let tileText = row[i].innerText;
            let tile = row[i];
            if (tileText === answer[i]) {
                tile.style.backgroundColor = "#538d4e";
                tile.style.borderColor = "#538d4e"
                changeKeyboardColor(tileText.toUpperCase(), "#538d4e", i)
            } else
            if (answer.includes(tileText)) {
                tile.style.backgroundColor = "#b59f3b";
                tile.style.borderColor = "#b59f3b"
                changeKeyboardColor(tileText.toUpperCase(), "#b59f3b", i)
            } else {
                tile.style.backgroundColor = "#3a3a3c";
                changeKeyboardColor(tileText.toUpperCase(), "#3a3a3c", i)
            }
        }
    }

    // function clearBoard() {
    //     for (const row of boardStack) {
    //         for (const tile of row) {
    //             tile.innerText = "";
    //             tile.style.backgroundColor = "#121213";
    //             tile.style.borderColor = "#3a3a3c";
    //         }
    //     }
    // }

    function resetKeyboard() {
        for (const char of charEntries) {
            const matchingKey = document.getElementById(char);
            matchingKey.style.backgroundColor = "#818384";
        }
    }

    function newGame(event) {
        alertMessage.innerText = ""
        alertMessage.style.visibility = "hidden"
        clearBoard();
        resetKeyboard();
        answer = pickWord().toUpperCase();
        charEntries.clear();
        attempts = 0;
        gameOver = false;
        console.log(answer);
    }
    newGameButton.addEventListener('click', newGame);


    function validateGuess(userGuess) {
        if (userGuess === answer) {
            gameOver = true;
        }
        if (userGuess.length !== answer.length) {
            // jiggle(row);
            alertMessage.style.visibility = "visible"
            alertMessage.innerText = "Your guess is too short!"
            return false
        } else
        if (userGuess.length === answer.length && !filteredWordBank.includes(userGuess.toLowerCase())) {
            alertMessage.style.visibility = "visible"
            alertMessage.innerText = "Thats not a word!";
            return false
        }
        return true;
    }

    function getGuess() {
        let guess = ""
        for (let i = 0; i < boardStack[attempts].length; i++) {
            guess += boardStack[attempts][i].innerText;
        }
        return guess;
    }

    function onKeydown(event) {
        if (gameOver) return;
        let char = event.key;
        if (char === "Enter") {
            alertMessage.innerText = ""
            alertMessage.style.visibility = "hidden"
            let guess = getGuess();
            validateGuess(guess);
            if (validateGuess(guess)) {
                for (const char of guess.split("")) {
                    charEntries.add(char);
                }
                console.log(charEntries);
                changeColor(boardStack[attempts], guess);
                attempts += 1;
                currentTile = 0;
            }
        }
        if (char === "Backspace" || char === "Delete") {
            if (currentTile === 0) {
                boardStack[attempts][currentTile].innerText = ""
                return;
            }
            currentTile -= 1;
            boardStack[attempts][currentTile].innerText = "";
        }
        if (char.match(/^[a-z]$/)) {
            if (currentTile >= boardStack[attempts].length) {
                return;
            }
            boardStack[attempts][currentTile].innerText = char.toUpperCase();
            currentTile += 1;
        }

    }
    document.addEventListener("keydown", onKeydown)
})