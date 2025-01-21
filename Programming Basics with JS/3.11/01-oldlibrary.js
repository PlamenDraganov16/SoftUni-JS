function oldLibrary(array)
{
    let myBook = array[0];
    let index = 1;
    let countBooks = 0;

    while(array[index] !== 'No More Books')
    {
        if(array[index] === myBook)
        {
            console.log(`You checked ${countBooks} books and found it.`);
            return;
        }
        index++;
        countBooks++;
    }
    console.log("The book you search is not here!");
    console.log(`You checked ${countBooks} books.`)
}

oldLibrary(["Troy",

    "Stronger",
    
    "Life Style",
    
    "Troy"])