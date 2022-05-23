const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const niveauSchema = new Schema({
    minAge: { type: Number, required: true },
});

module.exports = niveauSchema;
