function basketballPrice(money)
{
    let shoesPrice = money * 0.6; // 219
    let suitPrice = shoesPrice * 0.8; //175.2
    let ballPrice = suitPrice * 0.25; //43.8
    let accesoriesPrice = ballPrice * 0.2; //8.76

    let equipmentPrice = shoesPrice + suitPrice + ballPrice + accesoriesPrice; // aksesoari cena
    let finalPrice = money + equipmentPrice;

    console.log(finalPrice);
}

basketballPrice(365);