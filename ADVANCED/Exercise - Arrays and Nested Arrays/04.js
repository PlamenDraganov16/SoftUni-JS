function solve(arr, rotate) {

    for(let i = 0; i < rotate; i++) {

        arr.unshift(arr.pop())
    }

    console.log(arr.join(' '))
}

solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15)