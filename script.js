const gridContainer = document.querySelector('#gridContainer');
let rows = prompt('how many rows?');

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
            // ... other actions for mouseenter event ...
        });

        // If needed, add mouseleave event to reset the style
        gridElement.addEventListener("mouseleave", (e) => {
            //gridElement.style.transitionDelay = '100ms';
            gridElement.style.backgroundColor = '#00A1E2';
            // ... other actions for mouseleave event ...
        });
    }

}



//loop through createGridElement function to create blocks in each row
for (let i = 0; i < rows; i++) {
    createGrid(rows);
}