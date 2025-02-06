function firstLastKElement(arr)
{
    let k = arr[0]; 
    let numbers = arr.slice(1); 

    let firstK = numbers.slice(0, k).join(" ");
    let lastK = numbers.slice(-k).join(" ");

    console.log(firstK);
    console.log(lastK);
}

firstLastKElement([2, 7, 8, 9]);