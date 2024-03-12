/*
what does this output and why
*/
var sample = function(){
    var a = b = 3;
}
sample();
console.log("Is a defined?", typeof a !== "undefined");
console.log("Is b defined?", typeof b !== "undefined");