"use strict";
let bal = 100;
let pin = 123;
let amount = 120;
if (pin === 123) {
    console.log("Welcome");
    if (bal < amount) {
        console.log("Insufficient balance");
    }
    else {
        console.log("Withdrawn sucessfully");
    }
}
else {
    console.log("Wrong pin");
}
