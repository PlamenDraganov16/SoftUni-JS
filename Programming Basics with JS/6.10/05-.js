function magazine(numPens,numMarkers, cleaner, discount) 
{
    let pricePens = numPens * 5.80;
    let priceMarkers = numMarkers * 7.20;
    let priceCleaner = cleaner * 1.20;
    let totalPrice = pricePens + priceMarkers + priceCleaner;
    let totalDiscount = discount / 100;
    let finalPrice = totalPrice - (totalPrice * totalDiscount);
    console.log(finalPrice);
}

magazine(4,2,5,13)
magazine(2, 3, 4, 25);