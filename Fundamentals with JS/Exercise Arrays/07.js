function findLongestSequence(arr) {
    let maxSequence = [];
    let currentSequence = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentSequence.push(arr[i]);
        } else {
            if (currentSequence.length > maxSequence.length) {
                maxSequence = currentSequence;
            }
            currentSequence = [arr[i]];
        }
    }

    
    if (currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence;
    }

    console.log(maxSequence.join(" "));
}

findLongestSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])