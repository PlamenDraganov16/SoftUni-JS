function solve(percentage)
{
    let completed = percentage / 10; 
    let bar = "%".repeat(completed) + ".".repeat(10 - completed); 

    if (percentage === 100) {
        console.log("100% Complete!");
        console.log(`[${bar}]`);
    } else {
        console.log(`${percentage}% [${bar}]`);
        console.log("Still loading...");
    }
}

solve(50)