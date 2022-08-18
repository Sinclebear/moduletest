/**
 * CommonJS Style
 */
const Joi = require('joi')

const usernameSchema = Joi.object({
    username: Joi.string().min(3)
});

const validateUsername = async (username) => {
    try {
        const validateResult = await usernameSchema.validateAsync({ username : `${username}` });
        console.log(validateResult)
    } catch(err) { 
        console.log(err);
        console.log("stop")
    }
}

// module.exports = {
//     validateUsername: validateUsername
// }
module.exports.validateUsername = validateUsername