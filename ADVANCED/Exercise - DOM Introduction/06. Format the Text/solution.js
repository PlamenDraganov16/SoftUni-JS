function solve() {
    const input = document.getElementById('input').value.trim();
    const output = document.getElementById('output');

    const sentences = input
        .split('.')
        .map(s => s.trim())
        .filter(s => s.length > 0);

    output.innerHTML = '';

    for (let i = 0; i < sentences.length; i += 3) {
        const chunk = sentences.slice(i, i + 3).join('. ') + '.';
        output.innerHTML += `<p>${chunk}</p>`;
    }
}
