function solve(matrix)
{
    let targetSum = matrix[0].reduce((sum, num) => sum + num, 0);

    for (let i = 0; i < matrix.length; i++) {
        const rowSum = matrix[i].reduce((sum, num) => sum + num, 0);
        const colSum = matrix.reduce((sum, row) => sum + row[i], 0);

        if (rowSum !== targetSum || colSum !== targetSum) {
            console.log(false)
            return;
        }
    }

    console.log(true)
    return;
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   )
