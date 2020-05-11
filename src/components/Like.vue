<template>
  <div class="like">
    <div class="likeTitle">
      <span class="likeName">猜你喜欢</span>
      <span class="iconfont icon-xianxingshezhi likeIcon"></span>
    </div>

    <div  v-show="like&&like.length>1" class="like_book">
      <div class="like_books" v-for="(item,index) in like" :key="index" > 
        <div class="book_picture">
          <img :src="item.main_img_url" alt />
        </div>
        <div class="lbook_name">{{item.name}}</div>
      </div>
     
    </div>

     <div style="font-size:15px;color:red;margin-top:15px;margin-bottom:80px;" v-show="!like||like.length<=1">暂无图书推荐</div>
     
  </div>
</template>
<script>
export default {
  name: "Like",
  props: {
    like: {
      type: Array,
      required: true
    }
  }
};
</script>
<style>

.like_book {
margin-top: 20px;
flex-wrap: wrap;
  height: 340px;
}
.like_books {
  display: inline-block;

  width: 25%;
  height: 140px;

}
.like_books{
  float: left;
}
.like_book .book_picture img {
  height: 110px;
  width: 85%;
}

@media only screen and (max-width: 320px) {
  .like_book .book_picture img {
  height: 90px;
  width: 85%;
}
.like_books{
  font-size: 12px
}
}

.lbook_name {
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.likeTitle{
    display: flex;
    flex-direction: row;
    position: relative;
    margin-top: 16px;
    border-bottom: 1px solid gainsboro;
    padding-bottom: 5px
}
.likeTitle .likeName{
    border-left: 3px solid #17b5af;
}
.likeTitle .likeIcon{
    position: absolute;
    right: 0;
    color: #17b5af
}

</style>