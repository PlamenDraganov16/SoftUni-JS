function subtract() {
    let numAAsString = document.getElementById("firstNumber").value;
    let numBAsString = document.getElementById("secondNumber").value;

    let numA = Number(numAAsString);
    let numB = Number(numBAsString);

    let result = numA - numB;

    document.getElementById("result").textContent = result;
}