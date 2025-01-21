function sumOfDigits(text)
{
    let sum = 0;
    for(let i=0; i < text.length; i++)
    {
        switch(text.charAt(i)) 
        {
            case '1':
                sum += 1;
                break;
            case '2': 
                sum += 2;
                break;
            case '3':
                sum += 3;
                break;
            case '4': 
                sum += 4;
                break;
            case '5':
                sum += 5;
                break;
            
            case '6':
                sum += 6;
                break;
            case '7': // 1 simvol                    
                sum += 7;
                break;
            case '8':
                sum += 8;
                break;
            case '9': // 4 simvol
                sum += 9;
                break;
            case '0':
                sum += 0;
                break;
            default:
                return;
        }
        
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfDigits('1234');

function sum2(index)
{
    let sum = 0;
    for(let i = 0; i < index.length; i++)
    {
        sum += Number(index.charAt(i))
    }
    console.log(sum)
}

sum2('12345')