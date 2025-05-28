function townsToJSON(input) {
    const [header, ...rows] = input;
    const keys = header.split('|').map(h => h.trim()).filter(Boolean);

    const result = rows.map(row => {
        const tokens = row.split('|').map(e => e.trim()).filter(Boolean);
        return {
            [keys[0]]: tokens[0],
            [keys[1]]: Number(Number(tokens[1]).toFixed(2)),
            [keys[2]]: Number(Number(tokens[2]).toFixed(2))
        };
    });

    console.log(JSON.stringify(result));
}