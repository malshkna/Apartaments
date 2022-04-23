const uuid = require('uuid')
const path = require('path');
const { Apartament } = require('../models/models')
const ApiError = require('../error/ApiError')

class ApartamentController{
    async create(req, res, next){
        try{
            const {address, area, countRooms, floor, price, priceSquareMetr} = req.body
            const {image} = req.files
            let fileName = uuid.v4() + ".jpg"
            image.mv(path.resolve(__dirname, '..', 'static',fileName))

            const apartament = await Apartament.create({address, area, countRooms, floor, price, priceSquareMetr, image: fileName})
            
            return res.json(apartament)
        }
        catch(ex){
            next(ApiError.badRequest(ex.message))
        }
    }
    async getAll(req, res, next){
        try{
            const apartament = await Apartament.findAll()
            return res.json(apartament)
        }
        catch(ex){
            next(ApiError.badRequest(ex.message))
        }
    }
    async getOne(req, res, next){
        try{
            const {id} = req.params
            const apartament = await Apartament.findOne(
                {
                    where: {id}
                })
            return res.json(apartament)
        }
        catch(ex){
            next(ApiError.badRequest(ex.message))
        }
    }
}

module.exports = new ApartamentController()