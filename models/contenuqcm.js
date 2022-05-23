const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const qcmSchema = new Schema({
    idQCM: { type: ObjectId, ref: "QCM", required: true },
    question: { type: String, required: true },
    reponse1: { type: String, required: true },
    reponse2: { type: String, required: true },
    reponse3: { type: String, required: true },
});

module.exports = qcmSchema;
