function passwordGenerator(input) {
    let [str1, str2, key] = input;
    let password = (str1 + str2).toLowerCase();
    let vowels = 'aeiou';
    let keyIndex = 0;

    password = password.split('').map(char => {
        if (vowels.includes(char)) {
            let replacement = key[keyIndex % key.length].toUpperCase();
            keyIndex++;
            return replacement;
        }
        return char;
    }).join('');

    console.log(`Your generated password is ${password.split('').reverse().join('')}`);
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);