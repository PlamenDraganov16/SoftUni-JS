async function loadRepos() {
    const username = document.getElementById('username').value;
    const reposList = document.getElementById('repos');

    reposList.innerHTML = '';

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);

        if (!response.ok) {
            throw new Error(`${response.status} (${response.statusText})`);
        }

        const data = await response.json();

        data.forEach(repo => {
            const li = document.createElement('li');
            li.innerHTML = `
                <a href="${repo.html_url}">
                    ${repo.full_name}
                </a>
            `;
            reposList.appendChild(li);
        });
    } catch (error) {
        const li = document.createElement('li');
        li.textContent = error.message;
        reposList.appendChild(li);
    }
}
