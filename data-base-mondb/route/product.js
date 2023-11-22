import  express  from "express";
import {Changecategory,changeTitle, Changeimage, Changeprice, create, deleteproduct, getAll } from "../contoralar/product.js";
const route = express.Router();


route.get("/", async(req, res)=>{
    const product = await getAll();
    
    if(product){
        return res.status(200).json(product)
    }
    return res.send("not found");
});


route.post("/",async(req,res)=>{
   // console.log(req.body);
   try{
    const { category, price, image, title } = req.body;
    const add = await   create({ category, price, image,title});
    return res.status(201).send({status:"201", message: " product add"})
 

   }catch(err){
    console.log(err)
   }
    });

route.delete("/", async(req, res)=>{
    const {productid }= req.body;
  try{
      const reponese = await deleteproduct(productid)
      res.status(201).send({status:"201", reponese}) 
}catch(err){
    console.log(err)
}
    
})
route.put("/", async(req,res)=>{
    //console.log(req.body)
   const {productid, category, image, price, title} = req.body;
    try{
        if(category){
            const result = await Changecategory({productid, category});
            console.log(result);
            return res.status(201).send({status:"201", message: "catogery change"})
        }else if(price){
          const result = await  Changeprice({productid, price});
          console.log(result);
            return res.status(201).send({status:"201", message: "price change"})
        }else if( image){
            console.log(image)
           const result = await Changeimage({productid, image});
           console.log(result);
            return res.status(201).send({status:"201", message: "image change"})
        }else if(title){
             const result = await changeTitle({productid, title});
             console.log(result);
            return res.status(201).send({status:"201", message: "title change"})
        }
    }catch(err){
        console.log(err)
    }
})
export default route; 