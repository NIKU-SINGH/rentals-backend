import mongoose from "mongoose";


const { Schema } = mongoose;

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique:true,
        sparse:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin: {
        type: Boolean,
        defaut: false,
        required:true,
    },
},
    { timestamps: true }
);

export default mongoose.model('User',UserSchema);