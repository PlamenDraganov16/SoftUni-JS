function legendaryFarming(input) {
    let keyMaterials = { shards: 0, fragments: 0, motes: 0 };
    let junkMaterials = {};
    let legendaryItems = {
        shards: "Shadowmourne",
        fragments: "Valanyr",
        motes: "Dragonwrath"
    };
    let obtainedItem = null;

    let items = input.toLowerCase().split(" ");

    for (let i = 0; i < items.length; i += 2) {
        let quantity = Number(items[i]);
        let material = items[i + 1];

        if (keyMaterials.hasOwnProperty(material)) {
            keyMaterials[material] += quantity;
            if (keyMaterials[material] >= 250 && !obtainedItem) {
                obtainedItem = legendaryItems[material];
                keyMaterials[material] -= 250;
            }
        } else {
            junkMaterials[material] = (junkMaterials[material] || 0) + quantity;
        }

        if (obtainedItem) break;
    }

    console.log(`${obtainedItem} obtained!`);

    Object.entries(keyMaterials)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(([material, quantity]) => console.log(`${material}: ${quantity}`));

    Object.entries(junkMaterials)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([material, quantity]) => console.log(`${material}: ${quantity}`));
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
