function fineSalary(input)
{
    let numTabs = Number(input[0]);
    let salary = Number(input[1]);

    for(let i = 2; i < input.length; i++)
    {
        if(input[i] === 'Facebook')
        salary -= 150;
       else if(input[i] === 'Reddit')
        salary -= 50;
       else if(input[i] === 'Instagram')
        salary -= 100;
    }

    if(salary <= 0)
        console.log(`You have lost your salary.`);
    else
        console.log(salary);
}

fineSalary([10, 750, "Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]);