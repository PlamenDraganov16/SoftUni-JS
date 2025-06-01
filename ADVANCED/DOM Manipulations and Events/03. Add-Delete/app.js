function addItem() {
    let input = document.getElementById("newItemText");
    let text = input.value;

    let el = document.createElement("li");
    el.textContent = text;

    let deleteBtn = document.createElement('a');

    deleteBtn.textContent = "[Delete]";
    deleteBtn.href = '#';
    el.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', (event) => {
        event.target.parentElement.remove();
    })

    let list = document.getElementById("items");
    list.appendChild(el);

    input.value = '';
}