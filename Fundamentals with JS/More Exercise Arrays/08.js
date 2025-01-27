function solve(array)
{
    let matrix = array.map(row => row.split(" ").map(Number));

    let n = matrix.length;

    let primaryDiagSum = 0;
    let secondaryDiagSum = 0;

    for(let i = 0; i < n; i++)
    {
        primaryDiagSum += matrix[i][i];
        secondaryDiagSum += matrix[i][n - 1 - i];
    }

    if (primaryDiagSum === secondaryDiagSum) {
        const diagonalSum = primaryDiagSum;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                
                if (i !== j && j !== n - 1 - i) {
                    matrix[i][j] = diagonalSum;
                }
            }
        }
    }

    matrix.forEach(row => {
        console.log(row.join(' '));
    });
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
    );