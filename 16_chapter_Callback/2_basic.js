function placeOrder(item, callback){
    console.log("Order Placed....");
    callback();
}
function print() {
    console.log("Normal Fn - Done with the order");  // Define
}
//placeOrder("Burger", print); // First Way Output is->Order placed.Normal fn-done with the order.

placeOrder("Burger", function(){
    console.log("Order is ready!, pick it up!");
})

placeOrder("Burger", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});