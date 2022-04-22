const uuid = require('uuid')
const path = require('path');
const { Apartament } = require('../models/models')
const ApiError = require('../error/ApiError')

class ApartamentController{
    async create(req, res, next){
        try{
            const {address, area, countRooms, floor, price, priceSquareMetr, info } = req.body
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
    async getAll(req, res){

    }
    async getOne(req, res){

    }
}

module.exports = new ApartamentController()