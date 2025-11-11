// Calculate function
function calculate() {
    // Get all the values
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var activity = document.getElementById('activity').value;

    // Check if empty
    if (weight == '' || height == '' || age == '' || gender == '' || activity == '') {
        alert('Vul alle velden in!');
        return;
    }

    // Convert to numbers
    weight = parseFloat(weight);
    height = parseFloat(height);
    age = parseInt(age);
    activity = parseFloat(activity);

    // Calculate BMI
    var heightM = height / 100;
    var bmi = weight / (heightM * heightM);
    bmi = Math.round(bmi * 10) / 10;

    // Calculate BMR
    var bmr = 0;
    if (gender == 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    bmr = Math.round(bmr);

    // Calculate TDEE
    var tdee = bmr * activity;
    tdee = Math.round(tdee);

    // Calculate ideal weight
    var minWeight = 18.5 * heightM * heightM;
    var maxWeight = 24.9 * heightM * heightM;
    minWeight = Math.round(minWeight * 10) / 10;
    maxWeight = Math.round(maxWeight * 10) / 10;
    var idealWeight = minWeight + ' - ' + maxWeight;

    // Calculate body fat
    var bodyFat = 0;
    if (gender == 'male') {
        bodyFat = (1.20 * bmi) + (0.23 * age) - 16.2;
    } else {
        bodyFat = (1.20 * bmi) + (0.23 * age) - 5.4;
    }
    bodyFat = Math.round(bodyFat * 10) / 10;

    // Get BMI category
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

    // Calculate calories
    var cutCal = tdee - 500;
    var maintainCal = tdee;
    var bulkCal = tdee + 500;

    // Calculate macros
    var protein = Math.round((maintainCal * 0.30) / 4);
    var carbs = Math.round((maintainCal * 0.40) / 4);
    var fats = Math.round((maintainCal * 0.30) / 9);

    // Update the page
    document.getElementById('bmiValue').innerHTML = bmi;
    document.getElementById('bmiCategory').innerHTML = category;
    document.getElementById('bmiCategory').style.color = color;

    document.getElementById('bmrValue').innerHTML = bmr + ' kcal/dag';
    document.getElementById('tdeeValue').innerHTML = tdee + ' kcal/dag';
    document.getElementById('idealWeight').innerHTML = idealWeight + ' kg';
    document.getElementById('bodyFat').innerHTML = bodyFat + '%';

    document.getElementById('cutCalories').innerHTML = cutCal + ' kcal/dag';
    document.getElementById('maintainCalories').innerHTML = maintainCal + ' kcal/dag';
    document.getElementById('bulkCalories').innerHTML = bulkCal + ' kcal/dag';

    document.getElementById('proteinValue').innerHTML = protein + ' g';
    document.getElementById('carbsValue').innerHTML = carbs + ' g';
    document.getElementById('fatsValue').innerHTML = fats + ' g';

    // Move the needle
    var angle = 0;
    if (bmi < 15) {
        angle = -90;
    } else if (bmi > 35) {
        angle = 90;
    } else {
        angle = ((bmi - 15) / 20) * 180 - 90;
    }
    document.getElementById('needle').style.transform = 'rotate(' + angle + 'deg)';

    // Show results
    document.getElementById('results').style.display = 'block';
}
