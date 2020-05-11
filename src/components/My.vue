<template>
    <div>
        <div v-show="status">
            已登录
        </div>
        <div v-show="!status">
            <div class="my_none">请登录后使用</div>
            <mt-button @click="toLogin" type="primary">去登录</mt-button>
        </div>
    </div>
</template>
<script>
import Cookies from 'js-cookie'
import Login from '@/components/Login.vue'
export default {
    name: 'My',
    data(){
        return{
        status:Cookies.get('Token'),
    }},
    methods:{
        toLogin(){
            this.$router.push("/Login")
        }
    }

}
</script>
<style>
.my_none{
    margin-top: 50px;
    margin-bottom: 20px;
}
</style>