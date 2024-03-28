import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection Failed", error);
    process.exit(1);
  }
};

export default connectDB;

//(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", () => {
//       console.log("ERROR:Express not able to connect to db", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`Listening on PORT ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Error", error);
//     throw err;
//   }
// })();
