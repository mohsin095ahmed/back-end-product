import multer from "multer";
import fs from"fs-extra"
//const multer = require('multer')
import  cloudinary from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dnzkdk24i', 
  api_key: '181185489239912', 
  api_secret: 'CF39j4IxXuvTgcHi80D4GlcN8h8' 
});


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({
  storage: storage
})

export default upload;


 export const addimage = ()=>{ return  new Promise ((reslove, reject )=>{
  fs.readdirSync("images").forEach(  (file) => {
            cloudinary.v2.uploader.upload(`images/${file}`, (error, result)=>{
                  //    console.log("res--->", result, error) 
                fs.remove(`images/${file}`,err =>{
                    if(err){
                      reject(err)
                     
                    }
                })
                //console.log("url", result)
                if(error){
                  reject(error)
                }else{
                 reslove(result.url)
                }
                
                
              })
          });
 }) 
}