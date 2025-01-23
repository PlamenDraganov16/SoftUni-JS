function solve(day)
{
    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 'Saturday', 'Sunday'];

    if(day >= 1 && day <=7)
    {
        switch(day)
        {
            case 1:
                console.log(week[0]);
                break;
            case 2:
                console.log(week[1])
                break;
            case 3:
                console.log(week[2])
                break;
            case 4:
                console.log(week[3])
                break;
            case 5:
                console.log(week[4]);
                break;
            case 6:
                console.log(week[5]);
                break;
            case 7:
                console.log(week[6]);
                break;
        }
    }
    else console.log("Invalid day!");
}

solve(4)