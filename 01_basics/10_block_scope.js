/*

block can be defined by {} curly braces

if (true)   -> this statement is expecting a statement after it in one line like,

if (true) console.log("done!");     here it is of just line so no need to use "{}"

but what if it is required more lines of code, then

if(true){
    var a = "Cristiano"
    console.log(a)
}                                   -> so here "{}" this treats all code inside it as one line, known as "BLOCK";


WHAT IS BLOCK SCOPE: 
        all the variables function we can access inside "{}" can be considered in block scope

    {
    var a = 10;
    let b = 100;
    const c = 1000;
    console.log(a);         -> 10
    console.log(b);         -> 100
    console.log(c);         -> 1000
}

    console.log(a);         -> 10
    console.log(b);         -> will not execute because let is inside the block scope not inside the global
    console.log(c);         -> will not execute because const is inside the block scope not inside the global

----------------------------------------------------------


eg: 

var a = 100;
{
    var a = 10;
    console.log(a);
}
console.log(a);

-> it will print        10 and 10 , as var is declared in global scope therefore gets updated and SHADOWS the var variable      this only happens in the case of "var", because they are declared in global scope and can be accessed outside "{}"



eg:

let a = 100;
{
    let a = 10;
    console.log(a);
}
console.log(a);

-> it will print        10 and 100, as it doesnt get updated and only shadows inside it's block scope
                        even this a will not be in global , but a = 10 inside "block" and a = 100 inside "script", open console < sources in web dev tools inspect
*/