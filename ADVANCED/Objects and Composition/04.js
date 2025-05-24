function factory(library, orders) {
    const result = [];

    for (const order of orders) {
        const composed = Object.assign({}, order.template);
        for (const part of order.parts) {
            composed[part] = library[part];
        }
        result.push(composed);
    }

    return result;
}