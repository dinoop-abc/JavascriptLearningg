function foodReady() {
    console.log("Food is ready!");
}
function orderFood(callback) {
    console.log("Food ordered...");
setTimeout(() => {
        callback(); // Executes after 2 seconds.Wait approximately 2 seconds, then execute the callback."
    }, 2000);
}
orderFood(foodReady);
console.log("Customer is waiting..."); 
//Output->Food ordered .customer is waiting. Food is Ready