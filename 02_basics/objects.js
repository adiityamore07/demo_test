//singleton
//objectLiterals
const mySym = Symbol('Key1') 
const JsUser = {
    name:"Aditya",
    "full name":"Aditya More",
    [mySym]:"key1",
    age:20,
    email:"aditya@gmial.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
 
} //object literals

// display the informations

// console.log(JsUser.email)
// console.log(JsUser["full name"])

// How to use symbol  used for denoting key
// using square bracket for denoting symbol
//console.log(JsUser[mySym])

// JsUser.email = "aditya@chat.com" // Tochange the value from the object

// Object.freeze(JsUser)

// JsUser.email = "aditya@microsoft.com"
// console.log(JsUser)

// JsUser.greetings = function()
// {
//     console.log("Hello JS World")
// }

// console.log(JsUser.greetings())



// JsUser.greetings = function()
// {
//     console.log(`Hello Js User ${this.name}` )
// }

// console.log(JsUser.greetings())

const course = {
    coursename: "Js hindi",
    price: "999",
    courseInstructor:"Hitesh"
}

const {courseInstructor} = course // Denotation of an element in object

console.log(courseInstructor)