//immediately Invoked Function Expressions (IIFE)


// IIFE is write like ( function(){})(); named IIFE
// and unnamed IIFE (()=>{})();


(function chai(){
    console.log(`DB is Connected`)
})(); //named IIFE

((name)=>{
    console.log(`DB2 is Connected ${name}`)
})('Aditya') // parameter has been passed