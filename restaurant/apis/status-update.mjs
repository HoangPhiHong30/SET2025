export async function updateOrderStatus() {
    console.log('Order placed')
    setTimeout(() => {
        console.log('Your order will be ready in 3 minutes')
    }, 3000);
    console.log('Waiting for updates...')
}

updateOrderStatus();