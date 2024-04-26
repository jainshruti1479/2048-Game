const GRID_DIVISION = 4
const CELL_SIZE = 20
const CELL_GAP = 2

export class Grid{
    constructor(gridElement){
        gridElement.style.setProperty('--grid-division',GRID_DIVISION)
        gridElement.style.setProperty('--cell-size',`${CELL_SIZE}vmin`)
        gridElement.style.setProperty('--cell-gap',`${CELL_GAP}vmin`)
        createCellElements(gridElement)
    }
}
function createCellElements(gridElement){
    const cells = []
    for(let i = 0; i < GRID_DIVISION * GRID_DIVISION; i++){
        let cell = document.createElement('div')
        cell.classList.add('cells')
        cells.push(cell)
        gridElement.append(cell)
    }
    return cells
}