container = document.querySelector("#container")

function createSquareDiv(size) {
    const div = document.createElement("div")
    div.classList.add("square-div")
    div.style.width = `${size}px`
    div.style.height = `${size}px`
    div.style.border = "solid black"
    return div
}

function createGrid(gridsize, squareSize) {
    for (let i = 0; i < gridsize * gridsize; i++) {
        const square = createSquareDiv(squareSize)
        container.appendChild(square)
    }
}

createGrid(16, 50)