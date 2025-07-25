const sounds = {
  correct: new Audio('/sounds/correct.mp3'),
  incorrect: new Audio('/sounds/incorrect.mp3'),
  streak: new Audio('/sounds/streak.mp3'),
  complete: new Audio('/sounds/complete.mp3'),
};

// Preload sounds
Object.values(sounds).forEach(sound => {
  sound.load();
});

const SoundEffect = {
  play: (name) => {
    const sound = sounds[name];
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch((err) => {
        console.warn(`Failed to play sound "${name}":`, err.message);
      });
    }
  },
  stop: () => {
    Object.values(sounds).forEach((sound) => {
      sound.pause();
      sound.currentTime = 0;
    });
  },
};

export default SoundEffect;
