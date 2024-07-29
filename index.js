// Reverse String
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello World"));

// Count Characters
function countCharacter(str){
    return str.length
}
console.log(countCharacter("Hello World"));

// Capitalize Words
function capitalizeWord(str){
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}
console.log(capitalizeWord("hello world"));

// Array function to find Maximum and Minimun
function findMax(arr){
    return Math.max(...arr)
}
console.log(findMax([1,2,3,4,5]));

function findMin(arr){
    return Math.min(...arr)
}
console.log(findMin([1,2,3,4,5]));

// Sum of Array
function sumArray(arr) {
    return arr.reduce((a,b) => a + b, 0);

}
console.log(sumArray([1,2,3,4,5]));

// Filter Array
function filterArray(arr, condition){
    return arr.filter(condition);
}
console.log(filterArray([1,2,3,4,5], x => x > 3));

// Mathematical Functions / factorial
function factorial(n){
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

// Prime Number
function primeNumber(n){
    if (n <= 1) return false;
    for(let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(primeNumber(5));
console.log(primeNumber(4));

// Fibonacci Sequence
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
  
  console.log(fibonacci(10));