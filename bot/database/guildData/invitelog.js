const mongoose = require("mongoose")

const prefixSchema = new mongoose.Schema({
Invitelog: String,
GuildID: String,
});

const prefixModel = module.exports = mongoose.model("invitelog", prefixSchema)
