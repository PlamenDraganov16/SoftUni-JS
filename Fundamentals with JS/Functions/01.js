function formatGrade(grade) {
    let description = "";

    if (grade < 3.00) {
        grade = 2;
        description = "Fail";
        console.log(`${description} (${grade})`);
        return;
    } else if (grade < 3.50) {
        description = "Poor";
    } else if (grade < 4.50) {
        description = "Good";
    } else if (grade < 5.50) {
        description = "Very good";
    } else {
        description = "Excellent";
    }

    console.log(`${description} (${grade.toFixed(2)})`);
}

formatGrade(2.99)