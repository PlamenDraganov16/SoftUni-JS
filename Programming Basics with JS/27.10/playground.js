function multiTable(array)
{
    let n = Number(array[0]);

    let p1=0;
    let p2=0;
    let p3=0;
    let p4=0;
    let p5=0;

    for(let i = 1; i<=n;i++)
    {
        let currentNum = Number(array[i])

        if(currentNum<200) p1++;
        else if(currentNum<400) p2++;
        else if(currentNum<600) p3++;
        else if(currentNum<800) p4++;
        else p5++;
    }

    console.log(`${((p1 / n)*100).toFixed(2)}%`);
    console.log(`${((p2 / n)*100).toFixed(2)}%`);
    console.log(`${((p3 / n)*100).toFixed(2)}%`);
    console.log(`${((p4 / n)*100).toFixed(2)}%`);
    console.log(`${((p5 / n)*100).toFixed(2)}%`);
}

multiTable([3,1,2,999])



function actorPoints(array)
{
    let actorName = array[0]
    let actorPoints = Number(array[1])
    

    for(let i = 3; i <=array.length;i+=2)
    {
        
    }
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