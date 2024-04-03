// sayMyName  is reference whereas sayMyName() is for execution

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){            when we define our function all the data inside is "PARAMETERS"
                                                //  but when we call/invoke a function passed data are called "ARGUMENTS"

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2               this comment when uncommented then it is going to return 8 else it would return undefined
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);     here you will get to know that console is not as same as return, it returns undefined, and console.logs "8".


function loginUserMessage(username = "sam"){        // here it will overwrite if argument is passed else sam will be passed as parameter 
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`             //   here it wont print anything in the console or terminal as it is only returning
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())          ->      "undefined just logged in"


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));