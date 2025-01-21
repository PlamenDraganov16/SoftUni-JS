function trainTheTrainers(array)
{
    let avgFromAll = 0;
    let totalPresent = 0;
    let juryNum = Number(array.shift());

    let index = 0;
    let command = array[index];

    while(command !== 'Finish')
    {
        let presentName = command;
        let presentGradeSum = 0;

        for(let counter = 1; counter <= juryNum; counter++)
        {
            index++;
            let currentGrade = Number(array[index]);
            presentGradeSum += currentGrade;
        }
        let avgPresent = presentGradeSum / juryNum;
        console.log(`${presentName} - ${avgPresent.toFixed(2)}.`);

        avgFromAll += avgPresent;
        totalPresent++;

        index++;
        command = array[index];
    }

    let avgGrade = avgFromAll / totalPresent;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`)
}

trainTheTrainers(["2",
        "While-Loop",
        "6.00",
        "5.50",
        "For-Loop",
        "5.84",
        "5.66",
        "Finish"]);