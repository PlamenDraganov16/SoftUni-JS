function solve(arr)
{
    let book = new Map();

    for(let command of arr)
    {
        let [name, ...grades] = command.split(' ');

        if(!book.has(name))
        {
            book.set(name, []);
        }

        for(let grade of grades)
        {
            book.get(name).push(+grade);
        }
    }

    let studentBookSorted = Array.from(book.entries())
                                    .sort(([keyA, valueA], [keyB, valueB]) => {
                                    return keyA.localeCompare(keyB)});
    

    for(let [studentName, grades] of studentBookSorted)
    {
        let gradesSum = 0;
        for(let grade of grades) gradesSum += grade;

        let avgGrade = gradesSum / grades.length;
        console.log(`${studentName}: ${avgGrade.toFixed(2)}`)
    }
}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);