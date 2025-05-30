function attachEventsListeners() {
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', () => {
        const days = Number(daysInput.value);
        hoursInput.value = days * 24;
        minutesInput.value = days * 24 * 60;
        secondsInput.value = days * 24 * 60 * 60;
    });

    document.getElementById('hoursBtn').addEventListener('click', () => {
        const hours = Number(hoursInput.value);
        daysInput.value = hours / 24;
        minutesInput.value = hours * 60;
        secondsInput.value = hours * 60 * 60;
    });

    document.getElementById('minutesBtn').addEventListener('click', () => {
        const minutes = Number(minutesInput.value);
        daysInput.value = minutes / (24 * 60);
        hoursInput.value = minutes / 60;
        secondsInput.value = minutes * 60;
    });

    document.getElementById('secondsBtn').addEventListener('click', () => {
        const seconds = Number(secondsInput.value);
        daysInput.value = seconds / (24 * 60 * 60);
        hoursInput.value = seconds / (60 * 60);
        minutesInput.value = seconds / 60;
    });
}