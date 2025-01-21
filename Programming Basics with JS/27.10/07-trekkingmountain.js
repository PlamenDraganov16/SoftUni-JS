function trekkingMania(input)
{
    let groups = Number(input[0]);

    let musala = 0;
    let montblanc = 0;
    let kilimandzharo = 0;
    let k2 = 0;
    let everest = 0;
    
    for(let i = 1; i <= groups; i++)
    {   
        let currentPeople = Number(input[i])

        if(currentPeople <= 5)
            musala += currentPeople;
        else if(currentPeople <= 12)
            montblanc += currentPeople;
        else if(currentPeople <= 25)
            kilimandzharo += currentPeople
        else if(currentPeople <= 40)
            k2 += currentPeople;
        else 
            everest += currentPeople;
    }

    let totalPeople = musala + montblanc + kilimandzharo + k2 + everest;

console.log(`${((musala / totalPeople) * 100).toFixed(2)}%`);
console.log(`${((montblanc / totalPeople) * 100).toFixed(2)}%`);
console.log(`${((kilimandzharo / totalPeople) * 100).toFixed(2)}%`);
console.log(`${((k2 / totalPeople) * 100).toFixed(2)}%`);
console.log(`${((everest / totalPeople) * 100).toFixed(2)}%`);

}

trekkingMania(["5",

    "25",
    
    "41",
    
    "31",
    
    "250",
    
    "6"])