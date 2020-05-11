<template>
  <div class="book_page">
   <div> <Banner :banner="banner"></Banner></div>
    <div><Category></Category></div>

  <div class="r"> <Recommend :recommendBook="recommendBook"></Recommend></div>

<div class="height"></div>
    <div class="newBookTitle">
      <span></span>
      最新上架
    </div>
    
    <div class="book">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="moreLoading"
        infinite-scroll-distance="0"
        infinite-scroll-immediate-check="false"
      >
        <li>
          <Book-List v-bind:book="book"></Book-List>
        </li>
        <li class="not_loading">
          <span v-show="allLoaded">已全部加载</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";
import BookList from "@/components/BookList";
import Category from "@/components/Category";
import Banner from "@/components/Banner";
import Recommend from '@/components/Recommend'
import Cookies from 'js-cookie'

var url = "https://lsz520.xyz/public/index.php/api/v1/";
export default {
  name: "index",
  components: {
    BookList: BookList,
    Category: Category,
    Banner: Banner,
    Recommend:Recommend
  },
  data() {
    return {
      banner: [],
      moreLoading: false,
      moreLoad: "",
      allLoaded: false,
      book: [],
      page: 1,
      limit: 8,
      recommendBook:[]
    };
  },
  methods: {
    loadMore() {
      if (this.allLoaded) {
        this.moreLoading = true;
        return;
      }
      if (this.queryLoading) {
        return;
      }
      this.getBook();
    },

    //获取图书列表
    getBook() {
      var t = this;
      //  t.$toast('提示信息');

      t.$indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      axios
        .get(url + "book/recommend", {
          params: {
            page: t.page,
            limit: t.limit
          }
        })
        .then(function(res) {
          t.$indicator.close();
          if (res.data.data.data.length < t.limit) {
            t.book = t.book.concat(res.data.data.data);
            t.moreload = false;
            t.allLoaded = true;
            console.log("没有了" + t.book.length);
          }
          if (res.data.data.data.length === t.limit) {
            t.book = t.book.concat(res.data.data.data);
            t.page = t.page + 1;
            t.moreload = true;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //获取轮播图
    getBanner: function() {
      var t = this;
      axios
        .get(url + "getbanner", {
          params: {}
        })
        .then(function(res) {
           Cookies.set('token', 'token');
            console.log(Cookies.get('token'))
          console.log(res.data.banner.data);
          t.banner = res.data.banner.data;
        });
    },
    //获得推荐图书列表
    getAdminRecommend:function(){
      var t=this;
      axios.get(url+'book/adminRecommend').then(function(res){
        console.log(res.data)
        t.recommendBook=res.data
      })
    }
  },
  mounted: function() {
    this.book=[]
    this.getBook();
    this.getBanner();
    this.getAdminRecommend()
  }
};
</script>
<style>
ul,li{ padding:0;margin:0;list-style:none}

.book{
  border-radius: 0
}
.book .not_loading {
  color: gray;
  font-size: 14px;
  margin-bottom: 55px;
  background-color: rgb(223, 223, 223, 0.5);
  margin-left: -8px !important;
  margin-right: -8px !important;
}
.newBookTitle {
  text-align: left;
  display: block;
  height: 25px;
  margin-top: 15px;
  margin-left: -8px;
}
.newBookTitle span {
  
  border-left: 4px solid #17b5af;
}
</style>