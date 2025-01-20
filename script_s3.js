let isDrawing = false; // Flag to track if the user is drawing
let lastX = 0;
let lastY = 0;
let currentColor;
let colors = ['#ff0a8c', '#33FF57', '#3357FF']; // Array of colors to randomly pick
let canvas;

// Sound Elements
const drawAudio = document.getElementById('drawAudio');
const stickerAudio = document.getElementById('stickerAudio');
const eraserAudio = document.getElementById('eraserAudio');
const glassAudio = document.getElementById('glassAudio');
const colorAudio = document.getElementById('colorAudio');
const woodAudio = document.getElementById('woodAudio');  // Added woodAudio sound

function setup() {
  // Set up the canvas dimensions. Adjust as needed.
  canvas = createCanvas(730, 390);
  canvas.position(280, 70);
  canvas.parent('main-container'); // Attach the canvas to the 'main-container' div

  currentColor = random(colors); // Choose a random color from the array at the start
  strokeWeight(5); // Set the thickness of the line

  // Make the background transparent (remove the background call or set it to a transparent value)
  clear(); // Clears the canvas but does not set a background color
}

function draw() {
  // No need to add a background since we want the canvas to be transparent
}

// Start drawing when mouse is pressed
function mousePressed() {
  isDrawing = true;
  lastX = mouseX;
  lastY = mouseY;

  // Play the draw sound when drawing starts
  if (drawAudio.paused) {
    drawAudio.play();
  }
}

// Draw when mouse is dragged
function mouseDragged() {
  if (isDrawing) {
    stroke(currentColor); // Set the stroke color
    line(lastX, lastY, mouseX, mouseY); // Draw line from previous position to the current mouse position
    lastX = mouseX; // Update last position
    lastY = mouseY;
  }
}

// Stop drawing when mouse is released
function mouseReleased() {
  isDrawing = false;
}

// Change color randomly when "C" key is pressed
function keyPressed() {
  if (key === 'c' || key === 'C') {
    currentColor = random(colors); // Pick a random color from the colors array
    if (colorAudio.paused) {
      colorAudio.play();  // Play the color sound when the color is changed
    }
  }

  // Optionally clear the canvas when the spacebar is pressed
  if (key === ' ' || key === 'Space') {
    clear(); // Clear the canvas (remove all drawings)

    // Play the eraser sound when clearing the canvas
    if (eraserAudio.paused) {
      eraserAudio.play();
    }
  }

  // Play both sticker, wood, and glass sounds when pressing Enter
  if (key === 'Enter') {
    if (stickerAudio.paused) {
      stickerAudio.play(); // Play sticker sound
    }

    if (woodAudio.paused) {
      woodAudio.play(); // Play wood sound
    }

    // Optionally, you could also show the 'next3' button here if you want
    document.getElementById('next3').style.display = 'flex'; // Show next button
  }
}

// Wait until the document is ready
document.addEventListener('DOMContentLoaded', function () {
  // Get the next3 element
  const nextButton = document.getElementById('nextButton');

  // Play the glass sound when the next button is clicked
  nextButton.addEventListener('click', function () {
    if (glassAudio.paused) {
      glassAudio.play(); // Play glass sound
    }
    handleNavigation('end.html'); // Navigate after sound
  });
});

// Handle navigation with fade-out
function handleNavigation(targetPage) {
  document.body.classList.add('fade-out'); // Add fade-out animation

  // Wait for the fade-out animation to complete (1 second)
  setTimeout(function () {
    window.location.href = targetPage;  // Navigate after fade-out
  }, 1000);  // Wait for fade-out duration
}


