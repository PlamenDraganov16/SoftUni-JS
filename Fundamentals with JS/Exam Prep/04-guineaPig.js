function solve(arr)
{
    let food = Number(arr.shift());
    let foodInGrams = food * 1000;
    let hay = Number(arr.shift());
    let hayInGrams = hay * 1000;
    let cover = Number(arr.shift());
    let coverInGrams = cover * 1000;
    let weight = Number(arr.shift());
    let weightInGrams = weight * 1000;
    let isValid = true;

    for(let i = 1; i <= 30; i++)
    {
        foodInGrams -= 300;
        if(i % 2 == 0) 
        {
            hayInGrams -= 0.05 * foodInGrams;
        }
        if(i % 3 == 0)
        {
            coverInGrams -= (1 / 3) *  weightInGrams;
        }
        if(foodInGrams <= 0 || hayInGrams <= 0 || coverInGrams <= 0) 
        {
            isValid = false;
            break;
        }

    }
    if(isValid) console.log(`Everything is fine! Puppy is happy! Food: ${(foodInGrams / 1000).toFixed(2)}, Hay: ${(hayInGrams / 1000).toFixed(2)}, Cover: ${(coverInGrams / 1000).toFixed(2)}.`);
    else console.log("Merry must go to the pet store!")
    

}

solve((["10", 
    "5", 
    "5.2", 
    "1"])
    )