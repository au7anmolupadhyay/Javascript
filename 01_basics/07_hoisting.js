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

const y = 7;

function course(){
    console.log("Chatgpt")
}

