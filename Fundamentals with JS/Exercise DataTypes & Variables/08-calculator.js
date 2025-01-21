function calculator(n1, symbol, n2)
{
    if(symbol === "+") console.log((n1 + n2).toFixed(2))
        else if(symbol === '-') console.log((n1 - n2).toFixed(2))
            else if(symbol === '*') console.log((n1 * n2).toFixed(2))
                else if(symbol === '/') console.log((n1 / n2).toFixed(2))
}

calculator(5, "+", 10)