const express = require('express')
const storesController = require('../controllers/storesController')

const router = express.Router()

router.route('/')
    .get(storesController.getAllStores)
    .post(storesController.createNewStore)
    .put(storesController.updateStore)
    .delete(storesController.deleteStore)

router.route('/:id').get(storesController.getStore)

module.exports = router
