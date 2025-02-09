function bombNumbers(sequence, bombInfo) {
    let [bomb, power] = bombInfo;
    
    while (sequence.includes(bomb)) {
        let index = sequence.indexOf(bomb);
        let start = Math.max(0, index - power);
        let end = Math.min(sequence.length - 1, index + power);
        sequence.splice(start, end - start + 1);
    }
    
    console.log(sequence.reduce((a, b) => a + b, 0));
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);