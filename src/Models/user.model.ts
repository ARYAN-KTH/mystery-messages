import mongoose ,{Schema,Document} from "mongoose";

export interface Message extends Document{
    content:string,
    createdAt:Date
}

export const MessageSchema = new Schema<Message> ({
    content:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})


export interface User extends Document{
    username:string,
    email:string,
    password:string,
    verificationCode:string,
    isAcceptingMessages:boolean,
    message:Message
}

export const UserSchema = new Schema<User> ({
    username:{
        type:String,
        required:[true,"username is required"],
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
        trim:true,
        unique:true
    },
    verificationCode:{
        type:String,
    },
    isAcceptingMessages:{
        type:Boolean,
        default:false
    },
    message:[MessageSchema]
})

const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User", UserSchema)

export default UserModel


