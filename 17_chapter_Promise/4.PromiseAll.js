function pizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Pizza is ready!");
            resolve("Pizza");
        }, 2000);
    });
}
function juice() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Juice is ready!");
            resolve("Juice");
        }, 1000);
    });
}
Promise.all([pizza(),  juice()]) //Start all these operations and wait until ALL of them finish
    .then((food) => {
        console.log("All food is ready!");
        console.log(food);
    });