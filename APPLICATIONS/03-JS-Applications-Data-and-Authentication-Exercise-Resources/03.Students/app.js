window.addEventListener('load', attachEvents);

function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';
    const tableBody = document.querySelector('#results tbody');
    const form = document.getElementById('form');
    const inputs = form.querySelectorAll('input');
    const notification = document.querySelector('.notification');

    // Load students on page load
    loadStudents();

    // Handle form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const student = {
            firstName: inputs[0].value.trim(),
            lastName: inputs[1].value.trim(),
            facultyNumber: inputs[2].value.trim(),
            grade: inputs[3].value.trim()
        };

        if (!isValid(student)) {
            showNotification('All fields are required and must be valid.');
            return;
        }

        try {
            await fetch(BASE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(student)
            });

            form.reset();
            loadStudents();
        } catch (err) {
            showNotification('Error submitting student.');
            console.error(err);
        }
    });

    // Load and display students
    async function loadStudents() {
        tableBody.innerHTML = '';

        try {
            const res = await fetch(BASE_URL);
            const data = await res.json();

            Object.values(data).forEach(s => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${s.firstName}</td>
                    <td>${s.lastName}</td>
                    <td>${s.facultyNumber}</td>
                    <td>${Number(s.grade).toFixed(2)}</td>
                `;
                tableBody.appendChild(row);
            });
        } catch (err) {
            showNotification('Error loading students.');
            console.error(err);
        }
    }

    // Validate input fields
    function isValid({ firstName, lastName, facultyNumber, grade }) {
        return (
            firstName !== '' &&
            lastName !== '' &&
            /^\d+$/.test(facultyNumber) &&
            !isNaN(parseFloat(grade))
        );
    }

    // Show notification
    function showNotification(message) {
        notification.textContent = message;
        setTimeout(() => notification.textContent = '', 3000);
    }
}