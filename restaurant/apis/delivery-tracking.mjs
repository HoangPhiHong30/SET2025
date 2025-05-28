import {deliveryStatus} from "../constants/delivery-status.mjs";

export async function deliveryTracking() {
    let minutes = 6;

    console.log(`Time left: ${minutes - 1} minute(s)`);
    console.log(deliveryStatus[minutes]);
    minutes--;
    const status = setInterval(() => {
        if(minutes == 0) {
            console.log('Order delivered');
            clearInterval(status);
        } else {
            console.log(`Time left: ${minutes - 1} minute(s)`);
            console.log(deliveryStatus[minutes]);
            minutes--;
        }
    }, 1000 * 60);
};

deliveryTracking();