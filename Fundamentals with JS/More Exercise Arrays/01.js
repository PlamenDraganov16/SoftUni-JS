function solve(array)
{   
    let step = Number(array[array.length - 1]) ;
    let result = "";
    for(let i = 0; i < array.length - 1; i += step)
    {
        let num = (array[i]);
        result += num + " ";
    }

    console.log(result)
}

solve(['5', '20', '31', '4', '20', '2'])
solve(["dsa", "asd", "test", "test", "2"])