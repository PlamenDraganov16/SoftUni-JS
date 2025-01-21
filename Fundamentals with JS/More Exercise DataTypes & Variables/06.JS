function generateChessboard(n) {
    let chessboard = '<div class="chessboard">\n';
    
    for (let row = 0; row < n; row++) {
        chessboard += '  <div>\n';
        
        for (let col = 0; col < n; col++) {
            // Alternate between "black" and "white" depending on the position
            if ((row + col) % 2 === 0) {
                chessboard += '    <span class="black"></span>\n';
            } else {
                chessboard += '    <span class="white"></span>\n';
            }
        }
        
        chessboard += '  </div>\n';
    }
    
    chessboard += '</div>';
    
    console.log(chessboard);
}

generateChessboard(3)
