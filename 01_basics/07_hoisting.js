//      Working 👇 as it is normal
const x = 7;

function course(){
    console.log("Chatgpt")
}

console.log(x)
course()

//      Hoisting 👇  invoking and console.log before declaring and intializing the variable and function

// console.log(y) // when will work in browser it will show undefined

course() // will console chatgpt

const y = 7

function course(){
    console.log("Chatgpt")
}

// It's important to note that hoisting is specific to the declaration of variables and functions using var in JavaScript. Variables declared with let and const are hoisted as well, but they are not initialized until the actual code execution reaches their declaration.

console.log(z); // ReferenceError: y is not defined 
let z = 10;
console.log(z); // 10


// if you use arrow function to declare your function it will store it as a variable will assign undefine to it whereas if normal function it will give the entire code    [ go to sources in inspect and see using debugger ]


