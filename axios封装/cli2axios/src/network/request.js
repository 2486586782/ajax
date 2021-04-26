import axios from "axios"
export function request(config){
const instance = axios.create({
    baseURL:"http://123.207.32.32:8000/",
    timeout:5000
})



//拦截器中请求成功和请求失败
instance.interceptors.request.use(
config=>{
    //console.log("我是请求成功"+config);
    return config;
},
err=>{
   // console.log("我是请求失败"+err)
})

//拦截器中的响应成功和响应失败
instance.interceptors.response.use(
    res=>{
        //console.log(res);
        return res.data
    },
    err=>{
        console.log(err)
    })



 return instance(config)
}