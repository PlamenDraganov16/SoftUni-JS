function attachEvents() {
    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const messagesArea = document.getElementById('messages');
    const authorInput = document.querySelector('input[name="author"]');
    const contentInput = document.querySelector('input[name="content"]');
    const URL = 'http://localhost:3030/jsonstore/messenger';

    // Send message
    submitBtn.addEventListener('click', async () => {
        const author = authorInput.value.trim();
        const content = contentInput.value.trim();

        if (!author || !content) {
            alert('Both name and message are required.');
            return;
        }

        const message = { author, content };

        try {
            await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            });

            contentInput.value = ''; // Clear only the message field after sending
        } catch (error) {
            console.error('Error sending message:', error);
        }
    });

    // Refresh messages
    refreshBtn.addEventListener('click', async () => {
        try {
            const res = await fetch(URL);
            const data = await res.json();

            const formatted = Object.values(data)
                .map(msg => `${msg.author}: ${msg.content}`)
                .join('\n');

            messagesArea.value = formatted;
        } catch (error) {
            console.error('Error loading messages:', error);
        }
    });
}

attachEvents();
