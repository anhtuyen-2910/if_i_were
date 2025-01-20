// Second element - Change color when "H" is pressed
let isColorChanged = false;
const startText2 = document.querySelector('#instruction1'); // Second text element

function changeColorOnKeyPress(event) {
    if (event.key === "h" || event.key === "H") {
        if (isColorChanged) {
            startText2.style.color = "#ff63e4";  // Original color
        } else {
            startText2.style.color = "#00e38e";  // New color
        }
        isColorChanged = !isColorChanged;  // Toggle the state
    }
}


document.addEventListener('keydown', changeColorOnKeyPress);

// Track visibility state for #cat2 and #next1
let isCat2Visible = true;  // Initially, cat2 is visible
let isNext1Visible = false; // Initially, #next1 is hidden

// Add event listener for keydown event
document.addEventListener('keydown', function (event) {
    if (event.key === "h" || event.key === "H") {
        // Toggle visibility of #cat2 and #next1
        if (isCat2Visible) {
            document.getElementById('cat2').style.display = 'none';  // Hide cat2
            document.getElementById('next1').style.display = 'flex';  // Show next1
        } else {
            document.getElementById('cat2').style.display = 'block';  // Show cat2
            document.getElementById('next1').style.display = 'none';  // Hide next1
        }

        // Toggle the state
        isCat2Visible = !isCat2Visible;
        isNext1Visible = !isNext1Visible;
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === "i" || event.key === "I") {
        // Redirect to stage1.html when "I" is pressed
        window.location.href = 'stage1.html';  // Change this path if necessary
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === "r" || event.key === "R") {
        // Redirect to stage1.html when "I" is pressed
        window.location.href = 'index.html';  // Change this path if necessary
    }
});

