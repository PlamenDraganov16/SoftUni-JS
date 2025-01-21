function printingTillStop(array)
{
    let index = 0;
    let command  = array[index];

    while(command !== 'Stop')
    {
        console.log(command);

        index++;
        command = array[index]
    }
}

printingTillStop(['Samo Cska','Yambol', 'Stop'])