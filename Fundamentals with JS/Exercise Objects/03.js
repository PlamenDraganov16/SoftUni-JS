function updateStock(currentStock, newStock) {
    let inventory = {};
    
    for (let i = 0; i < currentStock.length; i += 2) {
        inventory[currentStock[i]] = Number(currentStock[i + 1]);
    }
    
    for (let i = 0; i < newStock.length; i += 2) {
        let product = newStock[i];
        let quantity = Number(newStock[i + 1]);
        
        if (inventory.hasOwnProperty(product)) {
            inventory[product] += quantity;
        } else {
            inventory[product] = quantity;
        }
    }
    
    for (const [product, quantity] of Object.entries(inventory)) {
        console.log(`${product} -> ${quantity}`);
    }
}


updateStock([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
], [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]);
