const myArr = [0,1,2,3,4,5,6]

// Array Methods

// myArr.push(7)
// myArr.push(8)

// myArr.unshift(9) // Unshift assign value in first
//myArr.shift(9) // Remove element from the first index

//console.log(myArr.includes(3)) // verify the value is present or not
//console.log(myArr.indexOf(2));

// const newArr = myArr.join() // onvert in string and joint them


// console.log(myArr);
// console.log(typeof newArr);

//slice,splice*********

console.log("Original:",myArr)

const myn1 = myArr.slice(1,3) // Slice dosent print last range index

console.log("SLice:" , myn1)

const myn2 = myArr.splice(1,3) // splice manipulate and exclude values from arrays

console.log("Original:",myArr) // Change in original 
console.log("Splice:" , myn2) 


