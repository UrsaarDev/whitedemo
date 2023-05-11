const mongoose = require("mongoose");

mongoose
    .connect('mongodb+srv://JunielLiu:donotaccept@cluster0.vgnpa.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const connection = mongoose.connection;
let collections = [];

connection.on("open", function (ref) {
  console.log("Connected to mongo server.");
  connection.db.listCollections().toArray(function (err, names) {
    collections = names;
  });
  //console.log(collections);
});

module.exports = {
  connection,
  collections,
};
