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