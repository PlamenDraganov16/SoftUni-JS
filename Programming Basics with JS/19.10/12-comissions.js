function overallComissions (city, sales)
{
    let comission = -1;

    switch(city)
    {
        case 'Sofia':
            if(sales >=0 && sales <=500)
                comission = sales * 0.05;
            else if(sales > 500 && sales <= 1000)
                comission = sales * 0.07;
            else if(sales > 1000 && sales <= 10000)
                comission = sales * 0.08;
            else 
                comission = sales * 0.12;
        break;

        case 'Varna':
            if(sales >=0 && sales <=500)
                comission = sales * 0.045;
            else if(sales > 500 && sales <= 1000)
                comission = sales * 0.075;
            else if(sales > 1000 && sales <= 10000)
                comission = sales * 0.1;
            else 
                comission = sales * 0.13;
        break;

        case 'Plovdiv':
            if(sales >=0 && sales <=500)
                comission = sales * 0.055;
            else if(sales > 500 && sales <= 1000)
                comission = sales * 0.08;
            else if(sales > 1000 && sales <= 10000)
                comission = sales * 0.12;
            else 
                comission = sales * 0.145;
        break;

        default:
            break;
    }

    if(comission <= -1)
    {
        console.log('error');
    }
    else
    {
        console.log(comission.toFixed(2));
    }
}

overallComissions('Sofia', 1500);
overallComissions('Plovdiv', 499.99);
overallComissions('Kaspichan', -50);