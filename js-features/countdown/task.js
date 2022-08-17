const timer = document.getElementById('timer');

function addTimer () {
    if (timer.textContent > 0) {
        timer.textContent -= 1;
    } else {
        alert('Вы победили в конкурсе!');
        clearInterval(timerInterval);
        }
}

let timerInterval = setInterval (addTimer, 1000)