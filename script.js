const gridContainer = document.querySelector('#gridContainer');

function createGrid() {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row-style');
    gridContainer.appendChild(gridRow);

    for (let i = 0; i < 16; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element-style');
        gridRow.appendChild(gridElement);
    }

}

//loop through createGridElement function to create blocks in each row
for (let i = 0; i < 16; i++) {
    createGrid();
}