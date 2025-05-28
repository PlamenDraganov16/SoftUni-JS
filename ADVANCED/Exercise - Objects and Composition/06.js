function storeCatalogue(data) {
    const catalogue = {};

    for (let line of data) {
        let [product, price] = line.split(' : ');
        const letter = product[0];
        if (!catalogue[letter]) {
            catalogue[letter] = [];
        }
        catalogue[letter].push({ product, price: Number(price) });
    }

    const sortedLetters = Object.keys(catalogue).sort();
    for (let letter of sortedLetters) {
        console.log(letter);
        for (let item of catalogue[letter].sort((a, b) => a.product.localeCompare(b.product))) {
            console.log(`  ${item.product}: ${item.price}`);
        }
    }
}