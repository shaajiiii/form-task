const express = require("express")
const router = express.Router();
const userController = require('../controller/user-controller')

router.post('/add-user',userController.addUserData)
router.get('/get-all-users',userController.getAllUsers)
router.delete('/delete-user/:userId',userController.deleteUser)

module.exports = router;