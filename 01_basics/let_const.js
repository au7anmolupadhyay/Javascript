/* 
Let and const declarations are HOISTED 
and they are in "temporal dead zone" for time being.
*/

console.log(a)      //  this will give you error of "not defined" but it is hoisted 
                    //  go to inspect sources and use debugger you will notice that let and const give "referenceError" when not initialized before 
                    //  and memory is given in the "script" in (seprate memory space) not in global as given to "var" therefore let and const are in "TDZ" (Temporal Dead Zone)

                    //      TDZ (temporal dead zone) - is the time from being hoisted till getting initialized with the value.
                    //      REFERENCE ERROR - error when you are trying to access a "let" or "const" before initialization.
                                                                            OR
                    //                        you are trying to access a variable let or const that has not been defined in the scope. (scope is important)
                    //  therefore only the declaration gets hoisted not declarations
console.log(b)      //  this gets hoisted and memory is saved in the global scope
let a = 10;
var b = 20;


/*
let and const are strict    
throws SyntaxError : if there is redeclaration of let and const declared earlier


const is more stricter : with this it mean you need to initialize there itself where you declare the const

let a;
a = 10;         // is possible declare first and initialize it later in let

const b;
b = 7;          // not possible in const, declare and initialize there itself


--------
// Syntax error :  if you try to initialize const later it will give you syntax error
// Typer error: if you try to re-intialize the same const it will give type error because const is for constant cant be changed
*/



/*

Reference Error VS Syntax Error VS Type Error
examples:


*/