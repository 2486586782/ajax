const express= require("express")
const app =express();
app.use(express.static(__dirname+"/public"));

app.use(express.urlencoded({extended:true}));


app.get("/ajaxget",(request,response)=>{
response.send("ok")
})



app.post('/ajaxpost',(request,response)=>{
    console.log(request.body)
    response.send("你发来的是post请求")
    })




    app.get('/get_code',(request,response)=>{
        console.log("有人找我要验证码了");
       // console.log(request.query);
      setTimeout(()=>{
        let autocode= Math.floor(Math.random()*8999+1000)
        response.send(autocode.toString())
      },3000)
    })
    



app.listen("8000",()=>{
console.log("8000端口监听中")
})