function generateReport() {

    const output = document.getElementById('output');
    const checkboxes = document.querySelectorAll('thead input[type="checkbox"]');
    const rows = document.querySelectorAll('tbody tr');

    const selectedColumns = [];
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            selectedColumns.push({
                index: index,
                name: checkbox.name
            });
        }
    });

    const report = [];

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const obj = {};

        selectedColumns.forEach(col => {
            obj[col.name] = cells[col.index].textContent.trim();
        });

        report.push(obj);
    });

    output.value = JSON.stringify(report, null, 2);
}