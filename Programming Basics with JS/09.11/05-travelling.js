function travelling(array)
{
    let index = 0;
    let command = array[index];

    while(command !== 'End')
    {
        let destination = command;
        index++

        let totalSavedMoney = 0;
        let neededMoney = Number(array[index])

        while(totalSavedMoney < neededMoney)
        {
            index++
            let savedMoney = Number(array[index]);
            totalSavedMoney += savedMoney;
        }
        
        console.log(`Going to ${destination}!`);

        index++;
        command = array[index];
    }
}

travelling(["Greece",
        "1000",
        "200",
        "200",
        "300",
        "100",
        "150",
        "240",
        "Spain",
        "1200",
        "300",
        "500",
        "193",
        "423",
        "End"]);
   
        
        