// ========================================
// LITTLE MOMENTS — BIRTHDAY SURPRISE
// Complete JavaScript
// ========================================

// 1. SELECT HTML ELEMENTS

const welcomeScreen = document.getElementById("welcomeScreen");
const surpriseScreen = document.getElementById("surpriseScreen");

const surpriseBtn = document.getElementById("surpriseBtn");
const celebrateBtn = document.getElementById("celebrateBtn");

const musicBtn = document.getElementById("musicBtn");
const birthdayMusic = document.getElementById("birthdayMusic");

const confettiContainer = document.getElementById("confettiContainer");

// 2. OPEN THE BIRTHDAY SURPRISE

surpriseBtn.addEventListener("click", function () {
  // Hide the welcome screen.
  welcomeScreen.hidden = true;

  // Show the birthday surprise.
  surpriseScreen.hidden = false;

  // Launch pastel confetti.
  launchConfetti();

  // Scroll to the top.
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// 3. PLAY AND PAUSE BACKGROUND MUSIC

musicBtn.addEventListener("click", async function () {
  if (birthdayMusic.paused) {
    try {
      // Play the music.
      await birthdayMusic.play();

      musicBtn.textContent = "♫ Pause music";
      musicBtn.setAttribute("aria-pressed", "true");
    } catch (error) {
      // Handle music errors.
      musicBtn.textContent = "♫ Music unavailable";
      musicBtn.setAttribute("aria-pressed", "false");

      console.error("Could not play music. Check your music.mp3 file.", error);
    }
  } else {
    // Pause the music.
    birthdayMusic.pause();

    musicBtn.textContent = "♫ Play music";
    musicBtn.setAttribute("aria-pressed", "false");
  }
});

// 4. CREATE PASTEL CONFETTI ANIMATION

function launchConfetti() {
  const colors = ["#DCEAF5", "#B9D2E8", "#8BA9C4", "#F4EAF0", "#FFFFFF"];

  // Create 70 confetti pieces.
  for (let i = 0; i < 70; i++) {
    const piece = document.createElement("span");

    piece.classList.add("confetti");

    // Random horizontal position.
    piece.style.left = Math.random() * 100 + "vw";

    // Random pastel colour.
    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    // Random falling speed.
    piece.style.setProperty("--duration", 2 + Math.random() * 3 + "s");

    // Random sideways movement.
    piece.style.setProperty("--drift", (Math.random() - 0.5) * 180 + "px");

    // Random animation delay.
    piece.style.animationDelay = Math.random() * 0.8 + "s";

    // Random size.
    piece.style.width = 4 + Math.random() * 5 + "px";

    piece.style.height = 7 + Math.random() * 8 + "px";

    // Add confetti to the page.
    confettiContainer.appendChild(piece);

    // Remove confetti after animation ends.
    piece.addEventListener("animationend", function () {
      piece.remove();
    });
  }
}

// 5. OPEN A NEW HTML PAGE

celebrateBtn.addEventListener("click", function () {
  // Navigate to the second birthday page.
  window.location.href = "index2.html";
});

// 6. UPDATE MUSIC BUTTON WHEN MUSIC CHANGES

birthdayMusic.addEventListener("play", function () {
  musicBtn.textContent = "♫ Pause music";
  musicBtn.setAttribute("aria-pressed", "true");
});

birthdayMusic.addEventListener("pause", function () {
  musicBtn.textContent = "♫ Play music";
  musicBtn.setAttribute("aria-pressed", "false");
});

// 7. HANDLE MUSIC FILE ERRORS

birthdayMusic.addEventListener("error", function () {
  musicBtn.textContent = "♫ Music unavailable";
  musicBtn.setAttribute("aria-pressed", "false");

  console.error(
    "Music file not found or could not be loaded. " +
      "Make sure music.mp3 is in your project folder.",
  );
});
