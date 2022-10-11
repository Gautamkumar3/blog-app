const mongoose = require("mongoose")
const Connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/blogs")
}

module.exports = Connect;