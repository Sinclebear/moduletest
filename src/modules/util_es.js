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

export {
    greet as helloWorld,
    add,
    minus,
    foo,
    sayHi,
    IMPORTANT_KEY,
    randNumArr,
    person as tester,
}