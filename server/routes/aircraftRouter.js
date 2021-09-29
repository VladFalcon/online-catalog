const Router = require('express')
const router = new Router()
const aircraftController = require('../controllers/aircraftController')

router.post('/', aircraftController.create)
router.get('/', aircraftController.getAll)

module.exports = router
