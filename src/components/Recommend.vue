<template>
  <div class="a">
    <div class="reBookTitle">
      <span></span>
      站长推荐
    </div>
   <div class="re-swiper" >
        <mt-swipe  :auto="4000" style="width:100%" >
      <mt-swipe-item class="re-swiper-item" v-for="(item,index) in recommendBook" :key="index">
        <div class="re-book" v-for="re in recommendBook[index]" :key="re.id">
          <div class="re-book-s" @click="toDetail(re.id,re.word_num,re.cate,re.category_id)">
            <img :src="re.main_img_url">
          </div>
          <div class="re-bookName">{{re.name}}</div>
        </div>
      </mt-swipe-item>
    </mt-swipe>
   </div>
  </div>
</template>
<script>
export default {
  name: "Recommend",
  props: {
    recommendBook: {
      type: Array,
      required: true
    }
  },
  methods:{
      toDetail:function(id,word_num,cate,category_id){
          this.$router.push("/BookDetail?id=" + id+'&cate='+cate+'&word_num='+word_num+'&category_id='+category_id);
      }
  }
};
</script>
<style>
.reBookTitle {
  position: absolute;
  text-align: left;
  display: block;
  height: 25px;
  margin-top: 15px;
  left: 0;
}
.reBookTitle span {
  border-left: 4px solid #17b5af;
}


.a .mint-swipe-indicator.is-active {
  background: #17b5af !important;
  opacity: 1 !important;
  border-radius: 0 !important;
  width: 15px;
  height: 5px;
}

/* //改变指示点位置 */
.a .mint-swipe-indicators {
  width: 20%;
  position: absolute;
  bottom: 200px;
  left: 90%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.a .mint-swipe-indicator {
  background: #8dd8d5 !important;
  border-radius: 0 !important;
  width: 15px;
  opacity: 0.8 !important;
  height: 5px;
}


.re-swiper {
  height: 210px;
  margin-left: -8px !important;
  margin-right: -8px !important;
  position: relative;
  top: 20px;
}


.re-book {
  float: left;
  display: -webkit-flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 22%;
  margin-left: 2.4%;
  text-align: center;
  height: 200px;
}
.re-book-s {
  height: 130px;
  margin-top: 30px;
}
.re-book .re-book-s img {
  width: 100%;
  height: 130px;
}
 .re-bookName {
  font-size: 13px;
    overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-top: 6px
}

@media only screen and (max-width: 320px) {
  .re-book .re-book-s img {
    width: 100%;
    height: 100px;
  }
  .re-book-s {
    height: 100px;
    margin-top: 30px;
  }

  .re-book {
  float: left;
  display: -webkit-flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 22%;
  margin-left: 2.4%;
  text-align: center;
  height: 180px;
}
.re-swiper {
  height: 190px;
  margin-left: -8px !important;
  margin-right: -8px !important;
  position: relative;
  top: 20px;
}
.a .mint-swipe-indicators {
  width: 20%;
  position: absolute;
  bottom: 170px;
  left: 89%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.re-book .re-bookName {
  font-size: 12px;
    overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
}
</style>