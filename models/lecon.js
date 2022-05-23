const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const leconSchema = new Schema({
    titre: { type: String, required: true },
    typeLecon: { type: ObjectId, ref: "TypeLecon", required: true },

});

module.exports = leconSchema;
