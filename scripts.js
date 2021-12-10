const DEFAULT_SIZE = 16

const board = document.getElementById('board')

function createGrid(size) {
    for(let i = 0; i < size; i++) {
        const gridCell = document.createElement('div')
        board.appendChild(gridCell)
    }
}

function hello() {
    console.log('Hello!')
    return 1
}
