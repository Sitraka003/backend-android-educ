const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const typeLecon = new Schema({
    libelle: { type: String, required: true },
});

module.exports = typeLecon;
