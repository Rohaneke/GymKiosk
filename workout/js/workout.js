function navigateTo(page) {
    window.location.href = page;
}

function showWorkout(type) {
    const workoutInfo = document.getElementById('workout-info');
    let content = '';

    if (type === 'push') {
        content = '<h3>Push Workout</h3><ul><li>Bench Press</li><li>Overhead Press</li><li>Tricep Dips</li></ul>';
    } else if (type === 'pull') {
        content = '<h3>Pull Workout</h3><ul><li>Pull-Ups</li><li>Barbell Rows</li><li>Bicep Curls</li></ul>';
    } else if (type === 'legs') {
        content = '<h3>Legs Workout</h3><ul><li>Squats</li><li>Deadlifts</li><li>Lunges</li></ul>';
    }

    workoutInfo.innerHTML = content;
}
