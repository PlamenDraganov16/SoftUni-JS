function lunchBreak(serial, lengthEp, lengthRest)
{
 let eating = lengthRest * 0.125; //7.5
 let watching = lengthRest * 0.25; //15
 let remainingTime = lengthRest - eating - watching; // 37.5
 let time = 0;
 time = Math.ceil(remainingTime - lengthEp)
 if(remainingTime >= lengthEp)
 {  
    console.log(`You have enough time to watch ${serial} and left with ${time} minutes free time.`);
 }
 else
 { 
    console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(lengthEp - remainingTime) } more minutes.`)
 }
}

lunchBreak('Game of Thrones', 60, 96);
lunchBreak('Cars', 48, 60)