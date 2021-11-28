const express= require('express');
const router=express.Router();
const ProductController = require('../controllers/ProductController');
// Nhận sản phẩm
router.get('',ProductController.getProduct)
// Tạo sản phẩm
router.post('',ProductController.createProduct)
// Sửa sản phẩm 
router.put('/:id',ProductController.updateProduct)
// Xóa sản phẩm
router.delete('/:id',ProductController.deleteProduct)
module.exports=router;