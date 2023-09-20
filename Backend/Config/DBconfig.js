const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(`mongodb+srv://raphik2599:raphik2599@cluster0.tl3u6n7.mongodb.net/?retryWrites=true&w=majority`);
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;