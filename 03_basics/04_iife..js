// Immediately Invoked Function Expressions (IIFE)

//      global scope ke pollution se bachne ke lie hum IIFE ka use krte hai         isly isme ()() lagate hai
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//  👆 this is NAMED IIFE

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

//      👆 this is UNNAMED IIFE
