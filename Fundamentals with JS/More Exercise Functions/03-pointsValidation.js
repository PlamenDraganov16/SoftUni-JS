function pointsValid(arr)
{
    let [x1, y1, x2, y2] = arr;

    function isValidDistance(x1, y1, x2, y2)
    {
        let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return Number.isInteger(distance);
    }

    function printResult(x1, y1, x2, y2)
    {
        let validity = isValidDistance(x1, y1, x2, y2) ? 'valid' : 'invalid';
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validity}`);
    }

    printResult(x1, y1, 0, 0);
    printResult(x2, y2, 0, 0);
    printResult(x1, y1, x2, y2);
}

pointsValid([3, 0, 0, 4])