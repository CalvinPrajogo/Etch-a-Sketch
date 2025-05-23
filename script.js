container = document.querySelector("#container")
reset_btn = document.querySelector("#reset-btn")
const CONTAINER_SIZE = 960;

function createSquareDiv(size) {
    const div = document.createElement("div")
    div.classList.add("square-div")
    div.style.width = `${size}px`
    div.style.height = `${size}px`
    div.style.border = "solid black"
    return div
}

function createGrid(gridsize) {
    container.innerHTML = "";
    const squareSize = CONTAINER_SIZE / gridsize;
    for (let i = 0; i < gridsize * gridsize; i++) {
        const square = createSquareDiv(squareSize)
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "blue"
        })
        container.appendChild(square)
    }
}

createGrid(16, 50) 

reset_btn.addEventListener("click", () => {
    let size = prompt("Enter the number of squares per side (max 100):")
    size = parseInt(size)
    if (size && size > 0 && size <= 100) {
        createGrid(size)
    } else {
        alert("Please enter a valid number between 1 and 100.")
    }
})

