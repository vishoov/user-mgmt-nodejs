const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  
    name: {
        type:String,
        required:[true, "Don't forget to add your name!"],
        minLength: [6, "Name should be atleast 6 characters long!"]
  
      },
      email: {
          type:String,
          required:[true, "Don't forget to add your email!"],
          validate:{
            validator:function(emaill){
                return emaill.includes('@') // use regex to identify emails 
            }
          },
          unique:[true, "Email already exists!"]
      },
     
      age: {
        type:Number,
        required:[true, "Don't forget to add your age!"],
        min: [18, "You should be atleast 18 years old!"]
      },
      roles:{
          type:[String],
          required:true,
          enum:["admin","user"]
  
      },
     
},
{
  timestamps:true,
}
)


const User= mongoose.model('User', userSchema);

module.exports= User;