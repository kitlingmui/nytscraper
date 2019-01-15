const { Schema, model } = require('mongoose')

const stackSchema = new Schema({
    title: String,
    summary: String,
    url: String, 
    isSaved: Boolean
})

const Stack = model('Stack', stackSchema)

module.exports = Stack