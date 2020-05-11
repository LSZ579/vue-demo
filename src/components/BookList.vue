<template>
  <div class="list">
    <div v-for="item in book" :key="item.id" class="bookList" @click="toDetail(item.id,item.word_num,item.cate,item.category_id)">
      <div class="img">
        <img v-lazy="item.main_img_url" />
      </div>
      <div class="text">
        <div class="bookName">{{item.name}}</div>
        <div class="author">
          作者：
          <span>{{item.author}}</span>
        </div>
        <div class="description">
          简介：
          <span>{{item.description}}</span>
        </div>
        <div class="label">
          <div class="num">{{item.word_num}}字</div>
          <div class="category">{{item.cate}}</div>
        </div>
      </div>
    </div>
    <div
      style="margin-top:5px;color:grey"
      v-show="book.length>0&&$route.name=='Search'"
    >共找到{{book.length}}本图书</div>
  </div>
</template>
<script>
import axios from "axios";
import VueAxios from "vue-axios";
import BookDetail from "@/components/BookDetail.vue";
export default {
  name: "BookList",
  components: {},
  props: {
    book: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  created: function() {
    var t = this;
    var url = "http://y.cn/Novels/public/index.php/api/v1/";
    //var url= 'https://lsz520.xyz/public/index.php/api/v1/';
    console.log(t.book);
  },
  methods: {
    toDetail(id,word_num,cate,category_id) {
      console.log(666);
      this.$router.push("/BookDetail?id=" + id+'&cate='+cate+'&word_num='+word_num+'&category_id='+category_id);
    }
  }
};
</script>
<style>
.list {
  background-color: rgb(223, 223, 223, 0.5);
  margin-left: -8px !important;
  margin-right: -8px !important;
  padding-top: 5px;
  padding-bottom: 5px;
}
.bookList {
  width: 100%;
  padding: 10px 0;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  background-color: white;
}

.bookList .text .bookName {
  font-weight: 600;
  font-size: 16px;
}
.bookList .text .author {
  color: grey;
  line-height: 32px;
}
.bookList .text .description {
  color: grey;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.bookList .text .label {
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
}

.bookList .text .label .num {
  background-color: rgb(187, 0, 0);
  color: white;
  padding: 0px 5px 0px 5px;
  font-size: 12px;
}
.bookList .text .label .category {
  background-color: rgb(1, 167, 1);
  color: white;
  padding: 0px 5px 0px 5px;
  margin-left: 10px;
  font-size: 12px;
}

.bookList .text {
  height: 130px;
  overflow: hidden;
  text-align: left;
  font-size: 14px;
  position: relative;
  margin-left: 10px;
}
.bookList .img {
  padding-left: 5px;
  width: 100px;
  height: 130px;
}
.bookList .img img {
  width: 95px;
  height: 130px;
}
/* 
 @media only screen and (max-width: 320px) {
     .bookList .text{
  width: 65%;
  height: 130px;
  overflow: hidden;
  float: right;
  text-align: left;
  font-size: 14px;
  position: relative;
}
  .bookList .img{
    float: left;
    width: 30%;
    height: 130px;
}
} */
</style>