function solve(array)
{
    let biggest = Number.NEGATIVE_INFINITY;

    let result = array.filter(num => {
        if(num >= biggest)
        {
            biggest = num;
            return true;
        }
        return false;
    });

    console.log(result.join(" "))
}

solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);

