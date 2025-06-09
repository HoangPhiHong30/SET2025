import {METHODS} from "../../Day21/constants.mjs";
import {driver} from "../constants/drivers.mjs";
async function processOrder() {
    try {
        const response = await fetch('https://683700fb664e72d28e43107b.mockapi.io/restaurant');
        const restaurant = await response.json();

        if(!restaurant.available) {
            throw new Error('Restaurant is closed')
        }
        const paymentResponse = await fetch('https://683700fb664e72d28e43107b.mockapi.io/payment', {
            method: METHODS.POST,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                amount: 29.99
            })
        });
        const payment = await paymentResponse.json();
        const driverResponse = await fetch('https://683705d0664e72d28e4326e4.mockapi.io/delivery-driver', {
            method: METHODS.POST,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                driver: driver.name(Math.random())
            })
        })
    } catch {

    }
}