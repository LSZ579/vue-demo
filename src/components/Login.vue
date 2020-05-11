<template>
  <div>
    <mt-header style="background:#17b5af" fixed title="用户登录">
      <mt-button @click="back" icon="back" slot="left">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div>
      <img class="logo" mode="widFix" src="../assets/images/logo.png" alt />
    </div>
    <div>
      <mt-field class="logInput" label="账户" placeholder="请输入账户" v-model="ac"></mt-field>
    </div>

    <div>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="se"></mt-field>
    </div>
    <div class="logMsg">{{msg}}</div>
    <div class="loginBtn">
      <mt-button class="logbtn" type="primary" @click="getToken()">登录</mt-button>
    </div>
    <div class="goZhuce" @click="toRegister()">新用户注册</div>
  </div>
</template>

<script>
//var url = "http://y.cn/Novels/public/index.php/api/v1/";
var url = "https://lsz520.xyz/public/index.php/api/v1/";
import Cookies from 'js-cookie'
import axios from "axios";
import VueAxios from "vue-axios";
import Axios from "axios";

export default {
  name: "Login",
 
  data() {
    return {
      ac: "",
      msg: "",
      se: ""
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    getToken: function(ac, se) {
      var t = this;
      if (!t.se || !t.ac) {
        console.log("不能为空");
        t.msg = "账户或密码不能为空";
      } else {
  
        let data = { ac: t.ac, se: t.$md5(t.se)};
        axios
          .post(url+'token/phone', data)
          .then(res => {
            var token = res.data.token;
            // console.log(token)
            if (token) {
              console.log("登录成功");
                 t.$toast({
                message: "登录成功",
                iconClass: "iconfont icon-xuanze"
              });
             Cookies.set('Token', token, { expires: 1 });//七天有效
              t.msg = "";
              t.$router.go(-1);
            }
          })
          .catch(function(error) {
            t.msg = "账户或密码错误";
          });
      }
    },
    toRegister() {
      this.$router.push("/Register");
    }
  },
  created() {}
};
</script>

<style>
.logo {
  height: 150px;
}

.loginBtn {
  margin-top: 30px;
}
.logbtn {
  width: 100% !important;
  background-color: #17b5af;
}
.logMsg {
  text-align: left;
  margin-top: 10px;
  color: red;
}
.goZhuce {
  margin-top: 15px;
  text-align: right;
  color: #17b5af;
}
</style>
