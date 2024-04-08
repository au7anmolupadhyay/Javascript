const coding = ["js", "ruby", "java", "python", "cpp"]


//     FOR EACH mein -> call back function pass krte hai hum 

// coding.forEach( function (val){              // yeh jo hai yeh normal function definition hai bas function ka name ommit kra hai 
//     console.log(val);
// } )

// coding.forEach( (item) => {                  // similarly yahan par bhi function definition jo arrow function se kr rhe hai isme humne ommit kra hai "=" aur variable jisme arrow function ko mostly store krwate hai
//     console.log(item);
// } )


// jaise yahan pr hum printMe function kaa aage foreach mein sirf reference dekr same kaam karwa skte hai

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
