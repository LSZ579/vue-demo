<template>
  <div>
    <mt-header style="background:#a2a0a1" fixed :title="detail.name">
      <mt-button @click="back" icon="back" slot="left">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="detail">
      <div class="bookImg">
        <img :src="detail.main_img_url" alt />
      </div>
      <div class="de">
        <div class="bookName">
          <span class="one">{{detail.name}}</span>
          <span class="score">{{scores.score||10}}分</span>
        </div>
        <div class="author">
          <span>作者：{{detail.author}}</span>
        </div>
        <div class="author">
          <span>章节数：{{detail.content_num}}章</span>
        </div>
        <div class="author">
          <span>创建时间：{{detail.create_time}}</span>
        </div>
        <div class="biaoqian">
          <div class="word_nums">{{word_num}}字</div>
          <div class="cates">{{cate}}</div>
        </div>
      </div>
    </div>
    <!-- <div class="description">
      <div class="deTitle">简介：</div>
      <div class="deContent">{{detail.description}}</div>
    </div> -->

    <div>
      <div class="description">
        <div class="deTitle">简介：</div>
        <div class="conts" :class="{'hide':isF}">{{detail.description}}
        </div>
      </div>
      <div class="if">
        <div @click="showTxt()" v-show="isF">﹀</div>
        <div @click="showTxt()" v-show="!isF">︿</div>

      </div>
    </div>
    <div class="heights"></div>
    <div class="newList">
      <span class="newListTitle">最新</span>
      <span class="newListContent">{{newList.title}}</span>
      <span class="iconfont icon-z043 newListIcon"></span>
    </div>

    <div class="newList" @click="toList()">
      <span class="newListTitle">目录</span>
      <span class="newListContent">{{detail.content_num}}章</span>
      <span class="iconfont icon-z043 newListIcon"></span>
    </div>

    <Comment :comments="comments"></Comment>

    <Like :like="like"></Like>

    <div class="dBar">
      <div class="dshare">分享好友</div>
      <div class="dread">开始阅读</div>
      <div class="dcollect">加入书架</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";
