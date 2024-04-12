


"use strict"// this ensure the js uses the lates version

//alert(3+3)   cannot use alert here as it is a node file(as it runs on V8 JS engine ) and not working on web browswer

//          THERE ARE 7 TYPES OF DATATYPE

/*
            1. number   JavaScript can safely store integers in the range of -(2^53 - 1) to (2^53 - 1). 
            2. string   "Anmol"
            3. boolean                                  (true/false)
            4. null     its type is "OBJECT"            (standalone value)
            5. undefined  its type is "UNDEFINED"
            6. bigint
            7. symbol   

*/


//type of

const name = "Anmol"
const age = 18
const torf = true
const bigNum = 12345678987654321234567987654323456789876543234567812342123456789876543212345678765432345678
const null_ = null
const symbols = "foo"
const sport = undefined

console.log(typeof name);
console.log(typeof age);
console.log(typeof torf);
console.log(typeof bigNum);
console.log(typeof null_);
console.log(typeof symbol);
console.log(typeof sport);