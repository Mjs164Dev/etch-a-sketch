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
    
    rows = prompt('How many rows?');
    while (rows >= 100) {
        rows = prompt('Please enter a number less than 100.')
    }
    for (let i = 0; i < rows; i++) {
        createGrid(rows);
    }
});

function createGrid(rows) {
    const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row-style');
        gridContainer.appendChild(gridRow);
        
    for (let i = 0; i < rows; i++) {
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

