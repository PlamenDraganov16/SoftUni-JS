function minNum(array)
{
   let min = Number.MAX_SAFE_INTEGER;

   let index = 0;
   let command = array[index];

   while(command !== 'Stop')
   {
    let num = Number(command);

    if(num < min)
        min = num;

    index++;
    command = array[index]
   }

   console.log(min)
}

minNum([
    "100",
    "99",
    "80",
    "70",
    "Stop"]);
    