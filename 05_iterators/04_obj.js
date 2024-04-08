const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// Jaise normal array mein "for of" lag gaya tha, pr object mein "for in" loop lagate hai

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {        // jab array mein key dkhte hai toh wo index dikhata hai jo 0 se n-1 tk jata hai
                                        //   and this was the main reason of creating objects ki key kuch bhi bana skte hai hum
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }