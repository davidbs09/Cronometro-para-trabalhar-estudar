let timer = null;
let startTime = 0;
let elapsed = 0;
let running = false;

const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const centisecondsEl = document.getElementById('centiseconds');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');

function updateDisplay(time) {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const centiseconds = time % 100;
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
    centisecondsEl.textContent = String(centiseconds).padStart(2, '0');
}

function tick() {
    const now = Date.now();
    elapsed = Math.floor((now - startTime) / 10);
    updateDisplay(elapsed);
}

startBtn.onclick = function() {
    if (!running) {
        running = true;
        startBtn.textContent = 'Pausar';
        startTime = Date.now() - elapsed * 10;
        timer = setInterval(tick, 10);
    } else {
        running = false;
        startBtn.textContent = 'Iniciar';
        clearInterval(timer);
    }
};

resetBtn.onclick = function() {
    running = false;
    clearInterval(timer);
    elapsed = 0;
    updateDisplay(0);
    startBtn.textContent = 'Iniciar';
};

// Inicializa display
updateDisplay(0);