function walking(array)
{
let goal = 10000;
let totalSteps = 0;
let index = 0;
while(index < array.length && totalSteps < goal)
{
    if(array[index] === 'Going home')
    {
        totalSteps += Number(array[index+1]);
        break;
    }
    totalSteps += Number(array[index])
    index++;
}
if(totalSteps >= goal)
{
    console.log("Goal reached! Good job!")
    console.log(`${totalSteps - goal} steps over the goal!`);
}
else{
    console.log(`${goal - totalSteps} more steps to reach goal.`);
}
}

walking(["1500", "300", "2500", "3000", "Going home", "200"]);