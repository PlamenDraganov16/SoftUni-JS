function furniture(input) {
    let pattern = />>([A-Z][a-zA-Z]*)<<(\d+(\.\d+)?)!(\d+)/;
    let totalMoney = 0;
    let boughtFurniture = [];

    for (let line of input) {
        if (line === "Purchase") break;
        let match = line.match(pattern);
        if (match) {
            let [_, furnitureName, price, , quantity] = match;
            boughtFurniture.push(furnitureName);
            totalMoney += Number(price) * Number(quantity);
        }
    }

    console.log("Bought furniture:");
    boughtFurniture.forEach(f => console.log(f));
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

furniture([
    ">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase"
]);
