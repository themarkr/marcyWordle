const DIFF = document.querySelector('#diff')

// DIFF.addEventListener('click', addNewRow);

 /*
    - One parameter that takes in the current Step number
    - Create the parent DIV
    - Set the class equals to "row"
    - Set the id equals to `$row{currentSteps}`
    - Create five div's that have their class set to "tile" and append each to the parent DIV
    - Append the recently create parent DIV to the "board" parent div    
 */
const diffcultySetting = document.querySelector('#diffculty')

const defaultSetting = +diffcultySetting.value;
console.log(defaultSetting)


diffcultySetting.addEventListener('input', handleInput);

let addCounter = 0;

function handleInput(e) {
    const diffcultyLevel = +e.target.value;
    console.log(diffcultyLevel)
    if (diffcultyLevel > defaultSetting && addCounter !== 5) {
    rowMaker(diffcultyLevel)
    addCounter++;
    }
}

// oninput => Track the diffculty
// onchange => Track the change in diffculty
// remove => removes the element from the tree it belongs to

const board = document.querySelector('#board')
function rowMaker(level) {
    // Parent Div
    const rowParentDiv = document.createElement('div');
    rowParentDiv.className = "row";
    rowParentDiv.id = `row${level}`;
    // Child Divs'
    const rowChildDiv1 = document.createElement('div');
    rowChildDiv1.className = "tile";
    const rowChildDiv2 = document.createElement('div');
    rowChildDiv2.className = "tile";
    const rowChildDiv3 = document.createElement('div');
    rowChildDiv3.className = "tile";
    const rowChildDiv4 = document.createElement('div');
    rowChildDiv4.className = "tile";
    const rowChildDiv5 = document.createElement('div');
    rowChildDiv5.className = "tile";
    rowParentDiv.appendChild(rowChildDiv1);
    rowParentDiv.appendChild(rowChildDiv2);
    rowParentDiv.appendChild(rowChildDiv3);
    rowParentDiv.appendChild(rowChildDiv4);
    rowParentDiv.appendChild(rowChildDiv5);
    board.appendChild(rowParentDiv)
}

function rowRemover() {

}

// rowMaker();

