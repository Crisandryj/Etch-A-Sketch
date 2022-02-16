const defaultColor = document.getElementById('btn');
const random = document.getElementById('btn2');

/*
function generateRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
let randomColor = generateRandomColor()
*/

function createDrawingBoard(numOfBoxes){
  for (let i=0; i< numOfBoxes;i++){
  let drawingSpace = document.getElementById('drawingSpace');
  let boxes = document.createElement('div');
  boxes.setAttribute('class', 'boxes');
  drawingSpace.appendChild(boxes);
}
}
let boardSize;

function guardClause(){
  while (boardSize > 100 || isNaN(boardSize) == true ) {askForBoardSize()}
 
}

function askForBoardSize() {boardSize = prompt("Please enter size of Board(<=100)")
  createDrawingBoard(Math.pow(boardSize,2));
let width = ((100/boardSize));
const boxes = document.querySelectorAll('.boxes');
boxes.forEach(box => {box.style.width += `${width}%`;
});
};
document.getElementById('btn2');

const clearBoard = document.getElementById('clearBoard')

window.setTimeout(askForBoardSize(),1000)

guardClause()
console.log(isNaN(boardSize))

clearBoard.addEventListener('click', () => boxes.forEach(box => box.setAttribute("class","clear")));


const boxes = document.querySelectorAll('.boxes');

defaultColor.addEventListener('click', function() {
  const boxes = document.querySelectorAll('.boxes');
  boxes.forEach(box => {
  box.addEventListener('mouseover', () => box.setAttribute("class","boxColor"));
 })
});


/*random.addEventListener('click', function() {
  let a = prompt("Please enter size of Board(<=100)")
    if (a >100){location.reload()}
let width = `width:` + ((100/a))+`%`
createDiv(a*a)

const grid = document.querySelectorAll('.grid')
  grid.forEach(box => {
  box.addEventListener('mouseover', () => {
  box.style.cssText = `background-color:${randomColor};${width}` 
   })
 })
 grid.forEach(box => {
  box.style.cssText = `${width}`
    
   })
})
*/

