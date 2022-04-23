const ApiError = require('../error/ApiError');
const { User } = require('../models/models')

class UserController{
    async registration(req, res, next){
        try{
            const {email, password} = req.body

            const user = await User.create({email, password})
            
            return res.json(user)
        }
        catch(ex){
            next(ApiError.badRequest(ex.message))
        }

    }
    async login(req, res, next){
        try{
            const {email, password} = req.body

            const user = await User.findOne({where: {email, password}})
            if(!user){
                return next(ApiError.badRequest('Пользователь не найден!'))
            }

            return res.json(user)
        }
        catch(ex){
            next(ApiError.badRequest(ex.message))
        }
    }
    
    async check(req, res, next){
        const {id} = req.query
        if(!id){
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id)
    }
}

module.exports = new UserController()