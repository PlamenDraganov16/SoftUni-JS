function solve() {
    const products = Array.from(document.querySelectorAll('.product'));
    const textArea = document.querySelector('textarea');
    const checkoutBtn = document.querySelector('.checkout');
    const addedProducts = [];
    let total = 0;

    for (let product of products) {
        const title = product.querySelector('.product-title').textContent;
        const price = Number(product.querySelector('.product-line-price').textContent);
        const addButton = product.querySelector('.add-product');

        addButton.addEventListener('click', () => {
            addedProducts.push(title);
            total += price;
            textArea.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
        });
    }

    checkoutBtn.addEventListener('click', () => {
        const uniqueProducts = [...new Set(addedProducts)];
        textArea.value += `You bought ${uniqueProducts.join(', ')} for ${total.toFixed(2)}.`;

        document.querySelectorAll('button').forEach(btn => btn.disabled = true);
    });
}
