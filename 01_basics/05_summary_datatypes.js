// JS is dynamically typed language as we dont have to mention explicitly the datatype like in c,c++ (datatypes are determined at the runtime)


// primitive datatypes (these are CALL BY VALUES)
// 7  String, Symbol, Number, Null, BigInt, Boolean, Undefined          SSNNBBU

const name = "Anmol"
const num = 7

const score = null
console.log(typeof(score)) //object

const big_num  = 12345678765432345678987543n
console.log(typeof(big_num)) // bigint

const played = false
const bottle = undefined
const sign = Symbol('123')
const sign2 = Symbol('123')

console.log(sign == sign2)


// non-primitive datatypes  (these are call by reference)
// Objects, Array, Functions            all these have TYPEOF -> object & function has typeof -> object function

const arr = [ "John", "Harshita", "Jay", "Ballu"]

const myObject = {
    name : "Anmol",
    age : 18
}

let func = function(){
    console.log("Cristiano Ronaldo")
}

func()






//                      Stack (primitive)   &    Heap (non-primitive)  
//          stack -> gets a copy 
//          heap -> gets reference


//STACK
let company_name = "AU7"

let brand = company_name;
brand = "AnmolUpadhyayA7"

console.log(company_name)
console.log(brand)          // as it was in stack only the copy got changed original remained same i.e. AU7

//HEAP
let user1 = {
    email: "anmolupadhyay@gmail.com",
    upi: "anmol@ybl"
}

let user2 = user1
user2.email = "Dogra@gmail.com";

console.log(user1.email)
console.log(user2.email)       // as it was in heap therefore the original got updated because of "call by reference"