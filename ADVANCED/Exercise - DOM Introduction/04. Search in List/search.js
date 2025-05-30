function search() {
    const towns = document.querySelectorAll('#towns li');
    const searchText = document.getElementById('searchText').value.toLowerCase();
    let matches = 0;

    for (let i = 0; i < towns.length; i++) {
        const town = towns[i];
        town.style.fontWeight = 'normal';
        town.style.textDecoration = 'none';

        if (town.textContent.toLowerCase().includes(searchText) && searchText !== '') {
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            matches++;
        }
    }

    document.getElementById('result').textContent = `${matches} match${matches !== 1 ? 'es' : ''} found`;

}
