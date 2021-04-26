import Vue from 'vue'
import App from './App'
import router from './router'
//import axios from 'axios'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//基本请求方式
/*axios({
  url:"http://152.136.185.210:7878/api/m5/home/data",
  params:{
    type:"pop",
    page:1,
  }
}).then(
  res=>{
    console.log(res.data)
  }
);*/

/**************************************************/
/*并发请求
axios.defaults.timeout=5000;
axios.defaults.baseURL='http://152.136.185.210:7878/api/m5'
axios.all([
axios({
  url:"/home/data",
  params:{
    type:"pop",
    page:1,
  }
}),
axios({
  url:"/home/multidata",
}),
]).then(

  res=>{
    console.log(res)
  }
)*/
/***********************************************************/
//创建axios的实例
/*const instancel =axios.create({
baseURL:"http://152.136.185.210:7878/api/m5",
timeout:5000,
})

instancel({
url:"/home/multidata",
}).then(
  res=>{
    console.log(res)
  }
)
instancel({
  url:"/home/data",
  params:{
    type:"pop",
    page:1,
  }
  }).then(
    res=>{
      console.log(res)
    }
  )
  /*const instance2 =axios.create({
    baseURL:"",
    timeout:5000,
    })
    instance2({
      url:"",
      params:{
    
      }
      }).then(
        res=>{
          console.log(res)
        }
      )*/


