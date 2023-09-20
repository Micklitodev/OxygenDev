import mongoose from "mongoose";

mongoose.set("strictQuery", false);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/graphqlnext" 
);

export default mongoose.connection;
