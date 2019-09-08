const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const CollegeSchema = new Schema({
    collegeName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    costPublic: {
        type: String,
        required: false
    },
    costPrivate: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
        // `note` is an object that stores a Note id
    // The ref property links the ObjectId to the Note model
    // This allows us to populate the Article with an associated Note
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }

})

const College = mongoose.model("College", CollegeSchema);

module.exports = College;