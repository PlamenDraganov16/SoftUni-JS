function solve(n1, n2, n3)
{
    let reversedNums = `${n3}${n2}${n1}`

    console.log(reversedNums);

    let asciiOne = n1.charCodeAt(); //vzima ot askitablicata;
    let asciiTwo = n2.charCodeAt();
    let asciiThree = n3.charCodeAt();

    console.log(`${asciiThree} ${asciiTwo} ${asciiOne}`);
}

solve('a', 'b', 'c')