function notify(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.display = 'block';

  function hide() {
    notification.style.display = 'none';
    notification.removeEventListener('click', hide);
  }

  notification.addEventListener('click', hide);
}