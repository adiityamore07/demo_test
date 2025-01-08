// const user = 
// {
//     username: "Aditya",
//     price: 999,

//     welcomeMessage: function()
//     {
//         console.log(`${this.username}, Welcome To the Website`)
//         console.log(this)
//     }

// }

// user.welcomeMessage()
// user.username ="Sam"
// user.welcomeMessage()
// console.log(this)


// function chai()
// {
//      username:"Aditya"
//     console.log(this.username)
// }
// chai()

// 
//  const chai =() =>
//  {
//      username:"Aditya"
//     console.log(this.username)
//  } 
// chai()
// THIS keyword are used in objects not works in Functions
// (=>) are denote as arrow function

//const addtwo = (num1,num2) => num1 + num2; // Use of arrow function dont need to writee parenthisis
const addtwo = () => ({username:"Aditya"}) // in arrow function use({}) type parenthisis
console.log(addtwo())