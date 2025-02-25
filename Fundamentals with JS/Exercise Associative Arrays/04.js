function processGuestList(input) {
    let guestList = [];
    let index = input.indexOf("PARTY");
    
    input.slice(0, index).forEach(guest => guestList.push(guest));

    for(let i = index + 1; i < input.length; i++)
    {
        let guest = input[i];
        let guestIndex = guestList.indexOf(guest);
        if(guestIndex !== -1)
        {
            guestList.splice(guestIndex, 1);
        }
    }


    
    let vipGuests = guestList.filter(guest => !isNaN(guest[0]));
    let regularGuests = guestList.filter(guest => isNaN(guest[0]));
    
    console.log(guestList.length);
    console.log(vipGuests.join('\n'));
    console.log(regularGuests.join('\n'));
    
}

processGuestList(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
    ]
    )