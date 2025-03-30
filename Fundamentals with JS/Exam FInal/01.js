function solve(arr)
{
    let str = arr.shift();

    for(let command of arr)
    {
        if(command === 'End')
        {
            break;
        }
        
        let parts = command.split(' ')
        let action = parts[0];

        switch(action)
        {
            case "Translate":
                let char = parts[1];
                let replacement = parts[2];
                str = str.split(char).join(replacement);
                console.log(str);
                break;

            case "Includes":
                let substring = parts[1];
                console.log(str.includes(substring));
                break;
            
            case "Start":
                let substringOne = parts[1];
                console.log(str.startsWith(substringOne));
                break;
            
            case "Lowercase":
                str = str.toLowerCase();
                console.log(str);
                break;
            
            case "FindIndex": 
                let charOne = parts[1];
                console.log(str.lastIndexOf(charOne));
                break;

            case "Remove":
                let startIndex = Number(parts[1]);
                let count = Number(parts[2]);
                str = str.substring(0, startIndex) + str.substring(startIndex + count);
                console.log(str);
                break;
        }
    }
}

solve((["//Thi5 I5 MY 5trING!//",
"Translate 5 s",
"Includes string",
"Start //This",
"Lowercase",
"FindIndex i",
"Remove 0 10",
"End"])
)

function solveOne(arr) {
    let str = arr.shift();

    for (let command of arr) {
        if (command === 'End') {
            break;
        }

        let parts = command.split(' ');
        let action = parts[0];

        switch (action) {
            case "Translate":
                let char = parts[1];
                let replacement = parts[2];
                str = str.split(char).join(replacement);
                console.log(str);
                break;

            case "Includes":
                let substring = parts[1];
                console.log(str.includes(substring) ? "True" : "False");
                break;

            case "Start":
                let substringOne = parts[1];
                console.log(str.startsWith(substringOne) ? "True" : "False");
                break;

            case "Lowercase":
                str = str.toLowerCase();
                console.log(str);
                break;

            case "FindIndex":
                let charOne = parts[1];
                console.log(str.lastIndexOf(charOne));
                break;

            case "Remove":
                let startIndex = Number(parts[1]);
                let count = Number(parts[2]);
                str = str.substring(0, startIndex) + str.substring(startIndex + count);
                console.log(str);
                break;
        }
    }
}

solveOne((["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"]));