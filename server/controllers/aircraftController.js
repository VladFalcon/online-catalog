const {Aircraft} = require('../models/models')
const ApiError = require('../error/ApiError');

class AircraftController {
    async create(req, res) {
        const {name} = req.body
        const aircraft = await Aircraft.create({name})
        return res.json(aircraft)
    }

    async getAll(req, res) {
        const aircrafts = await Aircraft.findAll()
        return res.json(aircrafts)
    }

}

module.exports = new AircraftController()
