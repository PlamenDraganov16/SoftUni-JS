function printMaxNum(array)
{
    let max = Number.MIN_SAFE_INTEGER;

    let index = 0;
    let command = array[index];

    while(command !== 'Stop')
    {
        let num = Number(command);

        if(num > max) {max = num;}

        index++
        command = array[index];
    }

    console.log(max)
}

printMaxNum(['100', '90','110', 'Stop'])