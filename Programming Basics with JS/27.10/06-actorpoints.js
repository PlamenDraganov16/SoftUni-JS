function actorPoints(input)
{
    let actorName = input[0];
    let points = Number(input[1]);

    for(let i = 3; i < input.length; i += 2)
    {   let judgeName = input[i] ;
        let judgePoints = Number(input[i + 1]);
        points +=(judgeName.length * judgePoints) / 2;

        if(points > 1250.5)
        {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
            return;
        }
    }
    console.log(`Sorry, ${actorName} you need ${(1250.5 - points).toFixed(1)} more!`);
}

actorPoints(["Zahari Baharov",

    "205",
    
    4,
    
    "Johnny Depp",
    
    "45",
    
    "Will Smith",
    
    "29",
    
    "Jet Lee",
    
    "10",
    
    "Matthew Mcconaughey",
    
    "39"])