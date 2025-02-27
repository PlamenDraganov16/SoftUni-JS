function valueOfString(str, type) {
    let sum = 0;
    for (let char of str) {
        if (type === "UPPERCASE" && char >= 'A' && char <= 'Z') {
            sum += char.charCodeAt(0);
        } else if (type === "LOWERCASE" && char >= 'a' && char <= 'z') {
            sum += char.charCodeAt(0);
        }
    }
    console.log(`The total sum is: ${sum}`);
}

valueOfString('HelloFromMyAwesomePROGRAM', 'LOWERCASE');