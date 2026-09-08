function openUrl() {
return new Promise((resolve, reject) => {
console.log("Opening URL...");
setTimeout(() => {
resolve("URL opened successfully");
// reject("Unable to open URL");
}, 1000);
});
}
function getTitle() {
return new Promise((resolve, reject) => {
console.log("Getting title...");
setTimeout(() => {
 resolve("Login Page");
}, 1000);
});
}
async function loginTest() {
try {
let result1 = await openUrl();
console.log(result1);
let result2 = await getTitle();
console.log(result2);
} catch (error) {
console.log("TEST FAILED");
console.log(error);
}}
loginTest();
