let order = [];
let totalAmount = 0;

function addItem(name, price) {
    // Add item to the order list
    order.push({name: name, price: price});
    // Update the order summary and total
    updateOrderSummary();
}

function updateOrderSummary() {
    const orderSummary = document.getElementById('orderSummary');
    const totalAmountDisplay = document.getElementById('totalAmount');
    
    // Clear current order summary
    orderSummary.innerHTML = '';
    totalAmount = 0;

    // Loop through the order and display each item
    order.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - $${item.price}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeItem(index);

        itemDiv.appendChild(removeButton);
        orderSummary.appendChild(itemDiv);

        // Add to total amount
        totalAmount += item.price;
    });

    // Update total amount display
    totalAmountDisplay.textContent = totalAmount;
}

function removeItem(index) {
    // Remove item from the order list
    order.splice(index, 1);
    // Update the order summary and total
    updateOrderSummary();
}

function placeOrder() {
    if (order.length === 0) {
        alert("Your order is empty!");
        return;
    }

    const orderNames = order.map(item => item.name).join(', ');
    alert(`Order placed: ${orderNames}\nTotal: $${totalAmount}`);

    // Reset order and total
    order = [];
    totalAmount = 0;
    updateOrderSummary();
}
