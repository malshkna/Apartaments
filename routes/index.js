const Router = require('express')
const router = new Router()
const apartamentRouter = require('./apartamentsRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/apartament', apartamentRouter)

module.exports = router