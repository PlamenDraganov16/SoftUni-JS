function juiceFlavors(input) {
    const juiceQuantities = {};
    const bottles = {};

    for (const line of input) {
        const [juice, quantityStr] = line.split(' => ');
        const quantity = Number(quantityStr);

        if (!juiceQuantities[juice]) {
            juiceQuantities[juice] = 0;
        }
        juiceQuantities[juice] += quantity;

        if (juiceQuantities[juice] >= 1000) {
            const bottleCount = Math.floor(juiceQuantities[juice] / 1000);
            juiceQuantities[juice] %= 1000; 

            if (!bottles[juice]) {
                bottles[juice] = 0;
            }
            bottles[juice] += bottleCount;
        }
    }

    for (const [juice, count] of Object.entries(bottles)) {
        console.log(`${juice} => ${count}`);
    }
}
