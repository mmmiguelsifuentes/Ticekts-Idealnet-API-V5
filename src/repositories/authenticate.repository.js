const queryGen = require('../utils/queryGenerator')

const authenticate = async ({userName}) => {
    try {
        const query = `select public.login_fn(:userName);`
        const result = await queryGen(
            query,
            {
                userName
            }
        )
    } catch (error) {
        throw error;
    }
}

module.exports = {
    authenticate
}