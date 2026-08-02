let scores = [45, 82, 91, 60, 73];   //Instead for loop we can use map,filter
let grades = scores.map(item_score => item_score > 70 ? "Pass": "Fail");   //item_score is a temporary varibale.it can any value
console.log(grades);  // will output-->[Fail,Pass,Pass,Fail,Pass]

let scores = [45, 82, 91, 60, 73];
let passing = scores.filter(s => s >= 70);
console.log(passing);  //output is [82,91,73]

let nums = [10,1,21,2];
 nums.sort();
nums.sort((a,b) => a-b);
console.log(nums);  

let original = [1, 2, 3];
let deep_copy_array = original;
// Deep copy

deep_copy_array.push(91);
console.log(original);
console.log(deep_copy_array);
