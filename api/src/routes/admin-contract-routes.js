module.exports = (app) => {
  const router = require('express').Router()
  const controller = require('../controllers/admin/contract-controller')

  router.post('/', controller.create)
  router.get('/', controller.findAll)

  app.use('/api/admin/contracts', router) // llamada fetch
}
