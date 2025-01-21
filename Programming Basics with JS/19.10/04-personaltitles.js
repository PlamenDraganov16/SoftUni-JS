function age(ageNum, gender)
{   
    
    if(gender == 'f')
    {
        if(ageNum >= 16)
        {
            console.log('Ms.');
        }
        else
        {
            console.log('Miss');
        }
    }
    else if(gender == 'm')
    {
        if(ageNum >= 16)
        {
            console.log('Mr.');
        }
        else{
            console.log('Master');
        }
    }
}

age(12, 'f');