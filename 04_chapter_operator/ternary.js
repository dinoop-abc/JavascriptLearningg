let age = 20;
let is_pramod_will_go_to_goa = age > 18 ? "Yes" : "No";
console.log("This person can go goa?", is_pramod_will_go_to_goa);

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "✅ PASS" : "❌ FAIL";
console.log(testResult);

let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`);
// Template Literal
console.log(`What is the SLA time ? - ${sla}`);