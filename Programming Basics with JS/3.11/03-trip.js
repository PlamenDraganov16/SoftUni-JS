function trip(array)
{
    let tripMoney = Number(array[0]);
    let balance = Number(array[1]);
    
    let spendDays = 0;
    let totalDays = 0;

    let index = 2;

    while(index < array.length && spendDays <5)
    {
        let action = array[index];
        let money = Number(array[index+1])

        if(action === 'spend')
        {   totalDays++
            spendDays++;
            balance = Math.max(0, balance - money);
        }

        if(action === 'save')
        {   totalDays++
            spendDays = 0;
            balance += money;
        }

        if(balance >= tripMoney)
        {
            console.log(`You saved the money for ${totalDays} days.`);
            return;
        }

        index+=2;
    }
    if(spendDays === 5)
    {
        console.log("You can't save the money.");
        console.log(`${totalDays}`);
    }
}

trip(["2000",

    "1000",
    
    "spend",
    
    "1200",
    
    "save",
    
    "2000"])