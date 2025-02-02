function main(n1, n2, n3)
{
    let firstTwo = combine(n1, n2);

    let secondTwo = subtract(firstTwo, n3)

    console.log(secondTwo)

}

function combine(a, b)
{
    return a + b;
}

function subtract(x, y)
{
    return x - y;
}
main(23, 6, 10);