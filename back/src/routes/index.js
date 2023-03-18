const {Router } = require('express')


const { getCharById} = require('../controllers/getCharById.js')
const {getCharDetail} = require('../controllers/getCharDetail.js')
const {addFav, getFav, deleteFav} = require('../controllers/favControllers.js')


const router = Router()

router.get('/onsearch/:id', getCharById)
router.get('/detail/:id', getCharDetail)

router.post('/fav', addFav)
router.get('/fav',getFav)
router.delete('/fav/:id', deleteFav)

module.exports = router
