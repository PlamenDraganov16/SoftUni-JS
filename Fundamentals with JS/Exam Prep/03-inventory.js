function solve(arr)
{
    let myInventory = arr.shift().split(', ');

    let index = 0;
    let command = arr[index]

    while(command !== 'Craft!')
    {
        let elements = command.split(' - ');
        let action  = elements.shift();

        switch(action)
        {
            case 'Collect':
                
                if(!myInventory.includes(elements[0]))
                {
                    myInventory.push(elements[0]);
                }
                break;
            case 'Drop':
                let item = elements[0];
                let indexItem = myInventory.indexOf(item);
                if(indexItem !== -1)
                {
                myInventory.splice(indexItem, 1);
                }
                break;
            case 'Combine Items':
                let items = elements[0].split(':');
                let oldItem = items[0];
                let newItem = items[1];
                let indexOldItem = myInventory.indexOf(oldItem);

                if(indexOldItem !== -1)
                {
                    myInventory.splice(indexOldItem + 1, 0, newItem);
                }
                break;
            case 'Renew':
                let indexEl = myInventory.indexOf(elements[0])
                if(indexEl !== -1)
                {
                    let currentItem = myInventory.splice(indexEl, 1);
                    myInventory.push(currentItem);
                }
                break;
        }
        command = arr[index];
        index++
    }

    console.log(myInventory.join(', '));

}

solve(['Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!']);

    function manageInventory(commands) {
        let inventory = commands[0].split(", ");
    
        function collect(item) {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        }
    
        function drop(item) {
            const index = inventory.indexOf(item);
            if (index !== -1) {
                inventory.splice(index, 1);
            }
        }
    
        function combineItems(oldItem, newItem) {
            const index = inventory.indexOf(oldItem);
            if (index !== -1) {
                inventory.splice(index + 1, 0, newItem);
            }
        }
    
        function renew(item) {
            const index = inventory.indexOf(item);
            if (index !== -1) {
                inventory.push(inventory.splice(index, 1)[0]);
            }
        }
    
        
        for (let i = 1; i < commands.length; i++) {
            const command = commands[i];
            
            if (command === "Craft!") {
                break;
            }
            
            const parts = command.split(" - ");
            const action = parts[0];
            
            if (action === "Collect") {
                const item = parts[1];
                collect(item);
            } 
            
            else if (action === "Drop") {
                const item = parts[1];
                drop(item);
            } 
            
            else if (action === "Combine Items") {
                const [oldItem, newItem] = parts[1].split(":");
                combineItems(oldItem, newItem);
            } 
            
            else if (action === "Renew") {
                const item = parts[1];
                renew(item);
            }
        }
        
        
        console.log(inventory.join(", "));
        }