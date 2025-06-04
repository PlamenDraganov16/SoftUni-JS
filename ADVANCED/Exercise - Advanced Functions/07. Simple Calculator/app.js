function calculator() {
    let num1, num2, result;

    return {
        init(selector1, selector2, resultSelector) {
            num1 = document.querySelector(selector1);
            num2 = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add() {
            const n1 = Number(num1.value) || 0;
            const n2 = Number(num2.value) || 0;
            result.value = n1 + n2;
        },
        subtract() {
            const n1 = Number(num1.value) || 0;
            const n2 = Number(num2.value) || 0;
            result.value = n1 - n2;
        }
    };
}



