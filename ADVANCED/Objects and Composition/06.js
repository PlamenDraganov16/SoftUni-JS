function fromJSONToHTMLTable(input) {
    const data = JSON.parse(input);

    if (data.length === 0) {
        return '<table>\n</table>';
    }

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            // .replace(/'/g, '&#39;');
            .replace(/ /g, "&nbsp;");
    }

    const keys = Object.keys(data[0]);
    let html = '<table>\n';

    html += '<tr>';
    for (const key of keys) {
        html += `<th>${escapeHtml(key)}</th>`;
    }
    html += '</tr>\n';

    for (const obj of data) {
        html += '<tr>';
        for (const key of keys) {
            html += `<td>${escapeHtml(obj[key])}</td>`;
        }
        html += '</tr>\n';
    }

    html += '</table>';
    return html;
}
