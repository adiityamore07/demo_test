// const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log((`acc: ${acc} and currval ${currval}`))
//     return acc+currval
// },0)

// console.log(myTotal)


const shoopingCart =
[
    {
        itemName:'JS Course',
        price : 2999
    },

    {
        itemName:'PY Course',
        price : 4999
    },

    {
        itemName:'Java Course',
        price : 6999
    },

    {
        itemName:'Mobile Dev Course',
        price : 12999
    },

    {
        itemName:'DSA Course',
        price : 15999
    },

]

const myPayTotal = shoopingCart.reduce((acc,item)=> acc + item.price,0)

console.log(`Total Pay Bill :${myPayTotal}`)