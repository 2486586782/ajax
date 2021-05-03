const express = require('express')
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));




app.get('/ajax_get',(request,response)=>{
    console.log(request.query);
    response.send("grtok")
})


app.post('/ajax_post',(request,response)=>{
  console.log(request.body);
  response.send("postok")
})




app.listen(8080,()=>{
    console.log("服务器已经被启动，8080端口监听中");
})