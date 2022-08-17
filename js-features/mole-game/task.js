const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');
const getHole = function(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    let games = getHole(i);

    games.onclick = function () {
        if (games.className.includes('hole_has-mole')) {
            deadCounter.textContent++;
        } else lostCounter.textContent++;

        if (deadCounter.textContent == 10) {
            alert('Ты победил!');
            deadCounter.textContent = 0;
            lostCounter.textContent = 0;
        } else if (lostCounter.textContent == 5) {
            alert('Ты проиграл(');
            deadCounter.textContent = 0;
            lostCounter.textContent = 0;
        }
    }
}