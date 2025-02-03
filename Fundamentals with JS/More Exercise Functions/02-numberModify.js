function numberModify(input)
{
    let numStr = input.toString();
    
    function getAverage(str) {
        let sum = str.split('').reduce((acc, digit) => acc + Number(digit), 0);
        return sum / str.length;
    }
    
    while (getAverage(numStr) <= 5) {
        numStr += '9';
    }
    
    console.log(numStr);
}

numberModify(101)