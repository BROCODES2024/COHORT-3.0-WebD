// Get a reference to the main body of the page
const body = document.body;

// Get a reference to the container that holds the color buttons
const colorPanel = document.getElementById("color-panel");

// Get references to the custom color input and the 'Add Color' button
const customColorInput = document.getElementById("custom-color-input");
const addColorBtn = document.getElementById("add-color-btn");

// --- Functions ---

// A function to set the visual color of all buttons in the panel
function setButtonColors() {
  // Find all elements with the class 'color-btn' inside the colorPanel
  const buttons = colorPanel.querySelectorAll(".color-btn");

  // Loop through each button
  buttons.forEach((button) => {
    // dataset.color gets the value from the 'data-color' attribute in the HTML
    const color = button.dataset.color;
    // Set the button's background style to that color
    button.style.backgroundColor = color;
  });
}

// --- Event Listeners ---

// 1. Listen for clicks on the main color panel (Event Delegation)
colorPanel.addEventListener("click", function (event) {
  // Check if the specific element that was clicked (event.target) is a color button
  if (event.target.classList.contains("color-btn")) {
    // Get the color from the button's 'data-color' attribute
    const selectedColor = event.target.dataset.color;

    // Change the page's background color
    body.style.backgroundColor = selectedColor;
  }
});

// 2. Listen for clicks on the 'Add Color' button
addColorBtn.addEventListener("click", function () {
  // Get the color value from the input field and remove any extra spaces
  const newColor = customColorInput.value.trim();

  // Check if the user actually typed a value
  if (newColor) {
    // Create a new <button> element in memory
    const newButton = document.createElement("button");

    // Add the 'color-btn' class so it gets the right styles
    newButton.classList.add("color-btn");

    // Set its 'data-color' attribute to the user's input
    newButton.dataset.color = newColor;

    // Set the new button's visual background color
    newButton.style.backgroundColor = newColor;

    // Add the fully configured button to the DOM, inside the color panel
    colorPanel.appendChild(newButton);

    // Clear the input field for the next entry
    customColorInput.value = "";
  } else {
    alert("Please enter a valid color name or hex code.");
  }
});

// --- Initial Setup ---

// Call this function once when the script first runs to set up the initial button colors.
setButtonColors();
