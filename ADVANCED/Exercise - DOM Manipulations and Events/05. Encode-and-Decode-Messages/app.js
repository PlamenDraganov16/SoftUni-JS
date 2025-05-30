function encodeAndDecodeMessages() {
    const [encodeSection, decodeSection] = document.querySelectorAll('main > div');

    const encodeTextarea = encodeSection.querySelector('textarea');
    const encodeBtn = encodeSection.querySelector('button');

    const decodeTextarea = decodeSection.querySelector('textarea');
    const decodeBtn = decodeSection.querySelector('button');

    encodeBtn.addEventListener('click', () => {
        const message = encodeTextarea.value;
        let encodedMessage = '';

        for (let i = 0; i < message.length; i++) {
            encodedMessage += String.fromCharCode(message.charCodeAt(i) + 1);
        }

        decodeTextarea.value = encodedMessage;
        encodeTextarea.value = ''; 
    });

    decodeBtn.addEventListener('click', () => {
        const encodedMessage = decodeTextarea.value;
        let decodedMessage = '';

        for (let i = 0; i < encodedMessage.length; i++) {
            decodedMessage += String.fromCharCode(encodedMessage.charCodeAt(i) - 1);
        }

        decodeTextarea.value = decodedMessage;
    });
}