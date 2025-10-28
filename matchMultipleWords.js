
let pattern = /(cat|dog)/g;
let text = "I have a cat and a dog.";
let result = text.match(pattern);

console.log(result); // Expected Output: ["cat", "dog"]
