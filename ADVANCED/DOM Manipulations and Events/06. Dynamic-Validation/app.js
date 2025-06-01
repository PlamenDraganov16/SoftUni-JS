function validate() {
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    let input = document.getElementById('email');
    input.addEventListener('change', () => {
        if(!pattern.test(input.value)) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });}