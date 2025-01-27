function solve(arr)
{
    let rotations = Number(arr.pop());
    let length  = arr.length;

    rotations = rotations % length

    for (let i = 0; i < rotations; i++) {
        
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    
    console.log(arr.join(" "));

}

solve(['1', '2', '3', '4', '2'])
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);