/*
 * @Author: your name
 * @Date: 2021-12-02 14:34:17
 * @LastEditTime: 2021-12-03 14:09:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE'
 * @FilePath: \server\routes\admin\index.js
 */
module.exports =app=>{
    const express=require('express')
    const router=express.Router()
    const Category=require('../../models/Category')
    router.post('/categories',async(req,res)=>{//新建分类
        if(!req.body.name){
            throw new Error('err');	
        }
        const result= await Category.create(req.body);
        res.send({message:'添加成功',code:200,data:result})
    })
    
    router.get('/categories',async(req,res)=>{//查询列表
        let {PageSize,currentPage}=req.query;
        const total=await Category.find().count();
        const result= await Category.find().sort({"createTime":-1}).skip((currentPage-1)*PageSize).limit(PageSize*1);
        res.send({code:200,data:result, PageTotal:total})
    })
    router.delete('/categories/:id',async(req,res)=>{//删除 这两个都可以
        // await Category.deleteOne({_id:req.params.id});
        await Category.findByIdAndDelete(req.params.id)
        res.send({message:'删除成功',code:200})
    })
    app.use('/admin/api',router)
}