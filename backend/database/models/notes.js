const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
    notes: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const Notes = mongoose.model("Note", NotesSchema);

module.exports = Notes;