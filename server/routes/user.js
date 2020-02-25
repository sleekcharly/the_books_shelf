// import required packages for routing
const express = require('express')
const router = express.Router();

// models
const { User } = require('../models/user');

// application user routes
router.post('/register',(req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
        if(err) return res.json({success: false});
        res.status(200).json({
            success: true,
            user: doc
        })
    })
})

// export the router
module.exports = router;