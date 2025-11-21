import audioUrl from '../assets/audio/audio.wav';

let audio: HTMLAudioElement | null = null;
const volume = 0.2;

function initializeAudio() {
    if (!audio) {
        audio = new Audio(audioUrl);
        audio.loop = true;
        audio.volume = volume;
    }
}

export function playBackgroundMusic() {
    initializeAudio();
    if (audio) {
        audio.play().catch(error => {
            console.warn("Autoplay bloqueado. El usuario debe interactuar para iniciar la música.", error);
        });
    }
}

export function pauseBackgroundMusic() {
    if (audio) {
        audio.pause();
    }
}

export function stopBackgroundMusic() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
        audio = null;
    }
}