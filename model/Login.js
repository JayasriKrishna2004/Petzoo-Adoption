
//SignUp.js

import mongoose,{Schema} from "mongoose";
const Loginschema = new Schema({
    
    
    email: String,
    password: String,
    
});

export const Logindata = mongoose.model("Login",Loginschema);

