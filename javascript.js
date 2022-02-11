const black = document.getElementById('btn');
const reload = document.getElementById('btn1');
const random = document.getElementById('btn2');

function generateRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
let randomColor = generateRandomColor()

function createDiv(n){
  for (let i=0; i< n;i++){

let contain = document.getElementById('drawingSpace');
let newGriding = document.createElement('div');
newGriding.setAttribute('class', 'grid');
contain.appendChild(newGriding);
}
}


black.addEventListener('click', function() {
  let a = prompt("Please enter size of Board(<=100)")
    if (a >100){location.reload()}
let width = `width:` + ((100/a))+`%`
createDiv(a*a)

const grid = document.querySelectorAll('.grid')
  grid.forEach(box => {
  box.addEventListener('mouseover', () => {
  box.style.cssText = `background-color:black;${width}` 
   })
 })
 
grid.forEach(box => {
  box.style.cssText = `${width}`
    
   })
  

});

random.addEventListener('click', function() {
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






reload.addEventListener('click', function() {
location.reload()
});


