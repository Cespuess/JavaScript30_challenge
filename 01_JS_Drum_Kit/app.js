// Selección elementos

const keyH = document.getElementById('h');
const keyO = document.getElementById('o');
const keyB = document.getElementById('b');
const keyC = document.getElementById('c');
const keyT = document.getElementById('t');
const keyS = document.getElementById('s');
const keyK = document.getElementById('k');

const dumpKeys = 'hobctskHOBCTSK'

// Funciones

function pressedKey(key) {
  if (key === 'k') {
    const audio = new Audio('./sounds/kick.wav');
    loopAudio(audio);
    keyTransform(keyK);
  } else if (key === 'h') {
    const audio = new Audio('./sounds/hihat.wav');
    loopAudio(audio);
    keyTransform(keyH);
  } else if (key === 'o') {
    const audio = new Audio('./sounds/openhat.wav');
    loopAudio(audio);
    keyTransform(keyO);
  } else if (key === 'b') {
    const audio = new Audio('./sounds/boom.wav');
    loopAudio(audio);
    keyTransform(keyB);
  } else if (key === 'c') {
    const audio = new Audio('./sounds/clap.wav');
    loopAudio(audio);
    keyTransform(keyC);
  } else if (key === 't') {
    const audio = new Audio('./sounds/tom.wav');
    loopAudio(audio);
    keyTransform(keyT);
  } else if (key === 's') {
    const audio = new Audio('./sounds/snare.wav');
    loopAudio(audio);
    keyTransform(keyS);
  }
}

function loopAudio(sound) {
  sound.pause(); // se pausa y se pone a cero por si se vuelve a pulsar la tecla antes de que haya acabado de reproducirse el sonido.
  sound.currentTime = 0;
  sound.play();
}

function keyTransform(dump) {
  dump.style.border = 'solid 6px yellow';
  dump.style.transform = 'scale(1.2)';
  setTimeout(() => {
    dump.style.border = 'solid 4px black';
    dump.style.transform = 'scale(1)';
  }, 100);
}


// Event Listeners

document.addEventListener('keydown', (e) => {
  if (dumpKeys.includes(e.key)) { //comprobamos que la tecla pulsada corresponda a un tambor.
    let key = e.key.toLowerCase();
    pressedKey(key);
  }  
});
