const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const aircraftRouter = require('./aircraftRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/aircraft', aircraftRouter)
router.use('/device', deviceRouter)

module.exports = router