window.addEventListener('DOMContentLoaded', () => {

    const board = document.querySelector('#board')
    const rows = board.childNodes;
    let numOfRows = rows.length;
    let attempts = 0;

    const row1Tiles = document.getElementById('row1').childNodes;
    const row2Tiles = document.getElementById('row2').childNodes;
    const row3Tiles = document.getElementById('row3').childNodes;
    const row4Tiles = document.getElementById('row4').childNodes;
    const row5Tiles = document.getElementById('row5').childNodes;
    const submitForm = document.querySelector('form');

    let answer = pickWord()
    console.log(answer);

    function changeColor(tile, i, guessWord) {
        let tileText = tile.innerText;
        console.log(tile, i, guessWord, tileText);
        if (tileText === guessWord[i]) {
            tile.style.backgroundColor = "green";
        } else if (guessWord.includes(tileText)) {
            tile.style.backgroundColor = "yellow";
        } else {
            tile.style.backgroundColor = "gray"
        }
    }

    function updateTiles(totalAttempts) {
        let i = 0;
        let guess = document.getElementById('guess-input').value
        switch (totalAttempts) {
            case 1:
                row1Tiles.forEach((tile, i) => {
                    // console.log(guess[i])
                    let word = guess[i]
                    console.log(word)


                    row1Tiles[i].innerText = word;
                    // row1Tiles[i].innerText = "hello";

                    changeColor(tile, i, guess);
                    // i++;
                })
                break;
            case 2:
                // let i = 0;
                row2Tiles.forEach(tile => {
                    tile.innerText = guess[i];
                    changeColor(tile, i, guess);
                    i++;
                })
                break;
            case 3:
                // let i = 0;
                row3Tiles.forEach(tile => {
                    tile.innerText = guess[i];
                    changeColor(tile, i, guess);
                    i++;
                })
                break;
            case 4:
                // let i = 0;
                row4Tiles.forEach(tile => {
                    tile.innerText = guess[i];
                    changeColor(tile, i, guess);
                    i++;
                })
                break;
            case 5:
                // let i = 0;
                row5Tiles.forEach(tile => {
                    tile.innerText = guess[i];
                    changeColor(tile, i, guess);
                    i++;
                })
                break;

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