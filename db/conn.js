const mongoose = require("mongoose");
const Db = process.env.ATLAS_URI;

// var _db;

module.exports = {
  connectToServer: function () {
    mongoose.connect(Db, function (err) {
      if (err) throw err;
      _db = mongoose.connection.db; // <-- This is your MongoDB driver instance.
      console.log("Successfully connected to MongoDB Atlas.");
    });
  },

  // getDb: function () {
  //   return _db;
  // },
};
