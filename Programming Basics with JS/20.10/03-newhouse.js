function newHouse(typeFlower, numFlower, budget)
{
let rose = 5; // Roses
let dahlia = 3.80; // Dahlias
let tulips = 2.80; // Tulips
let narcicuss = 3; // Narcissus
let gladiolus = 2.50; // Gladiolus

let total = 0;
let final= 0;
let rest = 0;

if(typeFlower === 'Roses')
{
    if(numFlower > 80)
    {
        total = numFlower * rose;
        final = total * 0.90;
    }
    else
    {
        total = numFlower * rose;
        final = total;
    }
    if(final <= budget)
    {   rest = budget - final;
        console.log(`Hey, you have a great garden with ${numFlower} ${typeFlower} and ${rest.toFixed(2)} leva left.`);
    }
    else
    {
        rest = final - budget;
        console.log(`Not enough money, you need ${rest.toFixed(2)} leva more.`);
    }
}
else if(typeFlower === 'Tulips')
    {
        if(numFlower > 80)
        {
            total = numFlower * tulips;
            final = total * 0.85;
        }
        else
        {
            total = numFlower * tulips;
            final = total;
        }
        if(final <= budget)
        {   rest = budget - final;
            console.log(`Hey, you have a great garden with ${numFlower} ${typeFlower} and ${rest.toFixed(2)} leva left.`);
        }
        else
        {
            rest = final - budget;
            console.log(`Not enough money, you need ${rest.toFixed(2)} leva more.`);
        }
    }
else if(typeFlower === 'Dahlias')
    {
        if(numFlower > 90)
        {
            total = numFlower * dahlia;
            final = total * 0.85;
        }
        else
        {
            total = numFlower * dahlia;
            final = total;
        }
        if(final <= budget)
        {   rest = budget - final;
            console.log(`Hey, you have a great garden with ${numFlower} ${typeFlower} and ${rest.toFixed(2)} leva left.`);
        }
        else
        {
            rest = final - budget;
            console.log(`Not enough money, you need ${rest.toFixed(2)} leva more.`);
        }
    }
else if(typeFlower === 'Narcissus')
{
    if(numFlower < 120)
        {
            total = numFlower * narcicuss;
            final = total * 1.15;
        }
        else
        {
            total = numFlower * narcicuss;
            final = total;
        }
        if(final <= budget)
        {   rest = budget - final;
            console.log(`Hey, you have a great garden with ${numFlower} ${typeFlower} and ${rest.toFixed(2)} leva left.`);
        }
        else
        {
            rest = final - budget;
            console.log(`Not enough money, you need ${rest.toFixed(2)} leva more.`);
        }
}
else if(typeFlower === 'Gladiolus')
    {
        if(numFlower < 80)
            {
                total = numFlower * gladiolus;
                final = total * 1.20;
            }
            else
            {
                total = numFlower * gladiolus;
                final = total;
            }
            if(final <= budget)
            {   rest = budget - final;
                console.log(`Hey, you have a great garden with ${numFlower} ${typeFlower} and ${rest.toFixed(2)} leva left.`);
            }
            else
            {
                rest = final - budget;
                console.log(`Not enough money, you need ${rest.toFixed(2)} leva more.`);
            }
    }
}

newHouse('Roses', 59, 300);