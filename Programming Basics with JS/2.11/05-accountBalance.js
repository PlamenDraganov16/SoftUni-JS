function accountBalance(array)
{
    let balance = 0;

    let index = 0;
    let command = array[index];

    while(command !== 'NoMoreMoney')
    {
        let currentNum = Number(command);

        if(currentNum < 0)
        {
            console.log(`Invalid operation!`);
            break; 
        }

        balance += currentNum;
        console.log(`Increase: ${currentNum.toFixed(2)}`);
        

        index++;
        command = array[index];
    }

console.log(`Total: ${balance.toFixed(2)}`);
}

accountBalance(['5.51', '69.42', '100', 'NoMoreMoney']);