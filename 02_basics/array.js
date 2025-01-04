// const marvelHeros = ['Thor','Ironman','Spiderman']
// const dcHeros = ['Flash','Thor','Batman']

// marvelHeros.push(dcHeros)
// console.log(marvelHeros)

// const allNewHeros = marvelHeros.concat(dcHeros) // combine strings using Concat

// console.log(allNewHeros)

//there are another technique to combine strings [SPREAD] are denoted with [...]

// const allNewheros =[...marvelHeros,...dcHeros] // combine strings using Spread

// console.log(allNewheros)

// const another_array=[1,2,3, [4,5,6], 7 ,[8,9,[10,11]]]

// const real_another_array =another_array.flat(Infinity) // used to direct combining 
// console.log(real_another_array);

// console.log(Array.isArray("ADITYA")) // show that is the there are actually are a array
// console.log(Array.from("ADITYA")) //make an array from the string

let score1 = 100

let score2 = 200

let score3 = 300

console.log(Array.of(score1,score2,score3)) // make an array of an    given values