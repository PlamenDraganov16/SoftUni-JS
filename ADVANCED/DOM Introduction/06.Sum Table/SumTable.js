function sumTable() {
    const rows = document.querySelectorAll('table tr');
    let total = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        const cols = rows[i].getElementsByTagName('td');
        const value = parseFloat(cols[1].textContent);
        total += value;
    }

    document.getElementById('sum').textContent = total.toFixed(2);
}