function main(password)
{
    function checkLength(password)
    {
        if(password.length >= 6 && password.length <= 10)
            {
                return true;
            }
        else
        {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }
    
    function checkChars(password)
    {
        let pattern = /^[A-Za-z0-9]+$/;
        if(pattern.test(password))
        {
            return true;
        }
        else 
        {
            console.log("Password must consist only of letters and digits");
            return false;
        }
    }
    
    function checkNumDigits(password)
    {
        let pattern = /[0-9]{2,}/
        if (pattern.test(password)) {
            return true;
        }
        else{
        console.log("Password must have at least 2 digits");
        return false;
        }
    }

    let isValid1 = checkLength(password);
    let isValid2 = checkChars(password);
    let isValid3 = checkNumDigits(password);

    if(isValid1 && isValid2 && isValid3)
    {
        console.log('Password is valid')
    }
}

main('MyPass123')