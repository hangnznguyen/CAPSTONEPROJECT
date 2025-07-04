const sounds = {
    correct: new Audio('/sounds/correct.mp3'),
    incorrect: new Audio('/sounds/incorrect.mp3'),
    streak: new Audio('/sounds/streak.mp3'),
    complete: new Audio('/sounds/complete.mp3')
  };
  
  const SoundEffect = {
    play(type) {
      const sound = sounds[type];
      if (sound) {
        sound.currentTime = 0; // rewind to start
        sound.play().catch((e) => console.warn(`Sound ${type} failed:`, e));
      }
    }
  };
  
  export default SoundEffect;