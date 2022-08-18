/**
 * ECMAScript import modules
 */

// Named imports
import { add, minus, foo, helloWorld, sayHi} from './modules/util_es.js'
import { tester, randNumArr, IMPORTANT_KEY } from './modules/util_es.js'
import { validateUsername } from './modules/validationUtil_es.js'

// // Namespace import
// import * as util from './modules/util_es.js'
// // util.add(x,y), util.sayHi(), ...

// // Default import
// import validateUsername from './modules/validationUtil_es.js'

helloWorld()
sayHi("Tommy")
console.log(randNumArr[3])
console.log(IMPORTANT_KEY)
tester.sayHi()
// util.greet()
// util.sayHi(`Someone`)

validateUsername("po")
validateUsername("Zoooooo")
// validationUtil.validateUsername("tw")
// validationUtil.validateUsername("Testusername01")