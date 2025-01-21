function sumPrimeNotPrimeNums(array)
{
    let primeSum = 0;
    let nonPrimeSum = 0;

    let index = 0;
    let command = array[index];

    while(command !== 'stop')
    {
        let num = Number(command);

        if(num < 0)
        {
            console.log('Number is negative.');
            index++;
            command = array[index];
            continue;
        }
        let isPrime = true;

        for(let diviser = 2; diviser < num; diviser++)
        {   
            if(num % diviser === 0)
            {
                isPrime = false;
                break;
            }
        }

        if(isPrime)
        {
            primeSum += num;
        }
        else{
            nonPrimeSum += num;
        }

        index++;
        command = array[index];
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNotPrimeNums(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"]);