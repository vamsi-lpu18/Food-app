const express=require('express');
const router=express.Router();

router.post('/DisplayData',(req,res)=>{
    try{
        // Check if data is loaded
        if (!global.food_items || !global.food_Category) {
            return res.status(500).json({ error: "Data not loaded yet" });
        }
        res.send([global.food_items,global.food_Category])
    }catch(error){
        console.log(error);
        res.status(500).send("Server Error");
    }
})
module.exports=router;