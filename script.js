const gridContainer = document.querySelector('#gridContainer');
const sideBtn = document.querySelector('#sideLengthBtn');
let rows = 0;

sideBtn.addEventListener('click',function() {
    const topLevelDivs = gridContainer.children;

    // Convert HTMLCollection to array for safe iteration
    Array.from(topLevelDivs).forEach(child => {
    if (child.tagName === 'DIV') {
        gridContainer.removeChild(child);
    }
    });
    
    //prompt user for number of grid rows
    rows = prompt('How many rows?');
    //limit number to less than 100
    while (rows >= 100) {
        rows = prompt('Please enter a number less than 100.')
    }
    //call createGrid function for number of entered rows
    for (let i = 0; i < rows; i++) {
        createGrid(rows);
    }
});

function createGrid(rows) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row-style');
    gridContainer.appendChild(gridRow);

    // Assuming gridContainer has a fixed size defined in CSS
    const containerSize = 500;
    const marginSize = 1; // Margin for each grid element (defined in CSS)
    const totalSizePerElement = (containerSize - marginSize * rows * 2) / rows;
    
    for (let i = 0; i < rows; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element-style');
        gridElement.style.width = `${totalSizePerElement}px`;
        gridElement.style.height = `${totalSizePerElement}px`;
        gridElement.id = 'grid-element-id';
        gridRow.appendChild(gridElement);

        // Add event listener to each gridElement
        gridElement.addEventListener("mouseenter", () => {
            gridElement.style.backgroundColor = '#002A4A';
        });
    }
}

