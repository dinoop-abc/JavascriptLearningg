function foodReady() {
    console.log("Food is ready!");
}
function orderFood() {
return new Promise((resolve) => {
console.log("Food ordered...");
setTimeout(() => {
            resolve();
        }, 2000);
});
}
async function eatFood() { //async allow to use await inside the function
await orderFood(); //"Start orderFood() and wait for its Promise to complete."
foodReady();
console.log("Let's eat!");
}
eatFood();