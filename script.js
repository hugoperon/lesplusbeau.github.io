const items = document.querySelectorAll('.item');
const totalAmount = document.getElementById('total-amount');

function calculateTotal() {
    let total = 0;

    items.forEach(item => {
        if (item.checked) {
            total += parseFloat(item.getAttribute('data-price'));
        }
    });

    totalAmount.textContent = total;
}

items.forEach(item => {
    item.addEventListener('change', calculateTotal);
});
