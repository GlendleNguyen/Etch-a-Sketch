const MINIMUMSIZE = 16;
const gridcss = "2fr"
let currentColor = "black";
let currentSize = 16;


const board = document.getElementById("container");
const colorPicker = document.querySelector('#colorSelect'); 
const slider = document.getElementById("slider");

// generate cells for the grid and add to the board container
function createBoard(size) {
    for (let i = 0; i < size*size; i++) {
        let cell = document.createElement('div');
        cell.addEventListener("mouseover", updateCell);
        cell.classList.add("cell");
        board.appendChild(cell);
    }
}

// change cell color on mouseover
function updateCell(e) {
    e.target.style.backgroundColor = currentColor;
}

// remove all current cells and generate a new board state
function reset() {
    let cell = document.querySelectorAll(".cell");
    cell.forEach(cell => cell.remove());
    createBoard(currentSize);
}

// functions to alter the board size
slider.addEventListener('change', changeSize)

function changeSize() {
    currentSize = this.value; 
    board.style.gridTemplateColumns = "repeat(${currentSize}, auto-fit)"
    board.style.gridTemplateRows = "repeat(${currentSize}, auto-fit)"
}

// functions to change the color palette
colorPicker.addEventListener('change', changeColor);

function changeColor() {
    currentColor = this.value; 
}

// initial board state creation
createBoard(MINIMUMSIZE);


