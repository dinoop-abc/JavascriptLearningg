function orderFood() {
    return new Promise((resolve) => {
           setTimeout(() => {
            console.log("Food ordered...");
            resolve("Food order completed");
       }, 1000);
    });
}
function prepareFood(message) {
    return new Promise((resolve) => {
       setTimeout(() => {
            console.log(message);
            console.log("Food prepared...");

            resolve("Food preparation completed");
}, 2000);
    });
}
function deliverFood(message) {
    return new Promise((resolve) => {
         setTimeout(() => {
            console.log(message);
            console.log("Food delivered!");
             resolve("Food delivery completed");
                   }, 1000);
    });
}
orderFood()

.then((result) => {
        return prepareFood(result);
    })

    .then((result) => {
        return deliverFood(result);
    })

    .then((result) => {
        console.log(result);
        console.log("Let's eat!");
    });