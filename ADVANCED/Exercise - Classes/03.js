function ticketStatistic (data, sortCriteria) {
    const store = [];

    class Ticket {
        destination;
        price;
        status;
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        static sort(arr, criteria) {
            return arr.sort((a, b) => {
                if (criteria === 'price') {
                    return a.price - b.price;
                } else {
                    return a[criteria].localeCompare(b[criteria]);
                }
            });
        }
    }

    for( let line of data) {
        let [destination, price, status] = line.split("|");

        const ticket = new Ticket(destination, Number(price), status);

        store.push(ticket);
    }

    return Ticket.sort(store, sortCriteria);
}