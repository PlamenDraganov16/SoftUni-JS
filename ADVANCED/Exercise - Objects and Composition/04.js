function heroicInventory(data) {
    const result = [];

    for (let line of data) {
        if (!line.trim()) continue; 

        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        result.push({ name, level, items });
    }

    console.log(JSON.stringify(result));
}