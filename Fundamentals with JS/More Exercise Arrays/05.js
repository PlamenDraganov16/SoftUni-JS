function tseamAccount(input) {
    let account = input.shift().split(" "); 

    while (input.length > 0) {
        const commandLine = input.shift();

        if (commandLine === "Play!") {
            break;
        }

        const [command, game] = commandLine.split(" ");
        if (command === "Install") {
            if (!account.includes(game)) {
                account.push(game);
            }
        } else if (command === "Uninstall") {
            account = account.filter(g => g !== game);
        } else if (command === "Update") {
            if (account.includes(game)) {
                account = account.filter(g => g !== game); 
                account.push(game); 
            }
        } else if (command.startsWith("Expansion")) {
            const [baseGame, expansion] = game.split("-");
            if (account.includes(baseGame)) {
                const index = account.indexOf(baseGame);
                account.splice(index + 1, 0, `${baseGame}:${expansion}`);
            }
        }
    }

    console.log(account.join(" "));
}

tseamAccount([ 'CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'])