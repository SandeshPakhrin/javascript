
let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let email = "student@example.com";

console.log(pattern.test(email)); // Expected Output: true
