function orderFood() {
return new Promise((resolve, reject) => {
let foodAvailable = false;
if (foodAvailable) {
            resolve("Food is ready!");
        } else {
            reject("Food is not available!");
        }
});
}
orderFood()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);  //Output-->Food is not avalibale
    });