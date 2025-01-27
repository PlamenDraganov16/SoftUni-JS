function orbit([width, height, x, y]) {
    
    let matrix = Array.from({ length: height }, () => Array(width).fill(0));

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            
            const distance = Math.max(Math.abs(i - x), Math.abs(j - y));
            matrix[i][j] = distance + 1;
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}

orbit([4, 4, 0, 0])