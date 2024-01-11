const gridContainer = document.querySelector('#gridContainer');

const sideBtn = document.querySelector('#sideLengthBtn');
let rows = 0;

sideBtn.addEventListener('click',function() {
    rows = prompt('How many rows?');
    
    while (rows >= 100) {
        rows = prompt('Please enter a number less than 100.')
    }
    
    for (let i = 0; i < rows; i++) {
        createGrid(rows);
    }

    });

function createGrid(columns) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row-style');
    gridContainer.appendChild(gridRow);

    for (let i = 0; i < columns; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element-style');
        gridElement.id = 'grid-element-id';
        gridRow.appendChild(gridElement);

        // Add event listener to each gridElement
        gridElement.addEventListener("mouseenter", (e) => {
            gridElement.style.backgroundColor = '#002A4A';
        });
    }
}