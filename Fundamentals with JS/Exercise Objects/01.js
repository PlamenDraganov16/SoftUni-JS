function solve(arr)
{ 
    for(let employeeName of arr)
    {
        let employeeObj = { name: employeeName, personalNum: employeeName.length};

        console.log(`Name: ${employeeObj.name} -- Personal Number: ${employeeObj.personalNum}`)
    }
}


solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])