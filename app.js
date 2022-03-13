const { appConfig } = require('./config')

// 使用express框架
const express = require('express')
// 创建实例
const app = express()
// 配置解析json字符串的中间件
app.use(express.json())
// 获取请求
app.get('/', (req, res)=> {
  res.send('hellow world')
})
// 监听端口
app.listen( appConfig.port, () => {
  console.log(`Running at http://localhost:${appConfig.port}`);
})
