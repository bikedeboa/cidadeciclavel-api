let express = require('express')
let router = express.Router()
let acl = require('express-acl')
let models = require('../models')
let LocalController = require('../controllers/LocalController')(models.Local)
let AuthController = require('../controllers/AuthController')(models.User)

router.get('/', AuthController.middlewareAuth, acl.authorize, LocalController.getAll.bind(LocalController))
router.get('/light', LocalController.getAllLight.bind(LocalController))
router.get('/reviews/:_city/orderby/:_field/:_order', LocalController.getReviewedOrdered.bind(LocalController))
router.get('/:_id', LocalController.getById.bind(LocalController))
router.post('/', AuthController.middlewareAuth, acl.authorize, AuthController.middlewareLogging, LocalController.create.bind(LocalController))
router.put('/:_id', AuthController.middlewareAuth, acl.authorize, AuthController.middlewareLogging, LocalController.update.bind(LocalController))
router.put('/merge/:_id/:_id_merge', AuthController.middlewareAuth, acl.authorize, AuthController.middlewareLogging, LocalController.merge.bind(LocalController))
router.delete('/:_id', AuthController.middlewareAuth, acl.authorize, AuthController.middlewareLogging, LocalController.remove.bind(LocalController))
router.post('/import/:_id', LocalController.import.bind(LocalController))

module.exports = router
