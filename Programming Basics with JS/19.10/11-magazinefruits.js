function magazineFruits(fruit, day, quantity)
{   let price = 0;
    if(day === 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day === 'Thursday' || day === 'Friday' || day === 'Saturday' || day === 'Sunday')
    {
    switch(day)
    {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            if(fruit === 'banana')
            {
                price = 2.5 * quantity;
                console.log(price.toFixed(2));
            }
            else if(fruit === 'apple')
            {
                price = 1.20 * quantity;
                console.log(price.toFixed(2));
            }
            else if(fruit === 'orange')
            {
                price = 0.85 * quantity;
                console.log(price.toFixed(2));
            }
            else if(fruit === 'grapefruit')
            {
                price = 1.45 * quantity;
                console.log(price.toFixed(2));
            }
            else if(fruit === 'kiwi')
            {
                price = 2.70 * quantity;
                console.log(price.toFixed(2));
            }
            else if(fruit === 'pineapple')
            {
                price = 5.50 * quantity;
                console.log(price.toFixed(2));
            }
            else if(fruit === 'grapes')
            {
                price = 3.85 * quantity;
                console.log(price.toFixed(2));
            }
            else
            console.log('error');
            break;

        case 'Saturday':
        case 'Sunday':
            if(fruit === 'banana')
                {
                    price = 2.7 * quantity;
                    console.log(price.toFixed(2));
                }
                else if(fruit === 'apple')
                {
                    price = 1.25 * quantity;
                    console.log(price.toFixed(2));
                }
                else if(fruit === 'orange')
                {
                    price = 0.9 * quantity;
                    console.log(price.toFixed(2));
                }
                else if(fruit === 'grapefruit')
                {
                    price = 1.60 * quantity;
                    console.log(price.toFixed(2));
                }
                else if(fruit === 'kiwi')
                {
                    price = 3 * quantity;
                    console.log(price.toFixed(2));
                }
                else if(fruit === 'pineapple')
                {
                    price = 5.60 * quantity;
                    console.log(price.toFixed(2));
                }
                else if(fruit === 'grapes')
                {
                    price = 4.20 * quantity;
                    console.log(price.toFixed(2));
                }
                else
                {
                    console.log('error');
                }
                
                break;
    }
    }   
    else
    console.log('error');
}

magazineFruits('apple', 'Tuesday', 2)
magazineFruits('orange', 'Sunday', 3)
magazineFruits('tomato', 'Monday', 0.5)
magazineFruits('kiwi', 'Monday', 2.5);
magazineFruits('banana', 'Samolet', 3)