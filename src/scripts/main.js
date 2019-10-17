// Practice: Take a Number - Battle of the Bands
// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

// you can make this global variable equal to either 1 or zero, both are correct. It just depends what you want your first # to be. if you start at zero, your first number will be "1".  You could also set it to any # and increment or decrement (-- to count backwards) from anywhere. if we set bandNumber to "5" and decremented our first # on our list would be 4 and count backwards//

let bandNumber = 0;

const takeNumber = function(bandName) {
    ++bandNumber;
    return `${bandNumber}.${bandName}`;
    
} 

// the ++ on bandNumber is an incrementer
    
const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

console.log(takeNumber("whatever"))

// Here is an example of syntax for writing a function that will increment a global variable by one each time it is invoked, and return that incremented number// **we created the global variable let bandNumber outside the function in this case

// var i = 0; (i.e. let bandNumber = 0;)

// function increment(n){

//   n++;
//   return n;
// }

// i=increment(i);

// bandNumber = takeNumber(0) **** what would this do if I did this?