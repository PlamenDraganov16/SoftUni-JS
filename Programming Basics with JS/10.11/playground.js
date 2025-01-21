function cinema(array)
{
    let studentCount = 0;
    let standardCount = 0;
    let kidsCount = 0;

    let i = 0;
    let command = array[i];

    while(command !== 'Finish')
    {
        let movie = command;
        i++

        let freeSeats=Number(array[i])
        let takenSeats = 0;
        
        i++
        let command2 = array[i];

        while(command2 !== 'End')
        {
            let ticketType = command2;

            if(command2 === 'standard') standardCount++;
            else if(command2 === 'student') studentCount++
            else if(command2 === 'kid') kidsCount++;

            takenSeats++;

            if(takenSeats === freeSeats)
            {
                break;
            }

            i++
            command2 = array[i];
        }
        console.log(`${movie} - ${(takenSeats / freeSeats * 100).toFixed(2)}% full.`);
        

        i++;
        command = array[i];
    }

    let totalTicketCount = studentCount + standardCount + kidsCount;
    console.log(`Total tickets: ${totalTicketCount}`);

    console.log(`${(studentCount / totalTicketCount * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCount / totalTicketCount * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidsCount / totalTicketCount * 100).toFixed(2)}% kids tickets.`);

}

cinema([
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
    