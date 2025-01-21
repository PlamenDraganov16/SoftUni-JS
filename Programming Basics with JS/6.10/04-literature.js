function allLiterature(pageNumber, totalPages, time) 
{
    let totalTime = pageNumber / totalPages ;
    let dailyhours = totalTime / time ;
    console.log(dailyhours);
}

allLiterature(212, 20, 2);
allLiterature(432, 15, 4);