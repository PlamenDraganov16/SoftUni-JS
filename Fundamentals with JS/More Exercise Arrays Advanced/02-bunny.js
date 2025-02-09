function solve(input) {
    const bombCoordsLine = input[input.length - 1];
    const matrix = input
      .slice(0, input.length - 1)
      .map(row => row.split(' ').map(Number));
  
    const bombs = bombCoordsLine.split(' ').map(pair => {
      const [r, c] = pair.split(',').map(Number);
      return { r, c };
    });
  
    let totalDamage = 0;
    let bunniesKilled = 0;
    const numRows = matrix.length;
    const numCols = numRows > 0 ? matrix[0].length : 0;
  
    for (const bomb of bombs) {
      const { r, c } = bomb;
      if (matrix[r][c] > 0) {
        const bombValue = matrix[r][c];
        totalDamage += bombValue;
        bunniesKilled++;
        matrix[r][c] = 0;
  
        for (let i = r - 1; i <= r + 1; i++) {
          for (let j = c - 1; j <= c + 1; j++) {
            if (i >= 0 && i < numRows && j >= 0 && j < numCols && matrix[i][j] > 0) {
              matrix[i][j] -= bombValue;
              if (matrix[i][j] < 0) {
                matrix[i][j] = 0;
              }
            }
          }
        }
      }
    }
  
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        if (matrix[i][j] > 0) {
          totalDamage += matrix[i][j];
          bunniesKilled++;
        }
      }
    }
  
    console.log(totalDamage);
    console.log(bunniesKilled);
  }
  
  solve([
    '10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0'
  ]);