document.addEventListener("DOMContentLoaded", function () {
  const catAudio = document.getElementById('catAudio');
  const stickerAudio = document.getElementById('stickerAudio');
  const catHappyAudio = document.getElementById('catHappyAudio');
  const glassAudio = document.getElementById('glassAudio');
  const cat1 = document.getElementById('cat1');
  const nextButton = document.getElementById('nextButton');

  // Set initial volume to 0.5 (adjust as necessary)
  catAudio.volume = 1.0;
  stickerAudio.volume = 0.5;
  catHappyAudio.volume = 0.2;
  glassAudio.volume = 0.2; 

  // Function to play cat-angry sound when cat1 is clicked
  cat1.addEventListener('click', function () {
    if (catAudio.paused) {
      catAudio.play();
    }
  });

  // Function to handle key press (H) to play both sounds
  window.addEventListener('keydown', function (event) {
    if (event.key === 'h' || event.key === 'H') {
      // Play both sticker and cat-happy sounds simultaneously
      if (stickerAudio.paused) {
        stickerAudio.play();
      }
      if (catHappyAudio.paused) {
        catHappyAudio.play();
      }
    }
  });

  // Add click event listener to "next" button
  nextButton.addEventListener('click', function () {
    // Play glass sound first
    if (glassAudio.paused) {
      glassAudio.play();
    }
    glassAudio.onended = function () {
      console.log("Glass sound finished. Ready to navigate.");
    }
    // Now, handle the page transition
    handleNavigation('stage2.html');
  });

});

function handleNavigation(targetPage) {
  document.body.classList.add('fade-out'); // Add fade-out animation

  // Wait for the fade-out animation to complete (1 second)
  setTimeout(function () {
    window.location.href = targetPage;  // Navigate after fade-out
  }, 1000);  // Wait for fade-out duration
}

document.getElementById('nextButton').addEventListener('click', () => handleNavigation('stage2.html'));