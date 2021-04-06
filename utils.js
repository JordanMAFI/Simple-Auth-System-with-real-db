const {User} = require('./my_models.js')
function matchCredentials(requestBody) { 
    const _user =  User.findAll({
        where: {
            username: requestBody.username,
            password: requestBody.password
        }
    })                                        
    if (requestBody.username === _user.username                   
        && requestBody.password === _user.password) {
            return true 
        } else { 
            return false 
        } 
    }

    module.exports = matchCredentials