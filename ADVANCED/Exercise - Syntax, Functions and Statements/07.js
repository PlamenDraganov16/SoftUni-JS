function cookingByNumbers(num, ...operations) {
    num = Number(num);
    
    let operationsMap = {
        chop: n => n / 2,
        dice: n => Math.sqrt(n),
        spice: n => n + 1,
        bake: n => n * 3,
        fillet: n => n * 0.8
    };
    
    for (let op of operations) {
        num = operationsMap[op](num);
        console.log(num);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
