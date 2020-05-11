<template>
  <div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="moreLoading"
      infinite-scroll-distance="0"
      infinite-scroll-immediate-check="false"
    >
      <li>
        <div class="lists" v-for="item in list" :key="item.id">{{item.title}}</div>
      </li>
      <li class="not_loading">
        <span v-show="allLoaded">已全部加载</span>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import VueAxios from "vue-axios";
var url = "https://lsz520.xyz/public/index.php/api/v1/";
//var url = "http://y.cn/Novels/public/index.php/api/v1/";
export default {
  name: "ContentList",
  data() {
    return {
      book_id: this.$route.query.book_id,
      list: [],
      page: 1,
      size: 20,
      moreLoading: false,
      moreLoad: "",
      allLoaded: false
    };
  },
  created() {
    this.getContentList();
  },
  methods: {
    loadMore() {
      this.loading = true;
      if (this.allLoaded) {
        this.moreLoading = true;
        return;
      }
      if (this.queryLoading) {
        return;
      }
      this.getContentList();
    },
    getContentList() {
      var t = this;
      t.$indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      axios
        .get(url + "read/list", {
          params: {
            book_id: t.book_id,
            page: t.page,
            size: t.size
          }
        })
        .then(function(res) {
             t.$indicator.close();
          if (res.data.res.data.length < t.size) {
            t.list = res.data;
            t.moreload = false;
            t.allLoaded = true;
          }
          if (t.size == res.data.res.data.length) {
            t.list = t.list.concat(res.data.res.data);
            t.page = t.page + 1;
            t.moreload = true;
          }
          console.log(res.data.res.data);
        });
    }
  },
  mouted: function() {
    this.getContentList();
  }
};
</script>

<style>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.lists {
  line-height: 60px;
  text-align: left
}
</style>