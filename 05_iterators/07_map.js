const nums = [1,2,3,4,5,6,7,8,9]

// const ans = nums.map( (i) => i+5 )

//      👇 this is known as chaining
const ans1 = nums
                .map((i) => i*10)
                .map((i) => i+1)
console.log(ans1)