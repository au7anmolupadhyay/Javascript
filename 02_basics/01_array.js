// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)     adds number from front
// myArr.shift()        removes number from front

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()      changes type of array into string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)          // does not manipulates the original array therefore only gives the range provided in (from, till) 

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)         //manipulates the original array therefore it extracts the range provided in the () 
console.log("C ", myArr);
console.log(myn2);