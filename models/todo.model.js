const { model, Schema } = require('mongoose')

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
})

module.exports = model('todo', postSchema)
