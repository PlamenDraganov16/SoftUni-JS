function cake(array)
{
    let width = Number(array.shift());
    let length = Number(array.shift());

    let size = width * length;

    let index = 0;

    while(index < array.length)
    {
        if(array[index] === 'STOP')
        {
            break;
        }
        
        size -= Number(array[index])

        index++
    }

    if(size >=0)
    {
        console.log(`${size} pieces are left.`);
    }
    else{
        console.log(`No more cake left! You need ${Math.abs(size)} pieces more.`);
    }
}

cake(["10",

    "10",
    
    "20",
    
    "20",
    
    "20",
    
    "20",
    
    "21"])