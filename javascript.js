const defaultColor = document.getElementById('btn');
let drawingSpace = document.getElementById('drawingSpace');
let boardSize;

function createDrawingBoard(numOfBoxes){
  for (let i=0; i< numOfBoxes;i++){
  let boxes = document.createElement('div');
  boxes.setAttribute('class', 'boxes');
  drawingSpace.appendChild(boxes);
}
}



function guardClause(){
  while (boardSize > 100 || isNaN(boardSize) == true ) {askForBoardSize()  
  }
}


function askForBoardSize(){
  boardSize = prompt("Please enter size of Board(<=100)")
  guardClause()
  createDrawingBoard(Math.pow(boardSize,2));
  let size  = ((100/boardSize));
  const boxes = document.querySelectorAll('.boxes');
  boxes.forEach(box => {box.style.width += `${size}%`;
  box.style.height += `${size}%`
});
};

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
  



function deleteChild(){
  let child = drawingSpace.lastElementChild;
  while (child) {
    drawingSpace.removeChild(child);
    child = drawingSpace.lastElementChild;
  }
}

const selectNewBoardSize = document.getElementById('createBtn')

selectNewBoardSize.addEventListener('click', function(){
  deleteChild()
  askForBoardSize()
})



randomColors.addEventListener('click', function() {
  const boxes = document.querySelectorAll('.boxes');
  boxes.forEach(box => {
  box.onmouseover = function(event)
  {let target = event.target; target.style.background = generateRandomColor()};
 })
});

const erase = document.getElementById('eraser')
const clearBoard = document.getElementById('clearBoard')

erase.addEventListener('click', function() {
  const boxes = document.querySelectorAll('.boxes');
  boxes.forEach(box => {
    box.onmouseover = function(event)
    {let target = event.target; target.style.background = "rgb(226, 224, 224)"};
   })
  });

clearBoard.addEventListener('click', () => {
  const boxes = document.querySelectorAll('.boxes')
  boxes.forEach(box => {box.style.background = "rgb(226, 224, 224)"}
  )}
);


  setTimeout(() => {askForBoardSize()},3000)