
import { product } from "../db/product.js";

export const getAll =()=>{
   // console.log("service ---->", product)
    return product;
}

export const create = ({ category, price, image})=>{
      product.push({id:Date.now(),
  price,image,category})
};

export const findProduct =({id})=>{
  const data = getAll();

}
export const deleteproduct = (id)=>{
    const data = getAll();
    console.log(id)
    console.log(typeof(id) )
    const index = data.findIndex(d => d.id === Number(id));
    console.log("index--->",index)
    data.splice(index, 1);

}
export const Changecategory = (productid, category)=>{
  const data = getAll();
  const text = category;
  const index = data.findIndex(d => d.id === Number(productid));
  data[index].category = text;
  
}



export const Changeprice = (productid, price)=>{
  console.log("id--->", productid)
  const data = getAll();
  const text = price;
  const index = data.findIndex(d => d.id === Number(productid));
  console.log(index)
 // console.log(data[index].price)
   data[index].price = text
  
}


export const Changeimage = (productid, image)=>{
  const data = getAll();
  const img = image;
  const index = data.findIndex(d => d.id === Number(productid));
   data[index].image = img;
  
}