window.addEventListener('DOMContentLoaded', () => {
    console.log(masterWordBank.length)
    const board = document.querySelector('#board')
    let gameOver = false;

    const newGameButton = document.getElementById('new-game-button');
    const shareButton = document.getElementById('share-button');
    const alertMessage = document.getElementById('alert-message');
    alertMessage.style.visibility = "hidden"
    shareButton.style.visibility = "hidden"
    console.log(boardStack.length);

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



    function newGame(event) {
        alertMessage.innerText = ""
        alertMessage.style.visibility = "hidden"
        shareButton.style.visibility = "hidden"
        clearBoard();
        resetKeyboard();
        answer = pickWord().toUpperCase();
        charEntries.clear();
        attempts = 0;
        gameOver = false;
        console.log(answer);
    }
    newGameButton.addEventListener('click', newGame);

    function shareScore() {
        let text = "Better Wordle\n"
        for (const row of boardStack) {
            if (row[0].innerText) {
                for (const tile of row) {
                    let color = tile.style.backgroundColor;
                    console.log(color);
                    if (color === "rgb(83, 141, 78)") {
                        text += "🟩";
                    } else
                    if (color === "rgb(181, 159, 59)") {
                        text += "🟨";
                    } else {
                        text += "⬛";
                    }

                }
                text += "\n"
            }
        }
        console.log(text);
        navigator.clipboard.writeText(text);
    }

    shareButton.addEventListener('click', shareScore);

    // function jiggle(attempt) {
    //     const rowID = `row${attempt+1}`
    //     console.log(rowID, "attemp+1")
    //     const row = document.getElementById(rowID);
    //     console.log(row)
    //     row.style.anamation = "shake 0.82s cubic-bezier(.36, .07, .19, .97) both"
    // }

    function validateGuess(userGuess) {
        if (userGuess === answer) {
            gameOver = true;
            shareButton.style.visibility = "visible";
            console.log(gameOver);
        }
        if (userGuess.length !== answer.length) {
            alertMessage.style.visibility = "visible";
            // console.log("jiggle")
            // jiggle(attempts);
            alertMessage.innerText = "Your guess is too short!";
            return false;
        } else
        if (userGuess.length === answer.length && !filteredWordBank.includes(userGuess.toLowerCase())) {
            // console.log("jiggle")
            // jiggle(attempts);
            alertMessage.style.visibility = "visible";
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
        if (attempts >= boardStack.length || currentTile > boardStack[attempts].length || gameOver) {
            return;
        }
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
                if (guess === answer) {
                    gameOver = true
                }
                attempts += 1;
                currentTile = 0;
                if (attempts > boardStack.length - 1) {
                    shareButton.style.visibility = "visible";
                }
                console.log(attempts);
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
            if (currentTile < boardStack[attempts].length && attempts < boardStack.length) {

                boardStack[attempts][currentTile].innerText = char.toUpperCase();
                currentTile += 1;

            }
        }
    }
    document.addEventListener("keydown", onKeydown)
})