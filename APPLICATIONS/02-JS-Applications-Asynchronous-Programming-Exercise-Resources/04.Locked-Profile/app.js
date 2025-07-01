function lockedProfile() {
    const main = document.getElementById('main');
    const BASE_URL = 'http://localhost:3030/jsonstore/advanced/profiles';

    fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            main.innerHTML = ''; 

            Object.values(data).forEach((profile, index) => {

                index++;

                const profileDiv = document.createElement('div');
                profileDiv.className = 'profile';

                profileDiv.innerHTML = `
                    <img src="./iconProfile2.png" class="userIcon" />
                    <label>Lock</label>
                    <input type="radio" name="user${index}Locked" value="lock" checked>
                    <label>Unlock</label>
                    <input type="radio" name="user${index}Locked" value="unlock"><br>
                    <hr>
                    <label>Username</label>
                    <input type="text" name="user${index}Username" value="${profile.username}" disabled readonly />
                    <div class="user${index}Username" style="display: none;">
                        <hr>
                        <label>Email:</label>
                        <input type="email" name="user${index}Email" value="${profile.email}" disabled readonly />
                        <label>Age:</label>
                        <input type="number" name="user${index}Age" value="${profile.age}" disabled readonly />
                    </div>
                    <button>Show more</button>
                `;

                const button = profileDiv.querySelector('button');
                const hiddenFields = profileDiv.querySelector(`.user${index}Username`);
                const unlockRadio = profileDiv.querySelector(`input[value="unlock"]`);

                button.addEventListener('click', () => {
                    if (unlockRadio.checked) {
                        if (hiddenFields.style.display === 'none') {
                            hiddenFields.style.display = 'block';
                            button.textContent = 'Hide it';
                        } else {
                            hiddenFields.style.display = 'none';
                            button.textContent = 'Show more';
                        }
                    }
                });

                main.appendChild(profileDiv);
            });
        })
        .catch(err => {
            main.innerHTML = '<h2 style="color: red;">Error loading profiles.</h2>';
            console.error(err);
        });
}
