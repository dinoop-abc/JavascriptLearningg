let family = ["Dinoop", "Anjana", "Ayush", ];
console.log(family[0]);          
console.log(family.at(-1));      
console.log(family.length);

let family = ["Dinoop", "Anjana", "Ayush", "Divakaran"];

for (let i = 0; i < family.length; i++) {
    console.log(family[i]);
}

let arr = [1, 2, 3];
console.log(arr);
arr.push(4,5, 6);
console.log(arr);

arr.splice(2, 1);
console.log(arr);

let fam=["Dinoop", "Anjana", "Ayush", "Divakaran"];
let max=fam[0];
for(let i=0;i<fam.length;i++){
    if(fam[i]>max){
        max=fam[i];
    }
}

console.log(max);