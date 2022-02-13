const darkMode = document.querySelector('#Dark-Mode');

const defaultMode = +darkMode.value;

darkMode.addEventListener('input', handleInput);

function handleInput(e) {
    const value = +e.target.value
    console.log(value)
}

const allPTags = document.querySelectorAll('p');
// console.log(allPTags)