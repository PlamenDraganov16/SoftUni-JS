function tripleLatinLetters(n)
{
    let num = Number(n); // Преобразуваме входа в число

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {
                // Получаваме символите с ASCII кодове
                let firstLetter = String.fromCharCode(97 + i);
                let secondLetter = String.fromCharCode(97 + j);
                let thirdLetter = String.fromCharCode(97 + k);

                // Отпечатваме всяка комбинация
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}

tripleLatinLetters(3)