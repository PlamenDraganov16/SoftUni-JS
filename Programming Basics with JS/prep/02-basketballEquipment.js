function basketballEq(annualPrice)
{
    let shoesPrice = annualPrice * 0.6;
    let tShirt = shoesPrice * 0.8;
    let ball = tShirt * 0.25;
    let accessories = ball * 0.2;

    let total = shoesPrice + tShirt + ball + accessories + annualPrice;

    console.log(total.toFixed(2));
}

basketballEq(320)