const name = "Harshita Dogra"
const package = 19

// console.log("My name is " + name + ". I have secured package of " + package + " Lakhs.")  // old way 

console.log(`My name is ${name}. I have secured package of ${package} Lakhs.`)   // new way of writing using string interpolation
// here in string interpolation you can also add direct methods in ${} like .toUpperCase, toLowerCase and many more.

const name_1 = new String('Anmol');  // another way of declaring Strings
console.log(name_1)

console.log(name_1[0])
// console.log(name_1[0].__proto__) 

console.log(name.length)
console.log(name.charAt(5))
console.log(name.indexOf('t'))


// before any interview do read all these proto functions of string it will help a lot 

console.log(name.substring(0,7)) // last index not included  && if given negative index it will consider it as 0 

// slice -> helps in passing the negative index too

console.log(name.slice(-14, 6))

const first_name = "         Anmol    Upadhyay"
console.log(first_name.trim())  // only the front spaces is trimmed

const url = "https://anmolupadhyay.com/anmol%20au7"
console.log(url.replace('%20','-'))

console.log(url.includes('upadhyay'))

const site = "Anmol-Upadhyay-loves-Cristiano-Ronaldo"
console.log(site.split('-'))