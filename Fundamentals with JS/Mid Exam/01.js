

function solve2(arr) {
    let numCityVisits = Number(arr.shift()); 
    let count = 0;
    let totalProfit = 0;

     for (let i = 0; i < arr.length; i += 3) {
        count++;

        let cityName = arr[i];
        let earnedMoney = Number(arr[i + 1]); 
        let expenses = Number(arr[i + 2]); 

        if (count % 5 === 0) {
            
            earnedMoney *= 0.9;
        } else if (count % 3 === 0) {
        
            expenses *= 1.5;
        }
 
        let profit = earnedMoney - expenses;
        totalProfit += profit;
    
        console.log(`In ${cityName} Burger Bus earned ${profit.toFixed(2)} leva.`);
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}
    
solve2([
    "3",
    "Sofia",
    "895.67",
    "213.50",
    "Plovdiv",
    "2563.20",
    "890.26",
    "Burgas",
    "2360.55",
    "600.00"
]);
    
    