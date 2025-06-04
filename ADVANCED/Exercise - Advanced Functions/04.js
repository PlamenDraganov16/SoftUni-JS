function solution() {
    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple:     { carbohydrate: 1, flavour: 2 },
        lemonade:  { carbohydrate: 10, flavour: 20 },
        burger:    { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs:      { protein: 5, fat: 1, flavour: 1 },
        turkey:    { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    return function(input) {
        const [command, item, qtyStr] = input.split(' ');
        const quantity = Number(qtyStr);

        if (command === 'restock') {
            stock[item] += quantity;
            return 'Success';
        }

        if (command === 'prepare') {
            const recipe = recipes[item];
            const needed = {};

            for (let ingredient in recipe) {
                needed[ingredient] = recipe[ingredient] * quantity;
                if (stock[ingredient] < needed[ingredient]) {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            for (let ingredient in needed) {
                stock[ingredient] -= needed[ingredient];
            }

            return 'Success';
        }

        if (command === 'report') {
            return Object.entries(stock)
                .map(([k, v]) => `${k}=${v}`)
                .join(' ');
        }
    };
}