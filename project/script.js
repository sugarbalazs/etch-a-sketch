// Get the grid container element
let mainContainer = document.getElementById("mainContainer");

// Creating a loop to get the divs inside the main div
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    // Create each div
    let cell = document.createElement("div");
    // Adding a class
    cell.className = "flex-item";

    // Appending the cells
    mainContainer.appendChild(cell);

    cell.addEventListener(
      "mouseenter",
      (e) => {
        e.target.style.color = "black";
      },
      false
    );
  }
}
