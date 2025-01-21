function bonusScore(num)
{
    let bonus = 0.0;
    let total = 0;
    if(num <= 100 )
    {
        bonus = 5;
    }
    else if(num <= 1000)
    {
        bonus = num *0.2;
       // total = num + bonus;
    }
    else if(num>1000)
    {
        bonus = num*0.1;
        //total = num + bonus;
    }

    if(num % 2 == 0)   // oshte bonus ako e chetno;
    {   
        bonus += 1;
    }
    else if(num % 10 == 5) // oshte bonus ako chisloto zavurshva na 5;
    {
        bonus +=2;
    }

    total = num + bonus;

    console.log(bonus);
    console.log(total);
    
}

bonusScore(20)
bonusScore(175)