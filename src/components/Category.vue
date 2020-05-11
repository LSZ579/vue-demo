<template>
<div>
<div class="categorys">
        <div class="cate" @click="con">
            <img src="../assets/images/boy.png">
            <span>男生</span>
        </div>
        <div class="cate">
            <img src="../assets/images/girl.png">
            <span>女生</span>
        </div>
        <div class="cate"> 
            <img class="im" src="../assets/images/top.png">
            <span>排行榜</span>
        </div>
        <div class="cate">
            <img class="im" src="../assets/images/famous.png">
            <span>名著</span>
        </div>
         <div class="cate">
            <img class="im" src="../assets/images/category.png">
            <span>书库</span>
        </div>
    </div>
    <!-- <mt-swipe class="swiper" :auto="4000">
  <mt-swipe-item class="swiper-item">
      
    </mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe> -->

    <div class="height"></div>
</div>
    
</template>
<script>
export default {
    name:'Category',
    methods:{
        con:function(){
            console.log(1)
        }
    }
}
</script>
<style>
.categorys{
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-bottom: 10px;
    font-size: 14px;
 
}
.cate{
    width: 20%;
    display: flex;
    flex-direction: column;
    margin-top: 15px
}
.cate img{
    width: 60%;  
    padding-left: 20%;
}
.cate span{
    margin-top: 5px
}

.height{
    width: 100vw;
    height: 8px;
    margin-left: -8px;
    background-color: rgb(230, 230, 230);
    margin-top: 10px;

}
.swiper{
    height: 150px;
    width: 100%;
    
}
</style>