const bgMusic = document.getElementById('bgMusic');
const musicIcon = document.getElementById('musicIcon');

if (bgMusic && musicIcon) {

    bgMusic.volume = 1.0; 

    const isMusicOn = localStorage.getItem('musicPlaying') === 'true';
    const savedTime = localStorage.getItem('musicTime');

    if (isMusicOn) {
        if (savedTime) {
            bgMusic.currentTime = parseFloat(savedTime);
        }
        
        bgMusic.play().then(() => {
            musicIcon.classList.remove('bi-volume-mute-fill');
            musicIcon.classList.add('bi-music-note-beamed');
        }).catch(error => {
            console.log("Auto-resume blocked by browser policy.");
            localStorage.setItem('musicPlaying', 'false');
        });
    }
    
    window.toggleMusic = function() {
        if (!bgMusic.paused) {
            bgMusic.pause();
            musicIcon.classList.remove('bi-music-note-beamed');
            musicIcon.classList.add('bi-volume-mute-fill');
            localStorage.setItem('musicPlaying', 'false');
        } else {
            bgMusic.play();
            musicIcon.classList.remove('bi-volume-mute-fill');
            musicIcon.classList.add('bi-music-note-beamed');
            localStorage.setItem('musicPlaying', 'true');
        }
    }

    window.addEventListener('beforeunload', () => {
        localStorage.setItem('musicTime', bgMusic.currentTime);
    });
}