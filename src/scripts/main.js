// Practice: Take a Number - Battle of the Bands
// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

// you can make this global variable equal to either 1 or zero, both are correct. It just depends what you want your first # to be. if you start at zero, your first number will be "1".  You could also set it to any # and increment or decrement (-- to count backwards) from anywhere. if we set bandNumber to "5" and decremented our first # on our list would be 4 and count backwards//

let bandNumber = 0;

const takeNumber = function(bandName) {
    ++bandNumber;
    return `${bandNumber}.${bandName}`;
}
 // once a return statement has ran, the function stops, it won't execute anything else. therefore you should not put anything you want to run after a return statement//    
// the ++ on bandNumber is an incrementer
    
const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

console.log(takeNumber("whatever"))

/////////////////////////////////////////////////////////////////////////////

// how to start your counter with "1"

// in order to start with your "counter" variable at 1 (in this case, let bandName), you must assign the output of the function to a variable first. The output of this function is `${bandNumber}. ${bandName}`. The reason is that you can't start executing the incrementing

let bandNumber = 1;

const takeNumber = function(bandName) {
    //Capture the band list item in a variable before it becomes the number 2. if we switched the order and put the incrementer first, the list will start at # 2 and skip 1 altogether//
    const bandListItem =`${bandNumber}. ${bandName}`;
    bandNumber++;
   return bandListItem;
} 

const scum = takeNumber("Galactic Scum")
console.log(scum)  
const under = takeNumber("Underdogs")
console.log(under)  
console.log(takeNumber("whatever"))


////////////////////////////////////////////////////////////////////////////////



let petCounter = 0;

const petList = (petName) => {
    petCounter++;
    return `${petCounter}. ${petName}`
}

debugger;
console.log(petList("JACK"))
console.log(petList("ENKI"))
console.log(petList("PIERRE"))


// Call function and assign to variable. Then print to console()

const petList = (petName) => {
    let petCounter = 0;
    petCounter++;
    return `${petCounter}. ${petName}`

}
console.log(petList("JACK"))
console.log(petList("ENKI"))
console.log(petList("PIERRE"))
