let text = 'Paolena'
let arr = text.charAt(3);
console.log(arr)

// mojem da vzemem simvol po izbor ot tekst

function submerging(text)
{
    let sum = 0;
    for(let i=0; i < text.length; i++)
    {
        switch(text.charAt(i)) // shte ugolemqva sum za vsqka glasna
        {
            case 'a':
                sum += 1;
                break;
            case 'e': // 1 simvol
                sum += 2;
                break;
            case 'i':
                sum += 3;
                break;
            case 'o': // 4 simvol
                sum += 4;
                break;
            case 'u':
                sum += 5;
                break;
        }
        
    }
    console.log(sum)
}

submerging('hello')
submerging('Arigato Hosarimase');

function sumOfDigits(text)
{
    let sum = 0;
    for(let i = 0; i < text.length; i++)
    {
        if(text.charAt(i) === '1')
        {
            sum += 1;
        }
        if(text.charAt(i) === '2')
            {
                sum += 2;
            }
            if(text.charAt(i) === '3')
                {
                    sum += 3;
                }
                if(text.charAt(i) === '4')
                    {
                        sum += 4;
                    }
                    if(text.charAt(i) === '5')
                        {
                            sum += 5;
                        }
                        if(text.charAt(i) === '6')
                            {
                                sum += 6;
                            }
                            if(text.charAt(i) === '7')
                                {
                                    sum += 7;
                                }
                                if(text.charAt(i) === '8')
                                    {
                                        sum += 8;
                                    }
                                    if(text.charAt(i) === '9')
                                        {
                                            sum += 9;
                                        }
                                            if(text.charAt(i) === '0')
                                                {
                                                    sum += 0;
                                                }
    }
    console.log(sum)
}

sumOfDigits('2444666668888888')


function solve()
{
    let arr = ['samosval', 'kesten', 'gepard'];
    console.log(arr[0])
    console.log(arr[2])

    arr[3] = 'chicho'
    arr[5] = 'avtomat'
    arr[4] = 'Paolena'
    
    console.log(arr)
    console.log(arr.length)
    for (let i = 0; i <= arr.length ; i++)
    {
        arr = new Array(1, 2, 3, 4)
        console.log(i)
    }
    
}

solve()

function numDivisible(n, m)
{
    let sum = 0;
    let numbers = '';

    for(let i = n; i <= m; i++)
    {
        if(i % 9 === 0)
        {
            sum += i;
            numbers += i + ' ';
        }
    }
    console.log(sum);
    console.log(numbers.trim());
}

numDivisible(100, 200)