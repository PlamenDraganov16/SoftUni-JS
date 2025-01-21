function echoType(param)
{
    if(param === null || param == Object)
    {   console.log(typeof(param))
        console.log("Parameter is not suitable for printing");
        return;
    }
    else
    {
        console.log(typeof(param));
        console.log(param);
    }
    
}

echoType(null)