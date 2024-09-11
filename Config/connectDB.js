const mongoose = require("mongoose");

//const connectDB = () => {
//  try {
//    const connect = mongoose.connect(process.env.MONGODB_URL);
//    //console.log(process.env.MONGODB_URI);
//    console.log("mongodb connected");
//  } catch (error) {
//    console.log("error", error);
//  }
//};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://kpshamna2020:SNuAdK8M1Y7OIhEZ@clusterts.ie5w6.mongodb.net/cyclo?retryWrites=true&w=majority&appName=ClusterTS", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};


module.exports = connectDB;

