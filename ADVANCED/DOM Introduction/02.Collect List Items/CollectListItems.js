function extractText() {
    const input = document.getElementById("items").children;
    const output = document.getElementById("result");
    output.value = "";
    //let result = [];

    for(let item of input) {
        output.value += item.textContent + "\n";
        //result.push(item.textContent)
    }   

    //output.value = result.join('\n');
}