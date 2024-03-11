/*

->  A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
->  In other words, a closure gives you access to an outer function's scope from an inner function. 
->  In JavaScript, closures are created every time a function is created, at function creation time.

*/


function x(){
    var a = 7
    function y(){
        console.log(a)
    }
    y()
}
x()         // this will give the output 7

/*
Function in javascript has special place as it offers various usability in javascript 
 for eg:  you can even pass a function as an argument, you can return it and you can also assign a function to the variable ->
*/

//  1) passing function as argument

function x(){
    var a = 7
    y()
}
x(function y(){
    console.log(a)
});


//  2) assigning a function in variable

function x(){
    var a = function y(){
        console.log(a)
    };
    y()
}
x() 

//  3) you can also return a function

function x(){
    var a = 7
    function y(){
        console.log(a)
    }
    return y
}
var z = x()
console.log(z)  // it will give you the function 'y' ->  " f y(){....} "

//after 1000 line of code if you try to invoke y(), tell what will happen, as from the call stack x() has been vanished how and what will y() function execute because the variable 'a' is in the lexical environment of its parent.

z() // but it will execute and will give output 7

// and this is what closure is, read the first line again, therefore this is because when function was returned, it returned with its reference of parent's environment or say lexical environment

//when you execute this you will get to know about the closure 

