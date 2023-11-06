function openGamePage() {
    var gamePopup = document.getElementById('gamePopup');
    gamePopup.style.display = 'flex';

    var floatingText = document.getElementById('floatingText');
    floatingText.classList.add('hidden');
}
var backgroundMusic = document.getElementById('backgroundMusic');

function toggleMute() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
}
