function solve(array)
{
  let sum = 0
  let i = Number(array[0]);
  let z = Number(array[array.length - 1])
  sum += i;
  sum += z;
  
  console.log(sum)
}

solve([20, 30, 40]);