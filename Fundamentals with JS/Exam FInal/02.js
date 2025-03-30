function messageTranslator(input) {
    let n = Number(input.shift());
    let pattern = /^!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[A-Za-z]{8,})\]$/;
    
    for (let i = 0; i < n; i++) {
        let match = input[i].match(pattern);
        
        if (match) {
            let command = match.groups.command;
            let message = match.groups.message;
            let translated = message.split('').map(ch => ch.charCodeAt(0)).join(' ');
            console.log(`${command}: ${translated}`);
        } else {
            console.log("The message is invalid");
        }
    }
}

messageTranslator([
    "2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready]"
]);