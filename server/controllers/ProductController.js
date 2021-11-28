const Product = require('../models/Product');

class ProductController {
    async createProduct(req, res) {
        try {
            const data=req.body;
            const productInDB=await Product.findOne({name:data.name})
            if(productInDB){
                return res.status(404).json({success:false, message:"Tên sản phẩm này đã tồn tại"})
            }
            const newProduct=new Product(data);
            const createSuccess=await newProduct.save();
            if(createSuccess)
                return res.json({success:true, message:"Tạo sản phẩm thành công!",product:newProduct})
        } catch (error) {
            console.log(error)
            res.status(500)
                .json({success: false,message:"Lỗi server"})
        }
    }
    async getProduct(req,res) {
        try {
            const products = await Product.find({})
            res.json({success:true,products})
        } catch (error) {
            console.log(error)
            res.status(500)
                .json({success: false,message:"Lỗi server"})
        }
    }
    async updateProduct(req, res) {
        try {
            const data=req.body;
            const productInDB=await Product.findById({_id:req.params.id})
            if(!productInDB){
                return res.status(404).json({success:false, message:"Sản phẩm chưa có trong cửa hàng của bạn"})
            }
            let updateProduct=data;
            const updateProductCondition={_id:req.params.id}
            updateProduct= await Product.findOneAndUpdate(updateProductCondition,updateProduct,{new:true});
            if(!updateProduct){
                return res.status(401).json({success:false, message:'Cập nhật không thành công'})
            }
            return res.json({success:true, message:"Cập nhật sản phẩm thành công!",product:updateProduct})
        } catch (error) {
            console.log(error)
            res.status(500)
                .json({success: false,message:"Lỗi server"})
        }
    }
    async deleteProduct(req, res) {
        try {
            const deleteProductCondition={_id:req.params.id}
            const deleteProduct=await Product.findOneAndDelete(deleteProductCondition)
            if(!deleteProduct)
                return res.status(401).json({success:false, message:'Xóa không thành công'})
            return res.json({success:false, message:"Xóa thành công",product:deleteProduct})
        } catch (error) {
            console.log(error)
            res.status(500)
                .json({success: false,message:"Lỗi server"})
        }
    }
}
module.exports = new ProductController();