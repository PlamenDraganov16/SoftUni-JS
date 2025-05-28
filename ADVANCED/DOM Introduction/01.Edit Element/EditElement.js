function editElement(ref, match, replacer) {
    let textContent = ref.textContent;
    let result = (textContent.replace(new RegExp(match, 'g'), replacer));
    ref.textContent = result;
}