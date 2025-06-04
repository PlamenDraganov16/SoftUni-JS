function argumentInfo(...args) {
    const counts = {};
    const order = [];

    for (let arg of args) {
        const type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (!counts[type]) {
            counts[type] = 0;
            order.push(type); 
        }

        counts[type]++;
    }

    order
        .sort((a, b) => counts[b] - counts[a])
        .forEach(type => {
            console.log(`${type} = ${counts[type]}`);
        });
}