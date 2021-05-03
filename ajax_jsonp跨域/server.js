const express = require('express')
const app=express();
//app.use(express.static(__dirname+'/public'));




app.get('/test',(request,response)=>{
    let{callback}=request.query
    let personArr=[{name:"qil",age:23},{name:"qil2",age:23}]
    response.send(`${callback}(${JSON.stringify(personArr)})`)
})

                                   


app.listen(8080,()=>{
    console.log("服务器已经被启动，8080端口监听中");
})