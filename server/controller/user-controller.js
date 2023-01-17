const { User } = require('../models/user-model')

module.exports = {

    addUserData: async (req, res) => {
        await new User(req.body).save();
        res.status(201).send({ messsage: "Created new user" });
    },
    getAllUsers: async (req, res) => {
        let allUsers = await User.find().sort({ createdAt: -1 });
        res.status(200).send(allUsers);
    },
    deleteUser: async (req, res) => {
        await User.deleteOne({ _id: req.params.userId })
        res.status(200).send({ message: "User deleted" })
    }

}
