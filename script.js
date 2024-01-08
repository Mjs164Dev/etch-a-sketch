const gridContainer = document.querySelector('#gridContainer');

function createGridElement() {
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element-style');
    gridContainer.appendChild(gridElement);
}

//loop through createGridElement function to create blocks in each row
for (let i = 0; i < 8; i++) {
    createGridElement();
}

