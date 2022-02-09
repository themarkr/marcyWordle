window.addEventListener('DOMContentLoaded', () => {

    const board = document.querySelector('#board')
    const rows = board.childNodes;
    let numOfRows = rows.length;
    let attempts = 0;

    const row1Tiles = document.getElementById('row1').children;
    // const wrong = document.getElementById('')
    const row2Tiles = document.getElementById('row2').children;
    const row3Tiles = document.getElementById('row3').children;
    const row4Tiles = document.getElementById('row4').children;
    const row5Tiles = document.getElementById('row5').children;
    const submitForm = document.querySelector('form');

    let answer = pickWord();
    console.log(answer);

    function changeColor(tile, i, guessWord) {
        let tileText = tile.innerText;
        console.log(tile, i, guessWord, tileText);
        if (tileText === answer[i]) {
            tile.style.backgroundColor = "#538d4e";
        } else if (answer.includes(tileText)) {
            tile.style.backgroundColor = "#b59f3b";
        } else {
            tile.style.backgroundColor = "#3a3a3c";
        }
    }

    function updateTiles(totalAttempts) {
        let guess = document.getElementById('guess-input').value
        switch (totalAttempts) {
            case 1:
                console.log(row1Tiles);
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
                // left off at creating a default case 
                // default:
        }
    }

    function onSubmit(event) {
        event.preventDefault();
        let guess = document.getElementById('guess-input').value
        attempts++;
        console.log(answer, guess, attempts);
        updateTiles(attempts);
    }
    submitForm.addEventListener('submit', onSubmit);
});