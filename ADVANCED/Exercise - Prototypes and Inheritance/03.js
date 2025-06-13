function extensibleObject() {
    const obj = {
        extend(template) {
            for (const key of Object.keys(template)) {
                const value = template[key];
                if (typeof value === 'function') {
                    Object.getPrototypeOf(this)[key] = value;
                } else {
                    this[key] = value;
                }
            }
        }
    };

    return obj;
}