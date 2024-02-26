

// let score = 77;
// score = "77";

// console.log(typeof score);
// console.log(typeof (score));

// // const value = Number(score);
// // console.log(typeof(value));

// //suppose we change it the score to "77abc" and then convert it into number, what will it print then when asked the type of : Eg 👇

// let rank = "12abc";

// const rnk = Number(rank);
// console.log(typeof rnk);
// console.log(rnk);

// //                             therefore here we are getting  "NaN" when asked tyoe of "12abc"


// /*
//     "33" = 33
//     "33abc" = NaN    
// */


// let isLog = "no";
// const loggedIn = Boolean(isLog);

// console.log(loggedIn)

//************************************    operations    ********************************************//



let value = 7;
let neg = -value;

// console.log(neg);


                                                // power = 3^2, in js => 3**2

// console.log(2**5);

                                                        // Concatenation

// let f_name = "Anmol"
// let s_name = " Upadhyay"

// console.log(f_name + s_name);


console.log(1 + "2");
console.log("1" + 2);


//  how js understands that it should be 12 

console.log("1" + 2 + 2);         // 122
console.log(1 + "2" + 2);         // 122
console.log(1 + 2 + "2");         // 32

// because of ecmascript type conversions
