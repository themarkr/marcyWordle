const darkMode = document.querySelector('#Dark-Mode');
const tiles = document.querySelectorAll('.row .tile')
console.log(tiles)

darkMode.addEventListener('click', swapThemes);

function swapThemes() {
    document.body.classList.toggle('white');
    document.board.classList.toggle('white');
}

// const defaultMode = +darkMode.value;

// darkMode.addEventListener('input', handleInput);

// function handleInput(e) {
//     const value = +e.target.value
//     console.log(value)
// }

// const allPTags = document.querySelectorAll('p');
// console.log(allPTags)