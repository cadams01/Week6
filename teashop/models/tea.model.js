const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')


const TeaSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    kind: {
      type: String,
      required: true
    },
    unit: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
});

TeaSchema.plugin(mongoosePaginate)
const Tea = mongoose.model('Tea', TeaSchema)

module.exports = Tea;