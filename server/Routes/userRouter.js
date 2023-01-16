const express = require("express")
const router = express.Router();
const userController = require('../controller/user-controller')

router.post('/add-user',userController.addUserData)


module.exports = router;