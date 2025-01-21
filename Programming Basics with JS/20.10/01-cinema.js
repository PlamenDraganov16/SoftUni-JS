function cinema(event, rows, colums)
{   let income = 0;
    if(event === 'Premiere')
    {
        income = 12 * rows * colums;
    }
    else if(event === 'Normal')
    {
        income = 7.50 * rows * colums;
    }
    else if(event === 'Discount')
    {
        income = 5 * rows * colums;
    }
    console.log(income);
}

