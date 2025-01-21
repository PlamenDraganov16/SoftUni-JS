function lastDigit(n)
{
    let numStr = "" + n;
    
    // Извличане на последния символ
    let lastChar = numStr[numStr.length - 1];

    // Преобразуване в число
    let lastNum = Number(lastChar);

    if(lastNum === 1) console.log('one')
    else if(lastNum === 2) console.log('two')
    else if(lastNum === 3) console.log('three')
    else if(lastNum === 4) console.log('four')
    else if(lastNum === 5) console.log('five')
    else if(lastNum === 6) console.log('six')
    else if(lastNum === 7) console.log('seven')
    else if(lastNum === 8) console.log('eight')
    else if(lastNum === 9) console.log('nine')
    else if(lastNum === 0) console.log('zero')
}

lastDigit(512)

// 512	two
// 1	one
// 1643	three
