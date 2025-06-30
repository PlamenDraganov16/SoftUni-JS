async function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const commitsList = document.getElementById('commits');

    commitsList.innerHTML = '';

    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} (Not Found)`);
        }

        const data = await response.json();

        data.forEach(commit => {
            const li = document.createElement('li');
            li.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
            commitsList.appendChild(li);
        });

    } catch (error) {
        const li = document.createElement('li');
        li.textContent = error.message;
        commitsList.appendChild(li);
    }
}
