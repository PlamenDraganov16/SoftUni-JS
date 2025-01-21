function operation(num1, num2, operator)
{
    let solution = 0;

    if(operator == '+')
    {
       solution = num1 + num2;
       if(solution % 2 == 0)
       console.log(`${num1} ${operator} ${num2} = ${solution} - even`);
       else
       console.log(`${num1} ${operator} ${num2} = ${solution} - odd`);
    }
    else if(operator == '-')
    {
        solution = num1 - num2;
       if(solution % 2 == 0)
       console.log(`${num1} ${operator} ${num2} = ${solution} - even`);
       else
       console.log(`${num1} ${operator} ${num2} = ${solution} - odd`);
    }
    else if(operator == '*')
        {
            solution = num1 * num2;
           if(solution % 2 == 0)
           console.log(`${num1} ${operator} ${num2} = ${solution} - even`);
           else
           console.log(`${num1} ${operator} ${num2} = ${solution} - odd`);
        }
    else if(operator == '/')
    {
        if(num2 == 0)
        {
            console.log(`Cannot divide ${num1} by zero`)
        }
        else
        {
            solution = num1 / num2;
            console.log(`${num1} / ${num2} = ${solution.toFixed(2)}`)
        }
    }
    else if(operator == '%')
    {
        if(num2 == 0)
            {
                console.log(`Cannot divide ${num1} by zero`)
            }
        else
        {
        solution = num1 % num2;
        console.log(`${num1} % ${num2} = ${solution}`)
        }
    }
}

operation(10,3, '%');
