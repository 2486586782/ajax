<template>
    <div>你好</div>
</template>
<script>
import axios from "axios"
export default {
    name:"hello",
    mounted() {
        axios({
            url:"http://123.207.32.32:8000/home/multidata"
        }).then(
            res=>{
              //  console.log(res)
            }
        )
    },
}
</script>
<style scoped>

</style>