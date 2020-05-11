<template>
  <div>
      <mt-header style="background:white;color:black;  font-size: 18px" fixed title="搜索图书">
      <mt-button  icon="home" slot="left"> <span slot="icon" class="iconfont icon-shouye"></span></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="search_bar">
      <span slot="icon" class="iconfont icon-guanbi icon"></span>
      <input type="text" class="input" v-model="value" placeholder="请输入关键词" />
      <div class="btn" @click="search">搜索</div>
    </div>
    
    <div class="bookl">
      <Book-List v-bind:book="book"></Book-List>
      <div class="grey" :style="{height:bodyHeight}" v-show="!book||book.length<=0" style="background-color: rgb(223, 223, 223,0.5);"></div>
    </div>
   
  </div>
</template>
<script>
import axios from "axios";
import VueAxios from "vue-axios";
import BookList from "@/components/BookList";
//var url = "http://y.cn/Novels/public/index.php/api/v1/";
var url = "https://lsz520.xyz/public/index.php/api/v1/";

//
export default {
  components: {
    BookList: BookList
  },
  name: "Search",
  data() {
    return {
      value: "",
      book: [],
      bodyHeight:''
    };
  },
  created(){
    
  },
  methods: {
    search: function() {
      var t = this;
      if (t.value !== null) {
        axios
          .get(url + "book/search", {
            params: {
              keyword: t.value
            }
          })
          .then(function(res) {
            t.book = res.data.data.data;
            console.log(t.book);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
      if (t.value == null) {
        console.log("222");
      }
    }
  },

 mounted(){
   var t=this;
      t.bodyHeight=document.documentElement.clientHeight-120+'px';
      console.log('高度'+t.bodyHeight)
}
};
</script>
<style>
.search_bar {
  margin: -16px 0px;
  height: 40px;
  position:absolute;
  margin-top: 15px;
  left: 0;
  line-height: 40px;
  width: 100%;
 
}
.search_bar .btn{
    position: absolute;
    left: 0;
    height: 30px;
    top: 5px;
    line-height: 30px;
    width: 15%;
    z-index: 3;
    color: rgb(0, 0, 0);
    left: 83%;
}
.search_bar input{
  position: absolute;
  left: 0;
  margin-left: 10px;
  padding-left: 25px;
  width: 70%;
  height:33px;
  margin-top: 3.5px;
  background-color: rgb(241, 241, 241);
  border: none;
  border-radius: 15px;
  z-index: 1;

}
.search_bar input::-webkit-input-placeholder {
       /* placeholder颜色  */
       color: #aab2bd;
       /* placeholder字体大小  */
       font-size: 12px;
       z-index: 999;
}
.icon {
  position: absolute;
  left: 0;
  margin-left: 15px;
  top: 1.5px;
  width: 25px;
  height: 40px;
  z-index: 2;
}

.bookl{
  position: relative;
  top: 60px
}
.grey{
   background-color: rgb(223, 223, 223,0.5);
    margin-left: -8px ! important;
    margin-right: -8px !important
}
.result{
   width: 100vw;
   background-color: rgb(223, 223, 223,0.5);
}

</style>