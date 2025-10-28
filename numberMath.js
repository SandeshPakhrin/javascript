
let pattern = /\d+/g;
let text = "There are 12 cats and 34 dogs.";
let result = text.match(pattern);

console.log(result); // Expected Output: ["12", "34"]
