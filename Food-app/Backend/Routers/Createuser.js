const express = require('express');
const router = express.Router();
const user = require('../models/user');
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const jwtsec="my name is vamsi";
router.post('/create',
    body('name').isLength({ min: 5 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    async (req, res) => {
        const err = validationResult(req);

        if (!err.isEmpty())
            return res.status(400).json({ errors: err.array() });
        const salt=await bcrypt.genSalt(10);
        const secpass=await bcrypt.hash(req.body.password,salt);
        await user.create({
            name: req.body.name,
            email: req.body.email,
            password: secpass,
            location: req.body.location
        })
        res.status(200).json("User created");
    }
)

router.post('/login', async (req, res) => {
    let data = req.body.email;
    let foundUser = await user.findOne({ email: data });
    if (!foundUser)
        return res.status(400).json({ errors: "User not found" });
    
    let validate = false;
    
    // Check if password is hashed (starts with $2b$ for bcrypt)
    if (foundUser.password.startsWith('$2b$')) {
        // Password is hashed, use bcrypt compare
        validate = await bcrypt.compare(req.body.password, foundUser.password);
    } else {
        // Password is plain text (legacy user), do direct comparison
        validate = (req.body.password === foundUser.password);
        
        // Update to hashed password for future logins
        if (validate) {
            const salt = await bcrypt.genSalt(10);
            const secpass = await bcrypt.hash(req.body.password, salt);
            await user.findByIdAndUpdate(foundUser._id, { password: secpass });
        }
    }
    
    if(!validate)
        return res.status(400).json({ errors: "Invalid password" });
    
    const jwtdata={
        user:{
            userID:foundUser.id
        }
    }
    const token=jwt.sign(jwtdata,jwtsec);
    
    return res.json({success:true,authToken:token})
})



module.exports = router;
