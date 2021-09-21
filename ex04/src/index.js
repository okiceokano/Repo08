// Only change code below this line
function localScope(){
    var myVariable = "I am here!";
    console.log(myVariable);
}
localScope();
// Only change code above this line

// myVariable is not defined otuside of localScope
if (typeof myVariable != "undefined") {
    console.log('otuside localScope', myVariable)
} else {
    console.log('outside localScope UNDEFINED!!!')
}

module.exports = localScope