// var not usually use in js

// let a = 300; // Outer 'a' is initialized to 300

// if (true) {
//     let a = 30; // This 'a' is block-scoped and does not affect the outer 'a'
//     const b = 40; // 'b' is block-scoped and exists only within this block
//     console.log("Inner:", a); // Logs 30 (block-scoped 'a')
// }

// console.log("Outer:", a); // Logs 300 (outer 'a' remains unchanged)

//in curly brackets there are block_scope
// and other is global socope

//+++++++++++++INTRESTING+++++++++++++++++++++++

console.log(addone(5))
function addone(num)
{
    return num + 1;
}


console.log(addtwo(5))
const addtwo = function(num)
{
    return num + 2
}

//there are two methods for declaring scopes first one is usually use 
// but second one is effective thre are not be  access 'addtwo' before initialization
// second one stored function in variable so they are not intiallized