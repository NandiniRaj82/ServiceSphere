const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
    UserName:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
})

const ServiceProviderSchema = new mongoose.Schema({
    UserName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    AdhaarNumber:{
        type:Number,
        required:true,
    },
    Address:{
        type:String,
        required:true,
    },
    ServiceType:{
        type:String,
        required:true,
       
    },

})

const ProductUserSchema = new mongoose.Schema({
    UserName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    GSTIN_Number:{
        type:String,
        required:true,
    },
    ServiceType:{
        type:String,
        required:true,
       
    },
})

async function saveUser(user) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashpass = await bcrypt.hash(user.password, salt);
      user.password = hashpass;
    } catch (error) {
      throw error;
    }   
}
  
UserSchema.pre('save', async function(next) {
    await saveUser(this);
    next();
});

ServiceProviderSchema.pre('save', async function(next) {
    await saveUser(this);
    next(); 
});

ProductUserSchema.pre('save', async function(next) {
    await saveUser(this);
    next();
});

UserSchema.methods.comparePassword = async function(userPassword) {
    try {
        const isMatch = await bcrypt.compare(userPassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
};

ServiceProviderSchema.methods.comparePassword = async function(userPassword) {
    try {
        const isMatch = await bcrypt.compare(userPassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
};

ProductUserSchema.methods.comparePassword = async function(userPassword) {
    try {
        const isMatch = await bcrypt.compare(userPassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
};

const UserModel = mongoose.model("User", UserSchema);
const ServiceProviderModel = mongoose.model("serviceProvider", ServiceProviderSchema);
const ProductUserModel = mongoose.model("ProductUser", ProductUserSchema);

module.exports = {
    UserModel,
    ServiceProviderModel,
    ProductUserModel
};