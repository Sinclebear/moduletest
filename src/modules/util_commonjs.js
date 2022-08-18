var greet = function () { console.log('Hello World') }

const add = (a,b) => { return a+b }

const minus = (a,b) => {
    let minusResult = a-b;
    if (minusResult < 0) {
        minusResult = Math.abs(minusResult)
    }
    return minusResult;
}

const foo = () => { console.log("boo") }

const sayHi = (user) => { console.log(`hi, ${user}`) }

const IMPORTANT_KEY = "somthingimportantkeycode"

let randNumArr = [1,3,5,7,10];

class Person {
    constructor(name){
        this._name = name
    }
    sayHi(){
        console.log(`Hello, ${this._name}`)
    }
}

const person = new Person("Travis")


// // export single function
// module.exports = greet; 

// // export single function, but rename
// module.exports.helloworld = greet;



module.exports = {
    helloWorld : greet,
    add : add,
    minus : minus,
    foo : foo,
    sayHi : sayHi,
    tester : person,
    IMPORTANT_KEY : IMPORTANT_KEY,
    randNumArr : randNumArr
}