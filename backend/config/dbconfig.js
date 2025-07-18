import mongoose from "mongoose";
import 'dotenv/config'

let MONGOURI = process.env.MONGODB_URI;

export default async function ConnectDB() {

    try{
         await mongoose.connect(MONGOURI);
         console.log('Connected to mongodb.......')
    }
    catch(err){
         console.log("Err connecting to MongoDB")
    }
}
