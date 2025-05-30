function solve() {
    const textInput = document.getElementById("text").value.toLowerCase();
    const convention = document.getElementById("naming-convention").value;
    const resultSpan = document.getElementById("result");

    const words = textInput.split(" ");
    let result = "";

    if (convention === "Camel Case") {
        result = words[0];
        for (let i = 1; i < words.length; i++) {
            result += words[i][0].toUpperCase() + words[i].slice(1);
        }
    } else if (convention === "Pascal Case") {
        for (let word of words) {
            result += word[0].toUpperCase() + word.slice(1);
        }
    } else {
        result = "Error!";
    }

    resultSpan.textContent = result;
}
