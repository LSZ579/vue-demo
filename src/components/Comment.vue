<template>
    <div>
         <div class="commentTitle">
      <span class="commentName">评论</span>
      <span class="iconfont icon-chuangzuo commentIcon">写评论</span>
    </div>
        <div>
            <div v-show="!status" style="margin-top:20px">
                <mt-button type="default" @click="toLogin()" style="color:blue">登录后查看</mt-button>
            </div>
                  <div v-show="comments.length<=0&&status" style="margin-top:20px;color:grey">
                这里空空如也
            </div>
        </div>
        <div v-show="status" class="comment-s" v-for="item in comments" :key="item.id">
            <div class="user_">
              <div class="avatar"> <img :src="item.user_avatar" alt=""></div>
                <div class="u_name">{{item.user_name}}</div>
            </div>
            <div class="c_content">{{item.comments}}</div>
            <div class="c_d">
                <div class="c_time">{{item.create_time}}</div>
                <div class="tocom">
                    <div>
                        <span class="iconfont icon-liuyanguanli"></span>
                        <span>{{item.comment_count_count}}</span>
                    </div>
                     <div>
                        <span class="iconfont icon-dianzan"></span>
                        <span>{{item.counts.supports}}</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
    name:'Comment',
    props:{
        comments:{
            type:Array,
            required:true
        }
    },
    data(){
        return{
            status:Cookies.get('Token')
        }
    },
    methods:{
     toLogin(){
         var t=this;
      t.$router.push('/Login')
    },
    }
}
</script>
<style>
.commentTitle{
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    position: relative;
    border-bottom: 1px solid gainsboro;
    padding-bottom: 5px;
    margin-bottom: 10px;
}
.commentTitle .commentName{
    font-weight: 600;
    border-left: 6px solid #f1932b;
    
}
.commentTitle .commentIcon{
    position: absolute;
    right: 0;
}
.icon-chuangzuo{
    color: #f1932b
}
/* 评论区 */
.comment-s{
    width: 100%;
    overflow:hidden;
        border-bottom: gainsboro 1px solid;
    padding-bottom: 10px;
    margin-top: 10px;
}
.user_{
    display: flex;
    flex-direction: row
}
.user_ .avatar img{
    width: 40px;
    height: 40px;
   border-radius: 50%;
    border: #b1b1b1 1px solid
}
.user_ .u_name{
  line-height: 30px;
  font-weight:bold;
  padding-left: 10px
}
.c_content{
    text-align: left;
    font-size: 14px;
    margin-top: 10px;
    color: #868686
}
.c_d{
    font-size: 10px;
    color: #868686;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    position: relative;
}
.tocom{
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 0;
}
</style>