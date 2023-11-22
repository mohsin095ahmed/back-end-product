//import { response } from "express";
import Product from "../model/product.js";
//import { product } from "../db/product.js";

export const getAll = async()=>{
    try{
        const allproduct = await Product.find();
        console.log(   "hshhs",await allproduct)
        return allproduct;
    }catch(err){

    }
}

export const create = async({ category, price, image, title})=>{
   try{
    const add = await  new Product({category,price,image,title});
    await add.save()
     console.log (add)  
   }catch (err){
    return err
   }   
};

export const findProduct =({id})=>{
  const data = getAll();

}
export const deleteproduct = async(productid)=>{
    try{
       const reponese = await Product.deleteOne({_id:productid});
       console.log(reponese);
       return reponese;
    }catch(err){
      console.log(err)
    }

}
export const Changecategory = async({productid, category})=>{
  const data = category;
  try{
     const result = await Product.updateOne({_id:productid},{category:data})
     return result
  }catch(err){
    console.log(err)
  }
  
}



export const Changeprice = async({productid, price})=>{
  console.log("req--->", productid, price)
  const data = price;
  try{
    const item = await Product.findOne({_id:productid});
     const result = await Product.updateOne({_id:productid},{price:data});
     console.log(item)
     return result
  }catch(err){
    console.log(err)
  }
}


export const Changeimage = async({productid, image})=>{
  const data = image;
  try{
       const result = await Product.updateOne({_id: productid}, {image:data});
       return result
  }catch(err){
    console.log(err)
  }
}
export const changeTitle = async({productid, title})=>{
  const data = title;
  try{
     const result = await Product.updateOne({_id:productid},{title:data});
     return result;
  }catch(err){

  }
}

export const allproduct = async( )=>{
  const all =  await Product.find({});
  console.log(all)
}