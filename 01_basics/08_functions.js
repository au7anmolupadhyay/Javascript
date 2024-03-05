// each and every function creates its local execution context 

var x = 1;
a();
b();
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}

/*
output 

10
100 
1

*/

// everything declared outside any function is of global space

var x = "Anmol";
function b