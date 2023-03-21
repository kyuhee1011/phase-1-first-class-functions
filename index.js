const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

function receivesAFunction(callback) {

    return callback();
}

function returnsANamedFunction() {
    return function returnsANamedFunction (name) {
        console.log (name);
    }

}

function returnsAnAnonymousFunction() {
    return function (name) {
        console.log (name);
    }
    
}