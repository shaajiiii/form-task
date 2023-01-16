const {User} = require('../models/user-model')

module.exports = {


    addUserData: async (req,res)=>{
        console.log(' data reached from the form... - M');
        console.log(req.body);
        await new User(req.body).save();
        console.log('saved to db');
        res.status(201).send({messsage:"Created new user"});

    },
    getAllUsers: async (req,res)=>{
        
        let allUsers = await User.find();
        res.status(200).send(allUsers);

    },
    deleteUser: async (req,res)=>{

        await User.deleteOne({_id:req.params.userId})  
        res.status(200).send({message:"User deleted"})
  
    }
 
}
