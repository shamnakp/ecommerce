const mongoose = require("mongoose");

const connectDB = () => {
  try {
    const connect = mongoose.connect(process.env.MONGODB_URL);
    //console.log(process.env.MONGODB_URI);
    console.log("mongodb connected");
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = connectDB;

/*const dbConnect = async () => {
  try {
      await mongoose.connect("mongodb+srv://kpshamna2020:SNuAdK8M1Y7OIhEZ@clusterts.ie5w6.mongodb.net/?retryWrites=true&w=majority&appName=ClusterTS", {
          useNewUrlParser: true,
          //useUnifiedTopology: true,
          ssl: true,
          tlsAllowInvalidCertificates: true,
      });
      
      console.log('db connected');
  } catch (error) {
      console.log('mongo db connection error', error);
  }
};

module.exports = { dbConnect };*/
