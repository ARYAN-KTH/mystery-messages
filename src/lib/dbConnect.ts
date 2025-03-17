import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?:number
}

const connection : ConnectionObject ={}

export async function dbConnect() : Promise<void>  {
    if(connection.isConnected){
        console.log("database already connected")
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URL || "",{})
        connection.isConnected = db.connections[0].readyState
        console.log("db connceted successfully")
    } catch (error) {
        console.log("db connection failed",error)
        process.exit(1)
    }
}
