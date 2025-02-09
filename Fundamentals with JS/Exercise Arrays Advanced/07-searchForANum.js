function solve(arr, toDo)
{
    let newArr = [];

    let items = toDo.shift();

    for(let i = 0; i < items; i++)
    {
        newArr.push(arr[i])
    }

    newArr.splice(0, toDo.shift())

    let count = 0;

    for(let num of newArr)
    {
        if(num === toDo[0]) count++
    }

    console.log(`Number ${toDo[0]} occurs ${count} times.`);

}

solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);