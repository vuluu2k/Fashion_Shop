const Account = require('../models/Account')



class AccountController{
    async registerAccount(req, res) {
        try {
            const data=req.body;
            const AccountInModel=await Account.findOne({username:data.username})
            if(AccountInModel)
                return res.status(401).json({success:false,message:"Tài khoản này đã tồn tại"})
            const newAccount = new Account(data)
            const createSuccess = newAccount.save();
            if(!createSuccess)
                return res.status(401).json({success:false,message:"Đăng kí tài khoản không thành công"})
            return res.json({success:true,message:"Đăng kí thành công!",account:newAccount})
        } catch (error) {
            console.log(error)
            res.status(500)
                .json({success: false, message:"Lỗi server"})
        }
    }
    async loginAccount(req,res) {
        try {
            const data=req.body;
            const AccountInModel=await Account.findOne({username:data.username})
            if(AccountInModel)
                if(data.password===AccountInModel.password)
                    return res.json({success: true, message:"Đăng nhập thành công",account:AccountInModel})
                else
                    return res.json({success: false, message:"Tài khoản hoặc mật khẩu không chính xác"})
            else
                return res.json({success: false, message:"Tài khoản hoặc mật khẩu không chính xác"})
        } catch (error) {
            console.log(error)
            res.status(500)
                .json({success: false, message:"Lỗi server"})
        }
    }
}

module.exports = new AccountController();