exports.findAll = (req, res) => {
  const routes = {
    '/': 'home.html',
    '/data': 'data.html'
  }

  res.status(200).send(routes)
}
