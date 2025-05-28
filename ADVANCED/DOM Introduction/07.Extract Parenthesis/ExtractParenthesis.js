function extract(content) {
    const text = document.getElementById(id).textContent;
    const matches = text.match(/\(([^)]+)\)/g) || [];

    const result = [];
    for (let i = 0; i < matches.length; i++) {
        result.push(matches[i].slice(1, -1));
    }

    return result.join('; ');
}