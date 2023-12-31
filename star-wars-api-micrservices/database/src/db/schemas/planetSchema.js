const { Schema } = require('mongoose')

const planetSchema = new Schema({
  _id: String,
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  res_idents: [
    {
      type: String,
      ref: 'Character',
    },
  ],
  films: [
    {
      type: String,
      ref: 'Film',
    },
  ],
})

planetSchema.statics.list = async function () {
  return await this.find()
    .populate('res_idents', ['_id', 'name'])
    .populate('films', ['_id', 'title'])
}

planetSchema.statics.getById = async function (id) {
  return await this.findById(id)
}

module.exports = planetSchema
