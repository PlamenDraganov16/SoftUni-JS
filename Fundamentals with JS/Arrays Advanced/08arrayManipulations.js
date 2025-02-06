function manipulation(arr)
{
    let numbers = arr[0].split(' ').map(Number);

    for (let i = 1; i < arr.length; i++) {
        let command = arr[i].split(' ');
        
        let action = command[0];
        
        if (action === 'Add') {
            let number = Number(command[1]);
            numbers.push(number); 
        } else if (action === 'Remove') {
            let number = Number(command[1]);
            numbers = numbers.filter(num => num !== number); 
        } else if (action === 'RemoveAt') {
            let index = Number(command[1]);
            numbers.splice(index, 1); 
        } else if (action === 'Insert') {
            let number = Number(command[1]);
            let index = Number(command[2]);
            numbers.splice(index, 0, number); 
        }
    }

    console.log(numbers.join(' '));
}

manipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
    );