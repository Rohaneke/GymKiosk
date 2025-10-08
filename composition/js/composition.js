const scanButton = document.getElementById('scanButton');
const gaugeFill = document.getElementById('gaugeFill');
const gaugeText = document.getElementById('gaugeText');
const bodyFat = document.getElementById('bodyFat');
const muscleMass = document.getElementById('muscleMass');

scanButton.addEventListener('click', function() {
    scanButton.disabled = true;
    scanButton.textContent = 'Scanning...';
    
    const randomScore = Math.floor(Math.random() * 40) + 60;
    const randomBodyFat = Math.floor(Math.random() * 10) + 15;
    const randomMuscleMass = Math.floor(Math.random() * 15) + 35;
    
    setTimeout(function() {
        const degrees = (randomScore / 100) * 180 - 90;
        gaugeFill.style.transform = 'translateX(-50%) rotate(' + degrees + 'deg)';
        gaugeText.textContent = randomScore + '%';
        bodyFat.textContent = randomBodyFat + '%';
        muscleMass.textContent = randomMuscleMass + '%';
        
        scanButton.textContent = 'Start Scan';
        scanButton.disabled = false;
    }, 2000);
});
