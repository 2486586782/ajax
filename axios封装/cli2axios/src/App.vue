<template>
  <div id="app">
   {{mess}}
   <hello></hello>
  </div>
</template>

<script>
import {request} from "./network/request"
import hello from './components/hello.vue'
export default {
  components: { hello },
  name: 'App',
  data(){
return{
  mess:""
}},


/*********************/
mounted() {
  request({
url:"home/multidata"
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})
},
/******************************/




}
</script>
<style>
</style>
