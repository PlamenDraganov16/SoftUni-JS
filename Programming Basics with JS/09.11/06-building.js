function building(flatNum, apartmentNum)
{   
    for(let i = flatNum; i >= 1; i--)
    { let allRoomsPerFloor = '';
        for(let j = 0; j < apartmentNum; j++)
        {
            if(i === flatNum)
            {
               // console.log(`L${i}${j}`);
                allRoomsPerFloor += `L${i}${j} `
            }
            else if(i % 2 === 0)
            {
               // console.log(`O${i}${j}`);
                allRoomsPerFloor += `O${i}${j} `
            }
            else
            {
                //console.log(`A${i}${j}`);
                allRoomsPerFloor += `A${i}${j} `
            }
        }
        console.log(allRoomsPerFloor);
    }
}

building(6, 4)