function lockedProfile() {
    const profiles = document.querySelectorAll('.profile');

    profiles.forEach(profile => {
        const hiddenFields = profile.querySelector('div[id$="HiddenFields"]');
        hiddenFields.classList.add('hidden');

        const btn = profile.querySelector('button');
        btn.textContent = 'Show more';

        btn.addEventListener('click', () => {
            const unlockRadio = profile.querySelector('input[type="radio"][value="unlock"]');
            if (!unlockRadio.checked) {
                return;
            }

            if (hiddenFields.classList.contains('hidden')) {
                hiddenFields.classList.remove('hidden');
                btn.textContent = 'Hide it';
            } else {
                hiddenFields.classList.add('hidden');
                btn.textContent = 'Show more';
            }
        });
    });
}