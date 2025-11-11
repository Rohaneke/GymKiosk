function showWorkout(type) {
    const workoutInfo = document.getElementById("workout-info");
    let content = "";

    if (type === "push") {
        content = `
            <h3>Push Day</h3>
            <ul>
                <li>Bench Press</li>
                <li>Overhead Shoulder Press</li>
                <li>Tricep Dips</li>
                <li>Lateral Raises</li>
            </ul>
        `;
    } else if (type === "pull") {
        content = `
            <h3>Pull Day</h3>
            <ul>
                <li>Pull-Ups</li>
                <li>Barbell Rows</li>
                <li>Face Pulls</li>
                <li>Bicep Curls</li>
            </ul>
        `;
    } else if (type === "legs") {
        content = `
            <h3>Leg Day</h3>
            <ul>
                <li>Squats</li>
                <li>Romanian Deadlifts</li>
                <li>Leg Press</li>
                <li>Calf Raises</li>
            </ul>
        `;
    }

    workoutInfo.innerHTML = content;
}
