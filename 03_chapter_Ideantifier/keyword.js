let age=40;
console.log(age);
const country = "India";
console.log(country);
//Return
function add(a,b)
{
    return a+b;
}
console.log(add(20,50));
 //break ->output will be 1,2
for (let i = 1; i <= 5; i++) {

    if (i == 3) {
        break;
    }

    console.log(i);
}
//Continue ->Output will be 1,2,4,5
for (let i = 1; i <= 5; i++) {

    if (i == 3) {
        continue;
    }

    console.log(i);
}