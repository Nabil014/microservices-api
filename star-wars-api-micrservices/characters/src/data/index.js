const axios = require('axios')
const characters = require('./characters.json')

module.exports = {
  list: async () => {
    const data = await axios.get('http://database:8004/Character')
    return data.data
  },
}
