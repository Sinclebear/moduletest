const moment = require('moment')
require('moment-timezone')

const currentTime = moment()
console.log(`Current Time : ${currentTime}`)

// moment.tz.setDefault( %REGION% ) ... adds _offset ?

// moment.tz.setDefault("Asia/Seoul") // _offset = 540 UTC +09:00
moment.tz.setDefault("America/Los_Angeles") // _offset = -240 UTC -04:00

const modifiedTime = moment()
console.log(`Modified Time : ${modifiedTime}`)