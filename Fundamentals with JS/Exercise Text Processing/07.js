function cutAndReverse(text) {
    let middle = text.length / 2;
    let firstHalf = text.substring(0, middle).split('').reverse().join('');
    let secondHalf = text.substring(middle).split('').reverse().join('');
    
    console.log(firstHalf);
    console.log(secondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');