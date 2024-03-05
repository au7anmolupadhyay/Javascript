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
function b(){
    var y = "Cristiano"
}

// check in inspect > sources > use debugger and check are you able to see y and x or any of them, this will clear you the doubt of which is inside global space and which is not

/*
  shortest JS program is an empty code
     when you will write window you will see a list of objects 
     this is what gets initializde even if you dont code a single word

     this and window are same 
     check for      this === window , will return true;

*/