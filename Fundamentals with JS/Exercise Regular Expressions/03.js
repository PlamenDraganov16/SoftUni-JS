function barIncome(input) {
    let pattern = /%([A-Z][a-z]+)%.*?<(\w+)>.*?\|(\d+)\|.*?(\d+(\.\d+)?)\$/;
    let totalIncome = 0;

    for (let line of input) {
        if (line === "end of shift") break;
        let match = line.match(pattern);
        if (match) {
            let [_, customer, product, quantity, price] = match;
            let totalPrice = Number(quantity) * Number(price);
            totalIncome += totalPrice;
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

barIncome([
    "%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift"
]);
