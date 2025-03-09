function solve(arr)
{   function takeOddSymbols(text)
    {
        let newText = '';

        for(let i = 1; i < text.length; i += 2)
        {
            newText += text[i]
        }

        return newText;
    }

    function myReplaceAll(text,substr, replacement)
    {   
        let tempText = text
        while(tempText.includes(substr))
        {
            tempText = tempText.replace(substr, replacement);
        }

        return tempText;
    }

    let rawPassword = arr.shift()

    for(let i = 0; i < arr.length; i++)
    {
        let cmdArgs = arr[i].split(" ").filter(x => x !== "");

        let cmdType = cmdArgs[0].toLowerCase();
        if(cmdType === 'done')
        {
            break;
        }

        if(cmdType === 'takeodd')
        {
            rawPassword = takeOddSymbols(rawPassword);
            
        }
        else if(cmdType === 'cut')
        {
            let startIndex = Number(cmdArgs[1]);
            let length = Number(cmdArgs[2]);
            let endIndex = startIndex + length;
            if(startIndex < 0 || startIndex >= rawPassword.length || endIndex > rawPassword.length)
            {
                continue; // Skips the command;
            }
            let subString = rawPassword.substring(startIndex, endIndex);

            rawPassword = rawPassword.replace(subString, '');
            
        }
        else if(cmdType === 'substitute')
        {
            let substr = cmdArgs[1];
            let replacement = cmdArgs[2];

            if(!rawPassword.includes(substr))
            {   
                console.log('Nothing to replace!');
                continue;
            }
            else 
            {
                rawPassword = myReplaceAll(rawPassword,substr, replacement);
            }
        }
        else{
            continue;
        }

        console.log(rawPassword)
    }

    console.log(`Your password is: ${rawPassword}`);
}

solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",

    "TakeOdd",
    
    "Cut 15 3",
    
    "Substitute :: -",
    
    "Substitute | ^",
    
    "Done"])