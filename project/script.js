// Get the grid container and button elements
let mainContainer = document.getElementById("mainContainer");
let resetBtn = document.getElementById("resetBtn");

// Creating a loop to get the divs inside the main div
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    // Create each div
    let cell = document.createElement("div");

    // Adding a class
    cell.className = "flex-item";

    // Appending the cells
    mainContainer.appendChild(cell);

    // Hovering the cells and change the color
    cell.addEventListener("mouseover", function () {
      this.style.backgroundColor = "black";
    });

    // Reset button
    resetBtn.addEventListener("click", function () {
      cell.style.backgroundColor = "lightgrey";
    });
  }
}
