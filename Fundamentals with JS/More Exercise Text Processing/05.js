function treasureFinder(keyArr, ...messages) {
    let key = keyArr.split(" ").map(Number);

    for (let message of messages) {
        if (message === "find") break;

        let decrypted = message.split("")
            .map((char, i) => String.fromCharCode(char.charCodeAt(0) - key[i % key.length]))
            .join("");

        let typeMatch = decrypted.match(/&(.+?)&/);
        let coordinatesMatch = decrypted.match(/<(.+?)>/);

        if (typeMatch && coordinatesMatch) {
            console.log(`Found ${typeMatch[1]} at ${coordinatesMatch[1]}`);
        }
    }
}


treasureFinder("1 2 1 3", "ikegfp'jpne)bv=41P83X@", "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA", "find");