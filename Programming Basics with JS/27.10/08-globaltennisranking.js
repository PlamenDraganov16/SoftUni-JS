function tennisRanking(input)
{
    let matches = Number(input[0]);
    let startingPoint = Number(input[1]);
    let counterWins = 0;
    let counter = 0;

    for(let i = 2; i <= input.length; i++)
    {
        if(input[i] === 'W')
        {
            startingPoint += 2000;
            counterWins++
            counter += 2000;
        }
        else if(input[i] === 'F')
        {
            startingPoint += 1200;
            counter += 1200;
        }
        else if(input[i] === 'SF')
        {
            startingPoint += 720;
            counter += 720;
        }
    }

    let averagePoints = counter / matches;
    let percentageWon = (counterWins / matches * 100)

    console.log(`Final points: ${Math.floor(startingPoint)}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${percentageWon.toFixed(2)}%`);
}

tennisRanking(["5", "1400", "F", "SF", "W", "W", "SF"])