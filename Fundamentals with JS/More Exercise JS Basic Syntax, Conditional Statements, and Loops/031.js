function nextDay(year, month, day) {
    // Създаваме обект Date с подадените параметри
    let currentDate = new Date(year, month - 1, day); // month - 1, защото месеците са индексирани от 0

    // Добавяме 1 ден
    currentDate.setDate(currentDate.getDate() + 1);

    // Извличаме новата година, месец и ден
    let nextYear = currentDate.getFullYear();
    let nextMonth = currentDate.getMonth() + 1; // Връщаме месеците в диапазона [1-12]
    let nextDay = currentDate.getDate();

    // Връщаме резултата във формат "година-месец-ден"
    return `${nextYear}-${nextMonth}-${nextDay}`;
}

// Примери за тестове
console.log(nextDay(2016, 9, 30));  // Output: "2016-10-1"
console.log(nextDay(1, 1, 1)); // Output: "2025-1-1"
console.log(nextDay(2020, 2, 28));//Output: '2020-2-29'