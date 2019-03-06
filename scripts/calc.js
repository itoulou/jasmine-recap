// create a "Calculator" object and have everything added as prototypes of that object
// we would do this incase the code needs tp be completely changed and tests dont work anymore
Calculator = function() {
    this.value = 0;
}

// add = name of protoype function
Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    } else {
        alert("error!")
    }
}


// function addition(numOne, numTwo) {
//     if(typeof(numOne) == "number" && typeof(numTwo) == "number") {
//         return numOne + numTwo;
//     } else {
//         // instead of return "error!"
//         // now it's
//         alert("error!"); 
//     }
    
// }