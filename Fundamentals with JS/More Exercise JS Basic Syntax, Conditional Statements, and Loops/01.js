function solve(n1, n2, n3)
{
    const numbers = [n1, n2, n3];

    //const arr = [10, 2, 30];
    //arr.sort((a, b) => a - b); // [2, 10, 30] - възходящ ред
    //arr.sort((a, b) => b - a); // [30, 10, 2] - низходящ ред
    //.sort сортира масива в низходящ ред
    numbers.sort((a, b) => b - a); 

    //prints on new row
    numbers.forEach(num => console.log(num));
}

solve(2, 1, 3)
