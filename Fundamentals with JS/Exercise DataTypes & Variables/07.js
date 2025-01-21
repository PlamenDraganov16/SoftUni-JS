function solve(char)
{
    if(char >= "A" && char <= "Z") console.log("upper-case")
    else if(char >= "a" && char <= "z") console.log("lower-case")
}

solve("B")

function solve2(input)
{
    if(input === input.toUpperCase()) console.log("upper-case")
        else console.log("lower-case")
}

solve2('a')