function foodReady() {
    console.log("Food is ready!");
}
function orderFood(callback) {
    console.log("Food ordered...");
callback(); // Imagine some work happening
}
orderFood(foodReady);  //Output-->Food ordered...Food is ready!