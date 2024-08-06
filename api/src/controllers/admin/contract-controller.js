const sequelizeDb = require('../../models')
const Contract = sequelizeDb.Contract

exports.create = (req, res) => {
  Contract.bulkCreate(req.body).then(async data => {
    res.status(200).send(data)
  }).catch(err => {
    console.log(err)
    if (err.errors) {
      res.status(422).send({
        message: err.errors
      })
    } else {
      res.status(500).send({
        message: 'Algún error ha surgido al insertar el dato.'
      })
    }
  })
}

exports.findAll = (req, res) => {
  const page = req.query.page || 1
  Contract.findAll({
  })
    .then(result => {
      result.meta = {
        total: result.count,
        currentPage: page
      }
      res.status(200).send(result)
    }).catch(err => {
      res.status(500).send({
        message: err.errors || 'Algún error ha surgido al recuperar los datos.'
      })
    })
}
