function check(random)
{
    if(random === 'banana' || random ==='apple' || random === 'kiwi' || random === 'cherry' || random==='lemon' || random === 'grapes')
    {
        console.log('fruit');
    }
    else if(random === 'tomato' || random === 'cucumber' || random === 'pepper' || random === 'carrot')
    {
        console.log('vegetable');
    }
    else 
    {
        console.log('unknown');
    }
}

check('banana');
check('tomato');
check('water');