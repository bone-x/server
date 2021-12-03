/*
 * @Author: your name
 * @Date: 2021-12-02 14:44:16
 * @LastEditTime: 2021-12-02 15:29:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \server\plugins\db.js
 */
//连接  project 数据库  账号：myproject 密码：123456

module.exports=app=>{
    const mongoose=require('mongoose');
    mongoose.connect(
        process.env.NET_LOCAL,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        },err=>{
        if(err){
            console.log('----------------')
            console.log('数据库连接失败',err)
            console.log('----------------')
        }else{
         console.log('数据库连接成功')   
        }
        
    });
}