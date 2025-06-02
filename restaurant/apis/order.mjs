import {METHODS} from "../../Day21/constants.mjs";

function processOrder() {
    return fetch('https://683700fb664e72d28e43107b.mockapi.io/:restaurant')
        .then(response => response.json())
        .then(restaurant => {
            if(!restaurant.available) {
                throw new Error('Restaurant is closed!')
            } else {
                return fetch('https://683700fb664e72d28e43107b.mockapi.io/:payment', {
                    method: METHODS.POST,
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({id, amount})
                });
            }
        })
}