function buildWall(heights) {
    let sections = heights.map(Number);
    let dailyConcreteUsage = [];
    const CONCRETE_PER_FOOT = 195;
    const COST_PER_CUBIC_YARD = 1900;
    const TARGET_HEIGHT = 30;

    while (sections.some(height => height < TARGET_HEIGHT)) {
        let dailyUsage = 0;

        for (let i = 0; i < sections.length; i++) {
            if (sections[i] < TARGET_HEIGHT) {
                sections[i]++;
                dailyUsage += CONCRETE_PER_FOOT;
            }
        }

        dailyConcreteUsage.push(dailyUsage);
    }

    let totalConcrete = dailyConcreteUsage.reduce((sum, amount) => sum + amount, 0);
    let totalCost = totalConcrete * COST_PER_CUBIC_YARD;

    console.log(dailyConcreteUsage.join(", "));
    console.log(`${totalCost} pesos`);
}

buildWall([21, 25, 28]); 

