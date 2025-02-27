function asciiSumator(start, end, text) {

    let startCode = start.toString().charCodeAt(0);
    let endCode = end.toString().charCodeAt(0);
    let min = Math.min(startCode, endCode);
    let max = Math.max(startCode, endCode);
    
    let sum = 0;
    for (let char of text) {
        let code = char.charCodeAt(0);
        if (code > min && code < max) {
            sum += code;
        }
    }
    
    console.log(sum);
}

asciiSumator('.', '@', 'dsg12gr5653feee5');