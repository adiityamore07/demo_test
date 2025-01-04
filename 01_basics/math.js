// // // const score = 400
// // // console.log(score)

// // // const balance = new Number (100)
// // // console.log(balance);

// // // console.log(balance.toString().length) // TO convert value in strings
// // // console.log(balance.toFixed(3)); // TO give the fix price after the decimal (E-commerce)

// // const hundreds = 1000000
// // console.log(hundreds.toLocaleString('en-IN')) // Allocate value in Indian numbering system

// //***********************MATH****************/

// console.log(Math)
// console.log(Math.abs(-4)) // TO convert -ve to +ve in absolute value
// console.log(Math.round(4.2)) // Round up the value
// console.log(Math.ceil(4.3)) // Assign highest value (5)
// console.log(Math.floor(4.3)) // Assign Lowest possible value (4)

// console.log(Math.random()) // Random number assign
// console.log(Math.random()*10 + 1) // Never be zero

const min = 10
const max = 20 
console.log(Math.floor((Math.random()* (max-min +1)) + min))
