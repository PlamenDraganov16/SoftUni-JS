function gladiatorInventory(commands) {
    let inventory = commands.shift().split(" ");

    for (let command of commands) {
        let tokens = command.split(" ");
        let action = tokens[0];
        let equipment = tokens[1];

        switch (action) {
            case "Buy":
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;

            case "Trash":
                inventory = inventory.filter(item => item !== equipment);
                break;

            case "Repair":
                if (inventory.includes(equipment)) {
                    inventory = inventory.filter(item => item !== equipment);
                    inventory.push(equipment);
                }
                break;

            case "Upgrade":
                let [baseEquipment, upgrade] = equipment.split("-");
                let index = inventory.indexOf(baseEquipment);
                if (index !== -1) {
                    inventory.splice(index + 1, 0, `${baseEquipment}:${upgrade}`);
                }
                break;
        }
    }

    console.log(inventory.join(" "));
}

gladiatorInventory([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
]); 

gladiatorInventory([
    'SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'
]); 
