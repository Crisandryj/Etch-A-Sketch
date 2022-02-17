const defaultColor = document.getElementById('btn');



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


const clearBoard = document.getElementById('clearBoard')

window.setTimeout(askForBoardSize(),1000)

guardClause()



const boxes = document.querySelectorAll('.boxes');

defaultColor.addEventListener('click', function() {
  const boxes = document.querySelectorAll('.boxes');
  boxes.forEach(box => {
    box.onmouseover = function(event)
    {let target = event.target; target.style.background = 'black'};
   })
  });


const randomColors = document.getElementById('btnRandom');

let ranNum;
function randomNumber(){ ranNum =  (Math.floor(Math.random()*265))
  return ranNum
}


function generateRandomColor() {
  return `rgb`+ "(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")"
  }
  

clearBoard.addEventListener('click', () => boxes.forEach(box => box.style.backgroundColor = "rgb(226, 224, 224)"));



randomColors.addEventListener('click', function() {
  const boxes = document.querySelectorAll('.boxes');
  boxes.forEach(box => {
  box.onmouseover = function(event)
  {let target = event.target; target.style.background = generateRandomColor()};
 })
});

const selectBoardSize = document.getElementById('createBtn')

selectBoardSize.addEventListener('click', function(){ askForBoardSize()})
