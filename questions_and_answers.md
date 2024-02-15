1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined

Answer: A
The code declares a variable named greeting, but mistakenly assigns an empty object to a non-existent variable greetign. This results in a ReferenceError. The corrected code assigns an empty object to the correct variable greeting and prints it, resulting in the output {}.

2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer :C


The sum function attempts to add the parameters a and b. However, when calling sum(1, "2"), JavaScript concatenates the numeric 1 with the string "2", resulting in the string "12". Therefore, the correct answer is C: "12".

3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer :A


The code creates an object info with a property favoriteFood referencing the first element of the food array. Later, it assigns a new value "🍝" to info.favoriteFood. This change does not affect the original food array. Therefore, the correct answer is:

A: ['🍕', '🍫', '🥑', '🍔']
4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer B,

The sayHi function expects a parameter name, but when called with sayHi(), no argument is provided. In JavaScript, when a function is called without an argument, the parameter takes the value undefined. Therefore, the correct answer is:

B: Hi there, undefined
5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer :D,

The forEach loop iterates over each element in the nums array. The condition if (num) checks if the current element is truthy (not equal to 0). Since all elements in the array are truthy, the count increments for each element. Therefore, the correct answer is:

D: 4