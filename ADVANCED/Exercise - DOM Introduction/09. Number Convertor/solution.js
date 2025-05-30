function solve() {

    const fromSelect = document.getElementById('selectMenuFrom');
    const toSelect = document.getElementById('selectMenuTo');
    const input = document.getElementById('input');
    const result = document.getElementById('result');
    const button = document.querySelector('button');

    const options = [
        { text: 'Binary', value: 'binary' },
        { text: 'Hexadecimal', value: 'hexadecimal' },
        { text: 'Octal', value: 'octal' }
    ];

    for (const opt of options) {
        const optionEl = document.createElement('option');
        optionEl.value = opt.value;
        optionEl.textContent = opt.text;
        toSelect.appendChild(optionEl);
    }

    button.addEventListener('click', () => {
        const number = Number(input.value);
        const to = toSelect.value;

        if (isNaN(number)) {
            result.value = 'Invalid number';
            return;
        }

        let converted = '';

        switch (to) {
            case 'binary':
                converted = number.toString(2);
                break;
            case 'hexadecimal':
                converted = number.toString(16).toUpperCase();
                break;
            case 'octal':
                converted = number.toString(8);
                break;
            default:
                converted = number.toString();
        }

        result.value = converted;
    });
}