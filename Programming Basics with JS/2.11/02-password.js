function passwordTest(array)
{
    let username = array[0];
    let password = array[1];

    let index = 2;
    let tryPassword = array[index]

    while(tryPassword !== password)
    {
        index++;
        tryPassword = array[index];
    }

    console.log(`Welcome ${username}!`);}

passwordTest(['Nakov', '1234', 'Pass', '1334', '1234'])