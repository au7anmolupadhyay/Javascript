const myNums = [1,2,3]


// const myTotal = myNums.reduce( function (acc, curr) {
//     console.log(`the acc: ${acc}, current value: ${curr}`)
//     return acc + curr
// },3)               // 3 is the initial value, we call it initializer in terms of reduce

// using arrow function

const myTotal = myNums.reduce((acc, curr) => acc + curr, 3
)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const pay = shoppingCart.reduce((acc, item) => item.price + acc, 0)
console.log(`total amount to pay: ${pay}`)