function addItem() {
    const textInput = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    const text = textInput.value.trim();
    const value = valueInput.value.trim();

    if (text === '' || value === '') {
        alert('Please enter both text and value.');
        return;
    }

    const option = document.createElement('option');
    option.textContent = text;
    option.value = value;

    menu.appendChild(option);

    textInput.value = '';
    valueInput.value = '';
}