function getFibonator() {
    let a = 0;
    let b = 1;

    return function () {
        const next = a + b;
        a = b;
        b = next;
        return a;
    };
}