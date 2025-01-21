function delivery(chickenMenu, fishMenu, vegetarianMenu) 
{
    let chickenPrice = chickenMenu * 10.35; // 20.70
    let fishPrice = fishMenu * 12.40; // 49.60
    let vegetarianPrice = vegetarianMenu * 8.15;

    let combinedPrice = chickenPrice + fishPrice + vegetarianPrice;
    let dessertPrice = combinedPrice * 0.2;
    //let dessertPrice= combinedPrice * (20/100); second way :)

    let deliveryPrice = 2.50;

    let totalPrice = combinedPrice + dessertPrice + deliveryPrice;

    console.log(totalPrice);
}

delivery(2, 4, 3) //116.2