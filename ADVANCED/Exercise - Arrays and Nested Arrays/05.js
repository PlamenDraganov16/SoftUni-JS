function solve(arr) {

 let currentMax = Number.NEGATIVE_INFINITY;

    return arr.reduce((acc, num) => {
        if (num >= currentMax) {
            acc.push(num);
            currentMax = num;
        }
        return acc;
    }, []);
}

solve([1,

3,

8,

4,

10,

12,

3,

2,

24])