const audio = document.getElementById("radioPlayer");
const playButton = document.getElementById("playButton");
const volumeSlider = document.getElementById("volumeSlider");
const volumeLabel = document.getElementById("volumeLabel");
const songTitle = document.getElementById("songTitle");
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");

let isPlaying = false;

// Botón play/pause
playButton.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
    isPlaying = true;
  } else {
    audio.pause();
    playButton.innerHTML = '<i class="fas fa-play"></i>';
    isPlaying = false;
  }
});

// Volumen
volumeSlider.addEventListener("input", () => {
  const volume = volumeSlider.value;
  audio.volume = volume / 100;
  volumeLabel.textContent = `${volume}%`;
});

// Título de canción simulado
setInterval(() => {
  songTitle.textContent = "Transmitiendo en vivo...";
}, 10000);

// Menú hamburguesa
menuToggle.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
  menuToggle.classList.toggle("menu-opened");
}); 

// Cerrar menú al hacer clic fuera
window.addEventListener("click", (e) => {
  const isClickInsideMenu = sideMenu.contains(e.target);
  const isClickOnToggle = menuToggle.contains(e.target);
  const isClickOnInstall = document.querySelector(".install-app-centered")?.contains(e.target);

  if (!isClickInsideMenu && !isClickOnToggle && !isClickOnInstall) {
    sideMenu.classList.remove("open");
  }
});

