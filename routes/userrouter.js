const express = require('express')
const router = express.Router()
const usercontroller = require('../controllers/usercontroller')


router.get('/users', usercontroller.allusers)
// router.post('/newusers', usercontroller.newuser)
// router.getone('/oneuser', usercontroller.oneuser)
// router.put('/updateusers', usercontroller.updateusers)
// router.delete('/deleteusers', usercontroller.deleteusers)


module.exports = router