 /*
     - One parameter that takes in the current Step number
     - Create the parent DIV
     - Set the class equals to "row"
     - Set the id equals to `$row{currentSteps}`
     - Create five div's that have their class set to "tile" and append each to the parent DIV
     - Append the recently create parent DIV to the "board" parent div   

 Adding/Deleting Rows =>
     - Create a temp variable to hold in the pevious diffclty setting
     - Then compare the current diffculty setting with the value of the temp variable
         - If the temp variable is greater than the current va;ue of the diffculyt setting, delete the row that has the value of temp
         - If the temp variable is less than the current value of the difcculty setting, add the row with the value of current
 Increasing/Decreasing Word Length =>
     - Get the childrens of said row (5 being the default)
     - If the slider is increased, loop till you reach the end, add tiles and so on
     
 oninput => Track the diffculty
 onchange => Track the change in diffculty
 remove => removes the element from the tree it belongs to 

 */


 /* Targets the element, Diffculty */
 const diffcultySetting = document.querySelector('#diffculty')

 /* Default Setting the game will be one when the page is loaded */
 const diffcultyDefaultSetting = +diffcultySetting.value;

 /* This allows the slider of the diffculty setting to be tracked */
 diffcultySetting.addEventListener('input', rowManpulation);

 let temp = diffcultyDefaultSetting;

 function rowManpulation(e) {
     const diffcultyLevel = +e.target.value;
     if (temp < diffcultyLevel) {
         rowMaker(diffcultyLevel);
         temp++;
         return
     }
     if (temp > diffcultyLevel) {
         rowRemover(diffcultyLevel + 1);
         temp--;
         return
     }
 }


 /* Creates the new rows */
 const board = document.querySelector('#board')

 function rowMaker(level) {
     // Parent Div
     const rowParentDiv = document.createElement('div');
     rowParentDiv.className = "row";
     rowParentDiv.id = `row${level}`;
     // Child Divs'
     const rowChildDiv1 = document.createElement('p');
     rowChildDiv1.className = "tile";
     const rowChildDiv2 = document.createElement('p');
     rowChildDiv2.className = "tile";
     const rowChildDiv3 = document.createElement('p');
     rowChildDiv3.className = "tile";
     const rowChildDiv4 = document.createElement('p');
     rowChildDiv4.className = "tile";
     const rowChildDiv5 = document.createElement('p');
     rowChildDiv5.className = "tile";
     rowParentDiv.appendChild(rowChildDiv1);
     rowParentDiv.appendChild(rowChildDiv2);
     rowParentDiv.appendChild(rowChildDiv3);
     rowParentDiv.appendChild(rowChildDiv4);
     rowParentDiv.appendChild(rowChildDiv5);
     board.appendChild(rowParentDiv)
 }

 /* Deletes Selected Rows */
 function rowRemover(level) {
     const ele = document.querySelector(`#row${level}`);
     ele.remove();
 }

 /* Word Length ======> */

 /* Element */
 const wordLength = document.querySelector("#word-length");

 /* Default Setting for word length */
 const wordLengthDefaultSetting = +wordLength.value
     // console.log(wordLengthDefaultSetting)
 let tempa = wordLengthDefaultSetting;

 wordLength.addEventListener('input', handleInput);

 function handleInput(e) {
     const wordLengthLevel = +e.target.value;
     console.log(wordLengthLevel)
         // Adding tiles
     if (tempa < wordLengthLevel) {
         for (let i = 1; i < wordLengthLevel; i++) {
             tileMaker(i)
         }
     }

     if (tempa > wordLengthLevel) {
         for (let x = 1; x <= wordLengthLevel; x++) {
             tileRemover(x)
         }
     }
 }

 /*     */
 function tileMaker(length) {
     const p = document.createElement("p");
     p.className = "tile";
     const selectedRow = document.querySelector(`#row${length}`);
     selectedRow.appendChild(p)
 }

 function tileRemover(length) {
     const ele = document.querySelector(`#row${length}`);
     console.log(ele)
 }
 /*     */
 /*     */
 /*     */
 /*     */
 /*     */
 /*     */
 /*     */