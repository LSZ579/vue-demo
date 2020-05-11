<template>
  <div id="app">
    <mt-header style="background:#17b5af" fixed title="在线阅读器" v-show="$route.name!=='Login'" ></mt-header>
   
    <router-view v-if="!$route.meta.keepAlive"></router-view>
<keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
    

    <div>
      
      <mt-tabbar v-model="selected" :fixed="true" v-show="$route.name!=='BookDetail'" >

         <mt-tab-item class="iconfa" id="c3">
          <span slot="icon" class="iconfont icon-shoucang1"></span>
          我的书架
        </mt-tab-item>

        <mt-tab-item id="c1">
        <span slot="icon" class="iconfont icon-fenlei1"></span> 
        首页
 
        </mt-tab-item>
        <mt-tab-item id="c2">
          <span slot="icon" class="iconfont icon-sousuo"></span>
          搜索
        </mt-tab-item>
  
        <mt-tab-item id="c4">
          <span slot="icon" class="iconfont icon-z043"></span>
          个人中心
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      selected: "c1",
      show:true
    };
  },
  created(){
    window.setTimeout(function(){
        localStorage.removeItem('Token')
    },1000);
  },
  watch: {

    selected(newval, oldval) {
      // console.log(newval + "------" + oldval);
      switch (newval) {
        case "c1":
          this.$router.push({
            path: "/index"
          });
          break;
        case "c2":
          this.$router.push({
            path: "/Search"
          });
          break;
        case "c3":
          this.$router.push({
            path: "/BookSelf"
          });
          break;
        case "c4":
          this.$router.push({
            path: "/My"
          });
          break;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Microsoft YaHei", Helvetica, Arial, sans-serif;
  font-family:"微软雅黑";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}


</style>
