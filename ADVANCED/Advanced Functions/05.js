function solution() {

    let state = '';

    return {
        append,
        removeEnd,
        removeStart,
        print
    };

    function append(str) {
        state += str;
    }

    function removeStart(n) {
        state = state.slice(n);
    }

    function removeEnd(n) {
        state = state.slice(0, -n);
    }

    function print () {
        console.log(state);
    }
}