const mongoose = require("mongoose");
const demandeSchema = new mongoose.Schema({
    name: String,
    numTel: Number,
    quantité: Number,
    dateEvent: String,
    adresse: String,
    createDate: { type: Date, default: Date.now() },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    //  product: { type: mongoose.Schema.Types.ObjectId, ref: "product" }
});
module.exports = demande = mongoose.model("demande", demandeSchema);