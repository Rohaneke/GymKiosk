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

    // bereken bmi
    var heightM = height / 100;
    var bmi = weight / (heightM * heightM);
    bmi = Math.round(bmi * 10) / 10;

    // krijg de bmi categorie
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
