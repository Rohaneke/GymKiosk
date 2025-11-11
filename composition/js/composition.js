// bereken functie
function calculate() {
    // Get all the values
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var activity = document.getElementById('activity').value;

    // Check of alle velden zijn ingevuld
    if (weight == '' || height == '' || age == '' || gender == '' || activity == '') {
        alert('Vul alle velden in!');
        return;
    }

    // verander naar nummers
    weight = parseFloat(weight);
    height = parseFloat(height);
    age = parseInt(age);
    activity = parseFloat(activity);

    // bereken bmr
    var heightM = height / 100;
    var bmi = weight / (heightM * heightM);
    bmi = Math.round(bmi * 10) / 10;

    // bereken bmr
    var bmr = 0;
    if (gender == 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    bmr = Math.round(bmr);

    // bereken caloriebehoefte
    var tdee = bmr * activity;
    tdee = Math.round(tdee);

    // Calculate ideal weight
    var minWeight = 18.5 * heightM * heightM;
    var maxWeight = 24.9 * heightM * heightM;
    minWeight = Math.round(minWeight * 10) / 10;
    maxWeight = Math.round(maxWeight * 10) / 10;
    var idealWeight = minWeight + ' - ' + maxWeight;

    // berekend lichaams vet procent
    var bodyFat = 0;
    if (gender == 'male') {
        bodyFat = (1.20 * bmi) + (0.23 * age) - 16.2;
    } else {
        bodyFat = (1.20 * bmi) + (0.23 * age) - 5.4;
    }
    bodyFat = Math.round(bodyFat * 10) / 10;

    // krijg de bmi
    var category = '';
    var color = '';
    if (bmi < 18.5) {
        category = 'Ondergewicht';
        color = '#3498db';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normaal Gewicht';
        color = '#2ecc71';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overgewicht';
        color = '#f39c12';
    } else {
        category = 'Obesitas';
        color = '#e74c3c';
    }

    // Updatet de pagina
    document.getElementById('bmiValue').innerHTML = bmi;
    document.getElementById('bmiCategory').innerHTML = category;
    document.getElementById('bmiCategory').style.color = color;

    document.getElementById('bmrValue').innerHTML = bmr + ' kcal/dag';
    document.getElementById('tdeeValue').innerHTML = tdee + ' kcal/dag';
    document.getElementById('idealWeight').innerHTML = idealWeight + ' kg';
    document.getElementById('bodyFat').innerHTML = bodyFat + '%';

    // beweeg de pijl op de meter
    var angle = 0;
    if (bmi < 15) {
        angle = -90;
    } else if (bmi > 35) {
        angle = 90;
    } else {
        angle = ((bmi - 15) / 20) * 180 - 90;
    }
    document.getElementById('needle').style.transform = 'rotate(' + angle + 'deg)';

    // Toon resultaten
    document.getElementById('results').style.display = 'block';
}
