// function login(input) {
//         const username = input[0]; 
//         let correctPassword = ""; 
    
//         for (let i = username.length - 1; i >= 0; i--) {
//             correctPassword += username[i];
//         }
    
//         let attempts = 0; 
    
//         for (let i = 1; i < input.length; i++) { 
//             const password = input[i];
//             attempts++;
    
//             if (password === correctPassword) {
//                 console.log(`User ${username} logged in.`);
//                 return; 
//             } else {
//                 if (attempts === 4) {
//                     console.log(`User ${username} blocked!`);
//                     return; 
//                 }
//                 console.log("Incorrect password. Try again.");
//             }
//         }
//     }

function login(input)
{
    let username = input[0];
    let password = username.split('').reverse().join('')
    let attempts = 0;
    
    for(let index = 1; index < input.length; index++)
    {   
        let currentpass = input[index];
        attempts++
        if(currentpass === password)
        {
            console.log(`User ${username} logged in.`);
            return; 
        }
        else if(attempts === 4)
        {
            console.log(`User ${username} blocked!`);
            return;
        }
        else
        {
            console.log("Incorrect password. Try again.");
        }
    }
    
}


login(['Acer','login','go','let me in','recA'])