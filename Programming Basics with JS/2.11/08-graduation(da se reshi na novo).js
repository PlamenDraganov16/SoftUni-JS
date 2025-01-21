function graduation(array)
{
    let name = array[0]
    let year = 1;
    let failCount = 0;
    let gradesum = 0;

    let index = 1;
    let grade = Number(array[index]);

    while(year <= 12)
    {
        if(grade < 4) {
            failCount++

        if(failCount > 1){
            console.log(`${name} has been excluded at ${year} grade`);
            return;
        }
    }
    else{
        year++
    }

    gradesum += grade;

    index++;
    grade = Number(array[index])

    }

    let avgGrade = gradesum /12

    console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
}

graduation(["Gosho", 
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])
    ;