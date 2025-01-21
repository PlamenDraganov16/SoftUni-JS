function tryingNewThingsSeven(array)
{
    let width = Number(array.shift());
    let length = Number(array.shift());
    let height = Number(array.shift());

    let cubic = width * length * height;

    let index = 0;

    while(index < array.length)
    {
        if(array[index === 'Done'])
            break;

        cubic -= Number(array[index]);
        index++
    }

    console.log(Math.abs(cubic))
}

tryingNewThingsSeven(["10",

    "10",
    
    "2",
    
    "20",
    
    "20",
    
    "20",
    
    "20",
    
    "122"])

function tryingNewThingsFive(num)
{
    let coins = [200,100,50,20,10,5,2,1];
    let count = 0;

    num = num * 100;

    let index=0;

    while(index < coins.length && num > 0)
    {   let coinsInCents = coins[index]
        while(num >= coinsInCents)
        {
            num -= coinsInCents;

            count++
        }
        index++
    }
    console.log(count)
}

tryingNewThingsFive(1.23)


function tryingNewThingsFour(array)
{
    let goal = 10000;
    let mySteps = 0;
    
    let index = 0;

    while(index < array.length && mySteps < goal)
    {
        if(array[index] === 'Going home')
        {
            mySteps = mySteps + Number(array[index + 1])
            break;
        }
        mySteps += Number(array[index]);

        index++
    }
    if(mySteps >= goal)
        {
            console.log("Goal reached! Good job!")
            console.log(`${mySteps - goal} steps over the goal!`);
        }
        else{
            console.log(`${goal - mySteps} more steps to reach goal.`);
        }
    
    
}

tryingNewThingsFour(["1500", "300", "2500", "3000", "Going home", "200"]);


function tryingNewThingsThree(array)
{
    let tripMoney = Number(array.shift());
    let balance = Number(array.shift());
    let totalDays = 0;
    let countFails = 0;

    let index = 0;

    while(index < array.length && countFails !== 5)
    {
        let money = Number(array[index+1]);
        let action = array[index];
        
        if(action === 'spend')
        {
            countFails++;
            totalDays++;
            balance = Math.max(0, balance - money);
        }
        if(action === 'save')
        {
            countFails = 0;
            totalDays++
            balance += money; 
        }

        if(balance >= tripMoney)
        {
            console.log(`You saved the money for ${totalDays} days.`);
            return;
        }
        
        index +=2
    }
    if(countFails === 5)
    {
        console.log('you can not save');
        console.log(totalDays);
    }
}

tryingNewThingsThree((["2000",

    "1000",
    
    "spend",
    
    "1200",
    
    "save",
    
    "2000"]));