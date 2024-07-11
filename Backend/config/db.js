import mongoose from "mongoose";

export const connectDB = async () =>{
    (await mongoose.connect('mongodb+srv://chayugadharshini:<password>@yuga.pom4bwg.mongodb.net/e-learnig')).then(()=>console.log("DB Connected"));
}