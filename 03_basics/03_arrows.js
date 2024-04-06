// if asked what is the global object in the browser -> it is "WINDOW", but when working in nodejs aur standalone engine it is {} therefore "empty object"

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);          //  it refers to the current context 
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }




// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})           // to return object you need to close them in parenthesis when working with arrow function


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()




// function chai (){
//     console.log(this);      // gives various methods

//     let username = "Anmol"
//     console.log(this.username);         // this gives undefined  therefore this keyword only works with object

// }
// chai();

const fun = () => {
    let username = "CR7"
    console.log(this.username);     // undefined

    console.log(this)       // {}       empty object
}

fun();
