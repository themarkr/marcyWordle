const DIFF = document.querySelector('#diff')

// DIFF.addEventListener('click', addNewRow);

 /*
    - One parameter that takes in the current Step number
    - Create the parent DIV
    - Set the class equals to "row"
    - Set the id equals to `$row{currentSteps}`
    - Create five div's that have their class set to "tile" and append each to the parent DIV
    - Append the recently create parent DIV to the "board" parent div
    -       
 */
const diffcultySetting = document.querySelector('#diffculty')

// diffcultySetting.addEventListener('change', logOut)
function logOut(e) {
    // console.log("hello World")
    e.getAttribute('step');
}

console.log(+diffcultySetting.getAttribute('step'))

// function addNewRow() {
// }

