const mongoose = require("mongoose");




function connectDB() {
  mongoose
    .connect("mongodb://foodyfy:aman9893@ac-afbvrpa-shard-00-00.yslvgmf.mongodb.net:27017,ac-afbvrpa-shard-00-01.yslvgmf.mongodb.net:27017,ac-afbvrpa-shard-00-02.yslvgmf.mongodb.net:27017/?ssl=true&replicaSet=atlas-15fatf-shard-0&authSource=admin&appName=FoodyFy")
    .then(() => {
      console.log("Mongodb connected successfully....");
    })
    .catch((err) => {
      console.log("Mongodb connection error", err);
    })
}

module.exports = connectDB;
