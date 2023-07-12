const axios = require('axios')
const films = require('./films.json')

module.exports = {
  list: async () => {
    const data = await axios.get('http://database:8004/Film')
    return data.data
  },
}
