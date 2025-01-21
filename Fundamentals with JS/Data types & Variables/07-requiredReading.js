function requiredReading(numOfPages, pagesPerHour, days)
{
    let reqTime = numOfPages / pagesPerHour;
    let result = reqTime / days;

    console.log(result)
}

requiredReading(432, 15, 4)