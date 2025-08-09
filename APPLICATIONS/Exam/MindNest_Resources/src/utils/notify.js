const box = document.getElementById('errorBox');
const span = box.querySelector('.msg');

export function showError(message) {
    span.textContent = message;

    box.style.display = 'block';

    setTimeout(hideError, 3000); 
}

function hideError() {
    box.style.display = 'none';
}