function carFactory(order) {
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    const carriages = {
        hatchback: { type: 'hatchback', color: order.color },
        coupe: { type: 'coupe', color: order.color }
    };

    const engine = engines.find(e => e.power >= order.power);
    const wheels = Array(4).fill(order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize);

    return {
        model: order.model,
        engine,
        carriage: carriages[order.carriage],
        wheels
    };
}