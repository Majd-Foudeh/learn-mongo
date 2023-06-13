const user = require('../models/user')

const allusers = (req, res) => {
    user.find()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            console.log(err);
        })


}

module.exports = { allusers }