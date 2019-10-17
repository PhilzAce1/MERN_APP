require('dotenv').config()
const router = require('express').Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 @route GET api/users
 @desc  Register new users
 @access Public
 */
router.post('/', (req, res)=>{
    const { name, email, password } = req.body;

    //simple validation---that will be changed Later
    if (!name || !email || !password){
        return res.status(400).json({msg: "Please enter all Field"});
    }
    //checking if email aleady exist
    User.findOne({ email }).then(user => {
        if(user) return res.status(400).json({ msg : 'User already exists '});
        const newUser = new User ({
            name, 
            email, 
            password
        })

        //Create Salt and Hash 
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err , hash)=>{
                if (err) throw err;
                newUser.password = hash;
                newUser.save().then(user => {
                    res.json({
                        user: {
                            id: user.id,
                            name: user.name, 
                            email: user.email
                        }
                    })
                })
            })
        })
    })

}) 
 
module.exports = router;