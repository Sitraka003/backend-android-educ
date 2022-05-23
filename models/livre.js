const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const livreSchema = new Schema({
    titre: { type: String, required: true },
    auteur: { type: String, required: false },
    niveau: { type: ObjectId, ref: "Niveau", required: true },

});

module.exports = livreSchema;
