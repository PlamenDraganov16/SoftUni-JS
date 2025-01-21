function solve(peopleNum, nights, numCards, numTickets)
{
    let nightPrice = 20;
    let cardPrice = 1.60;
    let ticketMuseum = 6;

    let totalNights = nightPrice* nights;
    let totalCards = numCards * cardPrice;
    let totalTickets = ticketMuseum * numTickets;

    let onePersonPrice = totalNights + totalCards + totalTickets;

    let allPerson = onePersonPrice * peopleNum;

    let totalSum = allPerson + (allPerson * 0.25)

    console.log(totalSum.toFixed(2));
}

solve(20,
    14,
    30,
    6)