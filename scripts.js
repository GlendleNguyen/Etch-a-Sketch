const MINIMUMSIZE = 16;
let currentColor = "black";
let currentSize = 16;

const board = document.getElementById("container");
const colorPicker = document.querySelector('#colorSelect'); 

function createBoard(size) {
    for (let i = 0; i < size*size; i++) {
        let cell = document.createElement('div');
        cell.addEventListener("mouseover", updateCell);
        cell.classList.add("cell");
        board.appendChild(cell);
    }
}

function updateCell(e) {
    e.target.style.backgroundColor = currentColor;
}

function reset() {
    let cell = document.querySelectorAll(".cell");
    cell.forEach(cell => cell.remove());
    createBoard(currentSize);
}


// functions to change the color palette
colorPicker.addEventListener('change', changeColor);

function changeColor() {
    currentColor = this.value; 
}


// initial board state creation
createBoard(MINIMUMSIZE);


