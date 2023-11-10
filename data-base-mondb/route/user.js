import express from "express";

const router  = express.Router();

router.post("/" ,(req, res)=>{
    //const { name} = req.body;
    console.log("body---->", req.body);
    res.send("by");

})

export default router;