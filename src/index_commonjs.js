/**
 * commonJS import modules
 */

// // Named import
// const { add, minus, foo, greet, sayHi } = require('./modules/util_commonjs');
// const { validateUsername }  = require('./modules/validationUtil_commonjs')

// Namespace import
const { tester, randNumArr, IMPORTANT_KEY } = require('./modules/util_commonjs');
const util = require('./modules/util_commonjs');
const validationUtil = require('./modules/validationUtil_commonjs')
// call functions by util.add / util.sayHi / ...

// greet()
// sayHi("Tommy")
// util.greet()
util.helloWorld()
util.sayHi(`Someone`)
console.log(util.IMPORTANT_KEY)
console.log(IMPORTANT_KEY)
tester.sayHi()
console.log(randNumArr[3])
// console.log(module.children)

const Koa = require('koa')
// console.log(JSON.stringify(module.children))
// validateUsername("po")
// validateUsername("Zoooooo")
validationUtil.validateUsername("tw")
validationUtil.validateUsername("Testusername01")