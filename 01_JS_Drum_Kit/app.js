// Selección elementos

const keyH = document.getElementById('h');
const keyO = document.getElementById('o');
const keyB = document.getElementById('b');
const keyC = document.getElementById('c');
const keyT = document.getElementById('t');
const keyS = document.getElementById('s');
const keyK = document.getElementById('k');

// Funciones

function loopAudio(sound) {
  sound.pause(); // se pausa y se pone a cero por si se vuelve a pulsar la tecla antes de que haya acabado de reproducirse el sonido.
  sound.currentTime = 0;
  sound.play();
}

function soundKey(e) {
  let key = e.key;
  if (key === 'k' || key === 'K') {
    const audio = new Audio('./sounds/kick.wav');
    loopAudio(audio);
  } else if (key === 'h' || key === 'H') {
    const audio = new Audio('./sounds/hihat.wav');
    loopAudio(audio);
  } else if (key === 'o' || key === 'O') {
    const audio = new Audio('./sounds/openhat.wav');
    loopAudio(audio);
  } else if (key === 'b' || key === 'B') {
    const audio = new Audio('./sounds/boom.wav');
    loopAudio(audio);
  } else if (key === 'c' || key === 'C') {
    const audio = new Audio('./sounds/clap.wav');
    loopAudio(audio);
  } else if (key === 't' || key === 'T') {
    const audio = new Audio('./sounds/tom.wav');
    loopAudio(audio);
  } else if (key === 's' || key === 'S') {
    const audio = new Audio('./sounds/snare.wav');
    loopAudio(audio);
  }
}


// Event Listeners

document.addEventListener('keydown', (e) => {
  soundKey(e);
});