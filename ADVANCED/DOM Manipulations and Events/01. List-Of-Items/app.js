function addItem() {
    let input = document.getElementById("newItemText");
    let text = input.value;

    let el = document.createElement("li");
    el.textContent = text;

    let list = document.getElementById("items");
    list.appendChild(el);

    input.value = '';
}