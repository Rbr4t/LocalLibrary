const mongoose = require("mongoose");

const GenreSchema = mongoose.Schema({
    name: { type: String, required: true, max: 100, min: 3 },
});

GenreSchema.virtual("url").get(function () {
    return `/catalog/genre/${this._id}`;
})

module.exports = mongoose.model("Genre", GenreSchema);
