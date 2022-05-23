const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const qcmSchema = new Schema({
    idLecon: { type: ObjectId, ref: "Lecon", required: true },

});

module.exports = qcmSchema;
