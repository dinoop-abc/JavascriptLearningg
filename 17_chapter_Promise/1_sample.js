function orderFood() {
console.log("Food ordered...");
return new Promise((resolve, reject) => {  //I will give you the result later."
setTimeout(() => {  // Imagine restaurant preparing food
console.log("Food is ready!");
resolve(); // Promise completed successfully
}, 2000);
    });
}
orderFood(); //Output->Food ordered after 2 se Food is Ready