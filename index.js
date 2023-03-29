
// Write your code here
let num1, num2;
let result = 62;

for (let i = 1; i <= result; i++) {
  if (result % i === 0) {
    num1 = i;
    num2 = result / i;
  }
}

console.log(num1, num2);

let random = Math.ceil(Math.random() * 100);

console.log(random);


let num3 = 14;
let num4 = 5;

let mod = num3 % num4;

console.log(mod);

let set = [2, 7, 20, 14, 9];

let max = Math.max(...set);

console.log(max);
