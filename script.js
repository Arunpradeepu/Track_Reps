let progressValue = 0;
let progressCircle = document.getElementById('progress-circle');
let progressValueElement = document.getElementById('progress-value');

let interval = setInterval(() => {
    progressValue += 1;
    progressValueElement.textContent = `${progressValue}%`;
    progressCircle.style.background = `conic-gradient(#4caf50 ${progressValue * 3.6}deg, #ddd 0deg)`;

    if (progressValue >= 100) {
        clearInterval(interval);
    }
}, 50);
