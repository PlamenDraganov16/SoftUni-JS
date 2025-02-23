function processSchoolRegister(input) {
    let schoolRegister = {};

    for (let entry of input) {
        let match = entry.match(/Student name: (.*), Grade: (\d+), Graduated with an average score: ([\d.]+)/);
        if (!match) continue;

        let [ ,name, grade, score] = match;
        grade = Number(grade);
        score = Number(score);

        if (score >= 3) {
            let nextGrade = grade + 1;
            if (!schoolRegister[nextGrade]) {
                schoolRegister[nextGrade] = { students: [], totalScore: 0, count: 0 };
            }
            schoolRegister[nextGrade].students.push(name);
            schoolRegister[nextGrade].totalScore += score;
            schoolRegister[nextGrade].count++;
        }
    }

    let sortedGrades = Object.keys(schoolRegister).sort((a, b) => a - b);
    for (let grade of sortedGrades) {
        let students = schoolRegister[grade].students.join(", ");
        let averageScore = (schoolRegister[grade].totalScore / schoolRegister[grade].count).toFixed(2);
        console.log(`${grade} Grade`);
        console.log(`List of students: ${students}`);
        console.log(`Average annual score from last year: ${averageScore}\n`);
    }
}


processSchoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);