function cinemaTickets(array)
{   
    let studentCount = 0;
    let standardCount = 0;
    let kidsCount = 0;
    
    let index = 0;
    let command = array[index]

    while(command !== 'Finish')
    {
        let movieTitle = command;

        index++;
        let freeSeats = Number(array[index]);
        let takenSeats = 0;

        index++
        let command1 = array[index];

        while(command1 !== 'End')
        {
            let ticketType = command1;

            if(command1 === 'standard') standardCount++;
            else if(command1 === 'student') studentCount++
            else if(command1 === 'kid') kidsCount++;

            takenSeats++;

            if(takenSeats === freeSeats)
            {
                break;
            }

            index++
            command1 = array[index];
        }

        console.log(`${movieTitle} - ${(takenSeats / freeSeats * 100).toFixed(2)}% full.`);
        

        index++;
        command = array[index];
    }

    let totalTicketCount = studentCount + standardCount + kidsCount;
    console.log(`Total tickets: ${totalTicketCount}`);
     
    console.log(`${(studentCount / totalTicketCount * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCount / totalTicketCount * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidsCount / totalTicketCount * 100).toFixed(2)}% kids tickets.`);

}

cinemaTickets([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);
    