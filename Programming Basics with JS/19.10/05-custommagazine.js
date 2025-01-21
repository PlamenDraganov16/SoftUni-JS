function magazine(product, city, numProduct) {
    let price = 0;  

    if(city === 'Sofia' || city === 'Plovdiv' || city === 'Varna')
    {
    
    if (city === 'Sofia') {
       switch( product)
       {
        case 'coffee':
            price = 0.5;
            break;
        
       }
    } else if (city === 'Plovdiv') {
        if (product === 'coffee') {
            price = 0.40;
        } else if (product === 'water') {
            price = 0.70;
        } else if (product === 'beer') {
            price = 1.15;
        } else if (product === 'sweets') {
            price = 1.30;
        } else if (product === 'peanuts') {
            price = 1.50;
        }
    } else if (city === 'Varna') {
        if (product === 'coffee') {
            price = 0.45;
        } else if (product === 'water') {
            price = 0.70;
        } else if (product === 'beer') {
            price = 1.10;
        } else if (product === 'sweets') {
            price = 1.35;
        } else if (product === 'peanuts') {
            price = 1.55;
        }
    }


    let sum = price * numProduct;
    console.log(sum); 
}
else
    console.log('error')
}

magazine('coffee', 'Sofia', 2);
magazine('coffee', 'Yambol', 3)
