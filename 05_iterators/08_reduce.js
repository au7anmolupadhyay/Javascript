const myNums = [1,2,3]


// const myTotal = myNums.reduce( function (acc, curr) {
//     console.log(`the acc: ${acc}, current value: ${curr}`)
//     return acc + curr
// },3)               // 3 is the initial value, we call it initializer in terms of reduce

// using arrow function

const myTotal = myNums.reduce((acc, curr) => acc + curr, 3
)


console.log(myTotal);