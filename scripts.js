const MINIMUMSIZE = 16;

const board = document.getElementById("container");

function createBoard(size) {
    for (let i = 0; i < size*size; i++) {
        let cell = document.createElement('div');
        cell.addEventListener("mouseover", updateCell);
        cell.classList.add("cell");
        board.appendChild(cell)
    }
}

function updateCell(e) {
    e.target.style.backgroundColor = "black";
}

function reset() {
    let cell = document.querySelectorAll(".cell")
    cell.forEach(cell => cell.remove());
    createBoard(MINIMUMSIZE)
}

createBoard(MINIMUMSIZE);


