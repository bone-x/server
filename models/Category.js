/*
 * @Author: your name
 * @Date: 2021-12-02 15:31:33
 * @LastEditTime: 2021-12-03 10:01:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEngo
 * @FilePath: \server\models\Category.js
 */
const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    name:{
        type:String
    },
    createTime:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('Category',schema)