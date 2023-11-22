import mongoose,{Schema} from "mongoose";


const ProductSchema = mongoose.Schema({
    title:{
        type:Schema.Types.String,
        required:true,
    },
    price:{
        type : Schema.Types.Number,
        required : true
    },
    image :{
        type:Schema.Types.String,
        required:true
    },
    category:{
        type: Schema.Types.String,
        required: true
    }

})

const Product = mongoose.model("Product", ProductSchema);
export default Product;