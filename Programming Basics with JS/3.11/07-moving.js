function moving(array)
{
    let width = Number(array.shift());
    let length = Number(array.shift());
    let height = Number(array.shift());

    let freeSpace = width * length * height;

    let index = 0;

    while(index < array.length)
    {
        if(array[index] === 'Done') break;

        freeSpace -= Number(array[index]);

        index++
    }

    if(freeSpace >= 0)
        console.log(`${freeSpace} Cubic meters left.`)
    else
    console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`)
}

moving(["10",

    "10",
    
    "2",
    
    "20",
    
    "20",
    
    "20",
    
    "20",
    
    "122"])