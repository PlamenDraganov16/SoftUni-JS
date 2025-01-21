function tennis(priceRacket, numRackets, numShoes)
{
    let priceShoes = 1/6 * priceRacket;
    let totalPriceRackets = priceRacket * numRackets;
    let totalPriceShoes = priceShoes * numShoes;

    let total = totalPriceRackets + totalPriceShoes +((totalPriceRackets + totalPriceShoes) * 0.2);
    let djokovicPrice = total * (1/8);
    let rest = total - djokovicPrice;

    console.log(`Price to be paid by Djokovic ${Math.floor(djokovicPrice)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(rest)}`)
}

tennis(
    850,
    4,
    2
);