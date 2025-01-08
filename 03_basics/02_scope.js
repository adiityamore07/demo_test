// var not usually use in js

let a = 300; // Outer 'a' is initialized to 300

if (true) {
    let a = 30; // This 'a' is block-scoped and does not affect the outer 'a'
    const b = 40; // 'b' is block-scoped and exists only within this block
    console.log("Inner:", a); // Logs 30 (block-scoped 'a')
}

console.log("Outer:", a); // Logs 300 (outer 'a' remains unchanged)

//in curly brackets there are block_scope
// and other is global socope