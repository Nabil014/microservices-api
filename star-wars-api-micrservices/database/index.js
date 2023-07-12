const server = require('./src/server')

server.listen(process.env.PORT || 8004, () => {
  console.log('Database service on port 8004')
})
