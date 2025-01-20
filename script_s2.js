document.addEventListener("DOMContentLoaded", function () {
    // Get references to all the necessary elements
    const cutAudio = document.getElementById('cutAudio');
    const stickerAudio = document.getElementById('stickerAudio');
    const blinkAudio = document.getElementById('blinkAudio');
    const glassAudio = document.getElementById('glassAudio');
    const bushes = document.querySelectorAll('.bush');  // Make sure you select all bush elements
    const flower1 = document.getElementById('flower1');
    const flower2 = document.getElementById('flower2');
    const nextButton = document.getElementById('nextButton');
    const next2Button = document.getElementById('next2');  // Reference to next2 button

    // Check if bushes are selected properly
    if (!bushes.length) {
        console.error("No bushes found!");
        return;
    }

    // Set blink sound volume to 30%
    blinkAudio.volume = 0.3;
    glassAudio.volume = 0.2;

    let bushesClicked = 0;
    const totalBushes = 3;  // Total number of bushes

    // Initially hide next2 button
    next2Button.style.display = 'none';

    // Function to handle bush click behavior
    bushes.forEach(bush => {
        bush.addEventListener('click', () => {
            // If bush has not been clicked, hide it
            if (!bush.classList.contains('clicked')) {
                bush.style.visibility = 'hidden';  // Hide bush but keep space in layout
                bush.classList.add('clicked');  // Mark the bush as clicked

                // Play cut sound on click
                if (cutAudio.paused) {
                    cutAudio.play();
                }
            }

            // After all bushes are clicked, hide flower2 and show flower1
            bushesClicked++;
            if (bushesClicked === totalBushes) {
                // Hide flower2
                flower2.style.display = 'none';

                // Show flower1
                flower1.style.display = 'block';

                // Play sticker and blink sounds
                if (stickerAudio.paused) {
                    stickerAudio.play();
                }

                if (blinkAudio.paused) {
                    blinkAudio.play();
                }

                // Show the next buttons
                nextButton.style.display = 'flex';
                next2Button.style.display = 'flex';  // Show next2 button
            }
        });
    });

    // Handle next button click
    nextButton.addEventListener('click', function () {
        // Play the glass sound
        if (glassAudio.paused) {
            glassAudio.play();
        }

        // Now, handle the page transition
        handleNavigation('stage3.html');
    });

    // Handle next2 button click (if you want a different behavior for next2)
    next2Button.addEventListener('click', function () {
        // You can add a different sound or behavior here if needed
        // Play the glass sound
        if (glassAudio.paused) {
            glassAudio.play();
        }

        // Now, handle the page transition for next2 button
        handleNavigation('stage3.html');
    });

    // Function to handle navigation with fade-out
    function handleNavigation(targetPage) {
        document.body.classList.add('fade-out'); // Add fade-out animation

        // Wait for the fade-out animation to complete (1 second)
        setTimeout(function () {
            window.location.href = targetPage;  // Navigate after fade-out
        }, 1000);  // Wait for fade-out duration
    }

});
