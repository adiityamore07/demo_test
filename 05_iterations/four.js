 const myObj = 
 {
    js: 'JavaScript',
    cpp:'C++',
    rb:"Ruby",
    swift:"swift by apple"

 }

 for (const key in myObj)
 {
    console.log(`const${key} for iteration ${myObj[key]}`)
 }