import Comment from "@/components/Comment";
import Like from "@/components/Like";
import Cookies from "js-cookie";
import ContentList from '@/components/ContentList'
var url = "https://lsz520.xyz/public/index.php/api/v1/";
//var url = "http://y.cn/Novels/public/index.php/api/v1/";
export default {
  name: "BookDetail",
  components: {
    Comment: Comment,
    Like: Like
  },
  data() {
    return {
      bid: this.$route.query.id,
      cate: this.$route.query.cate,
      word_num: this.$route.query.word_num,
      category_id: this.$route.query.category_id,
      detail: [],
      newList: "",
      scores: [],
      comments: [],
      like: [],
      isF: true
    };
  },
  methods: {
    showTxt: function() {
      this.isF = !this.isF;
    },
    book() {
      var t = this;
      t.$indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      axios
        .get(url + "book/" + t.bid)
        .then(function(res) {
          t.$indicator.close();
          console.log(t.$route.query);
          console.log(res.data.book.book);
          t.detail = res.data.book.book;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    back() {
      this.$router.go(-1);
    },

    //获取最新章节
    getNewsList: function() {
      var t = this;
      axios
        .get(url + "book/getNewestContentList", {
          params: {
            bid: t.bid
          }
        })
        .then(function(res) {
          console.log(res.data);
          t.newList = res.data;
        });
    },
    //获得图书评论
    getBookComment() {
      var t = this;

      axios
        .get(url + "comment/getcomments", {
          params: {
            book_id: t.bid
          },
          headers: { token: Cookies.get("Token") }
        })
        .then(function(res) {
          console.log(res.data);
          t.comments = res.data.com.data;
        });
    },
    //获取图书评分
    getBookScore() {
      var t = this;
      axios
        .get(url + "getBookAvgScore", {
          params: {
            book_id: t.bid
          }
        })
        .then(function(res) {
          console.log(res.data);
          t.scores = res.data.avg;
        });
    },
    //获取猜你喜欢
    getYouLike() {
      var t = this;
      axios
        .get(url + "book/getLike", {
          params: {
            cid: t.category_id
          }
        })
        .then(function(res) {
          console.log(t.category_id);
          if (res.data.length > 0) {
            t.like = res.data;
          } else {
            t.like = [{ err: "暂无图书推荐" }];
          }
        });
    },
    //跳转目录
    toList(){
      console.log('我想跳转')
        this.$router.push("/ContentList?book_id="+this.bid)
      },
    
  },
  mounted: function() {
    this.getBookScore();
    this.book();
    this.getNewsList();
    if (Cookies.get("Token")) {
      this.getBookComment();
    }
    this.getYouLike();
  }
};
</script>
<style>
/* 图书简介 */
.description .deTitle {
  text-align: left;
  margin-top: 5px;
}
.description .deCotent {
  text-align: left;
  font-size: 10px;
  color: rgb(92, 92, 92);
}

.conts {
  line-height: 20px;
  /*关键属性（必须有的）  */
  display: -webkit-box;
  font-size: 10px;
  color: gray;
  text-align: left;
  margin-top: 5px;
  width: 100%;
}
.hide {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}
.if {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  color: rgb(53, 53, 53);
  font-size: 35rpx;
  margin-top: 10rpx;
}
/* 图书简介结束 */

/* 底部选项 */
.dBar {
  width: 100vw;
  display: flex;
  flex-direction: row;
  margin-left: -8px !important;
  height: 60px;
  position: fixed !important;
  bottom: 0;
}
.dBar .dshare {
  width: 33.33%;
  font-size: 18px;
  text-align: center;
  background-color: aliceblue;
  line-height: 60px;
}
.dBar .dread {
  width: 33.33%;
  font-size: 18px;
  text-align: center;
  line-height: 60px;
  background-color: #17b5af;
  color: white;
}
.dBar .dcollect {
  width: 33.33%;
  font-size: 18px;
  text-align: center;
  line-height: 60px;
  background-color: aliceblue;
}
/* 底部结束 */
.detail {
  display: flex;
  flex-direction: row;
}

.bookImg img {
  width: 100px;
  height: 130px;
  margin-top: 10px;
  margin-left: 10px;
}
.de {
  text-align: left;
  margin-left: 15px;
  margin-top: 10px;
  height: 130px;
  position: relative;
}
.bookName .one {
  line-height: 30px;
}
.bookName .score {
  text-align: right;
  color: #ffd929;
}

.detail {
  background-color: #a2a0a1;
  color: white;
  height: 160px;
  margin-left: -8px !important;
  margin-right: -8px !important;
}
.author {
  font-size: 13px;
  line-height: 23px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.de .biaoqian {
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
}

.de .biaoqian .word_nums {
  background-color: rgb(187, 0, 0);
  color: white;
  padding: 1px 5px 1px 5px;
  font-size: 12px;
}
.de .biaoqian .cates {
  background-color: rgb(1, 167, 1);
  color: white;
  padding: 1px 5px 1px 5px;
  margin-left: 10px;
  font-size: 12px;
}

.newList {
  display: flex;
  flex-direction: row;
  height: 40px;
  line-height: 40px;
  position: relative;
  border-bottom: 0.5px solid rgb(238, 238, 238);
  padding: 3px 0;
}
.newList:active {
  background-color: gainsboro;
}
.newListTitle {
  margin-left: 0px;
  width: 15%;
  text-align: left;
  position: absolute;
  font-size: 17px;
  left: 0;
}
.newListContent {
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-left: 12%;
  text-align: left;
  font-size: 13px;
}
.newListIcon {
  height: 40px;
  width: 40px;
  position: absolute;
  opacity: 0.3;
  right: 0;
}
.heights {
  width: 100vw;
  height: 8px;
  margin-left: -8px;
  background-color: rgb(230, 230, 230);
  margin-top: 10px;
}
</style>