let intervalId;
let timeInSeconds = 60;
const display = document.getElementById('display');
const timeInput = document.getElementById('timeInput');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const resetButton = document.getElementById('resetButton');
const notification = document.getElementById('notification');

function updateDisplay() {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    display.textContent = formattedTime;
}

function startTimer() {
    timeInSeconds = parseInt(timeInput.value, 10);
    updateDisplay();

    intervalId = setInterval(() => {
        if (timeInSeconds > 0) {
            timeInSeconds--;
            updateDisplay();
        } else {
            clearInterval(intervalId);
            notifyCompletion();
        }
    }, 1000);

    start.disabled = true;
    stop.disabled = false;
    resetButton.disabled = true;
    timeInput.disabled = true;
}

function stopTimer() {
    clearInterval(intervalId);
    start.disabled = false;
    stop.disabled = true;
    resetButton.disabled = false;
    timeInput.disabled = false;
}

function resetTimer() {
    clearInterval(intervalId);
    timeInSeconds = parseInt(timeInput.value, 10);
    updateDisplay();
    start.disabled = false;
    stop.disabled = true;
    resetButton.disabled = true;
    timeInput.disabled = false;
}

function notifyCompletion() {
    notification.textContent = 'Timer reached 0!';
    notification.style.color = 'red';
}

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();
stop.disabled = true;
resetButton.disabled = true;