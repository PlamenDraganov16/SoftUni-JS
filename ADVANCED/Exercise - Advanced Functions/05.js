function add(n) {
    let sum = n;

    function inner(next) {
        sum += next;
        return inner;
    }

    inner.toString = function() {
        return sum;
    };

    inner.valueOf = function() {
        return sum;
    };

    return inner;
}