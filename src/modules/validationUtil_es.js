/**
 * ESM Style
 */

import Joi from "joi"
// import * as Joi from 'joi' // 이 경우 Joi.default 로 접근해야 되어서, 위와 같이 곧바로 불러와야함.

const usernameSchema = Joi.object({
    username: Joi.string().min(3)
});

// // export single function -> 함수 표현식 작성과 동시에 export
// export const validateUsername = async (username) => {
//     try {
//         const validateResult = await usernameSchema.validateAsync({ username : `${username}` });
//         // const validateResult = await usernameSchema.validateAsync({ username });
//         console.log(validateResult)
//     } catch(err) { 
//         console.log(err);
//     }
// }


// // export %DEFAULT% function
// const validateUsername = async (username) => {
//     try {
//         const validateResult = await usernameSchema.validateAsync({ username : `${username}` });
//         console.log(validateResult)
//     } catch(err) { 
//         console.log(err);
//     }
// }
// export default validateUsername



// export %functions% as %alias% 

const validateUsername = async (username) => {
    try {
        const validateResult = await usernameSchema.validateAsync({ username : `${username}` });
        console.log(validateResult)
    } catch(err) { 
        console.log(err);
        console.log("stop")
    }
}

export {
    validateUsername as validateUsername,
}

// // 별도로 alias 정하지 않을 경우 아래 코드는 위와 동일.
// export {
//     validateUsername,
// } 
