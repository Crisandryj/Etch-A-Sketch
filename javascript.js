const container = document.querySelector('#container');

  
function createBox(bxName,lvlName){
  bxName.classList.add('gridbox')
  lvlName.appendChild(bxName);
}   

function createLvl(lvlName){
  lvlName.classList.add('lvl')
  lvlName.style.cssText = "background-color: white; display:flex;"
  container.appendChild(lvlName);
}


let object = {};
let object2 ={};

//creates divs to use for rows

function createRowObjects(first,last){
  for (i = first; i < last; i++){
    object2[`lvl${i}`] = {
      name: document.createElement('div')
}}}

//Creates rows 
function createRows(n){
  for (i=0; i<n; i++){
    createLvl(object2[`lvl${i}`].name)
}
}

//divs for boxes
function createBoxObjects(first,last,lvl){
  for (i = `${first}`; i < `${last}`; i++){
    object[`div${i}${lvl}`] = {
      name: document.createElement('div')
  }
  }
  }

//Creates boxes in rows
function createBoxes (first,last,lvl){
  for (i=first; i<last;i++){
    createBox(object[`div${i}${lvl}`].name,object2[`lvl${lvl}`].name)
    }

}


let x = Number(`0`);
function createDrawingBoard(nOfRows,nOfColumns){
  createRowObjects(0,nOfRows)
  createRows(nOfRows)
  for (let i=0; i<`${nOfRows}`; i++){
    createBoxObjects(0,`${nOfColumns}`,`${i}`)
    createBoxes(0,`${nOfColumns}`,`${i}`)
    console.log(`${i}`)
  }
}



const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');


btn.addEventListener('click', () => {
 let a = prompt('Please enter number of rows <= 100:','0')
 createDrawingBoard(a,a)
 if (a>100) {location.reload()}

 const boxes = document.querySelectorAll('.gridbox')
 boxes.forEach(box => {
  box.addEventListener('mouseover', () => {
    box.style.cssText = "background-color:black;"

    btn2.addEventListener('click', () => {
      location.reload()
  
  })
 
 })})
 
});

   /*Event Listeners*/

   const boxes = document.querySelectorAll('.gridbox')
   boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
      box.style.cssText = "background-color:blue;"

    })
  })




