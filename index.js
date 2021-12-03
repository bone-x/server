const express= require('express');
const app=express();
const dotenv = require('dotenv')
dotenv.config({ //按需加载不同的环境变量
    path:'./config/config.env'
})
app.use(require('cors')())
app.use(express.json())
require('./routes/admin')(app)
require('./plugins/db')(app)
app.listen(3000,()=>{
    console.log('连接成功!','http://localhost:300')
})