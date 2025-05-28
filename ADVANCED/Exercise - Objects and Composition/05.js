function lowestPrices(input) {
    const products = {};

    for (let line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (!products[product] || products[product].price > price) {
            products[product] = { town, price };
        }
    }

    for (let [product, data] of Object.entries(products)) {
        console.log(`${product} -> ${data.price} (${data.town})`);
    }
}