import  express  from "express";
import {Changecategory, Changeimage, Changeprice, create, deleteproduct, getAll } from "../contoralar/product.js";
const route = express.Router();


route.get("/", (req, res)=>{
    const product = getAll();
    //console.log(product)
    if(product){
        return res.status(200).json(product)
    }
    return res.send("not found");
});


route.post("/",(req,res)=>{
   // console.log(req.body);
    const { category, price, image } = req.body;
    create({ category, price, image});
    res.send("dhhd")
    
});

route.delete("/", (req, res)=>{
    //console.log(req.body.id);
  const {id} = req.body;
    deleteproduct(id)
    res.send("oks")
})
route.put("/", (req,res)=>{
    console.log(req.body)
   const {productid, category, image, price} = req.body;
    if(category){
        Changecategory(productid, category);
        console.log("yes")
        res.send("okay")
    }else if(price){
        Changeprice(productid, price);
        res.send("okay")
    }else if( image){
        console.log(image)
      Changeimage(productid, image);
      res.send("okay")
    }
})
export default route; 