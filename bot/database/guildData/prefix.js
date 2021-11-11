const mongoose = require("mongoose")

const invitelogSchema = new mongoose.Schema({
Prefix: String,
GuildID: String,
});

const prefixModel = module.exports = mongoose.model("prefix", invitelogSchema)
