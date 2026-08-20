// immediatelly invoked function expression

(function chai() {
    console.log("connection one")
})();  //  ; it is used two terminate the current function or execution

((name) => (console.log(`${name}, connection two`)))('hitesh')

// iife is used to prevent problem cause by global scope pollution