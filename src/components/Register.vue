<template>
  <div>
    <div>
      <mt-header style="background:#17b5af" fixed title="用户注册">
        <mt-button @click="back" icon="back" slot="left">返回</mt-button>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div>
      <img class="logo" mode="widFix" src="../assets/images/logo.png" alt />
    </div>
    <div>
      <mt-field class="logInput" label="昵称" placeholder="请输入昵称" v-model="name"></mt-field>
    </div>
    <div>
      <mt-field class="logInput" label="账户" placeholder="请输入账户" v-model="ac"></mt-field>
    </div>

    <div>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="se"></mt-field>
    </div>
    <div class="logMsg">{{msg}}</div>
    <div class="loginBtn">
      <mt-button class="logbtn" type="primary" @click="getToken()">注册</mt-button>
    </div>
  </div>
</template>

<script>
//var url = "http://y.cn/Novels/public/index.php/api/v1/";
var url = "https://lsz520.xyz/public/index.php/api/v1/";
import axios from "axios";
import VueAxios from "vue-axios";
import Axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      ac: "",
      msg: "",
      name: "",
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
      }
      if ((t.se.length < 6) & (t.se.length > 0)) {
        t.msg = "密码长度不能小于6位";
      }
      if ((t.ac.length < 6) & (t.ac.length > 0)) {
        t.msg = "账户长度不能小于6位";
      }
      if (t.se.length >= 6 && t.ac.length >= 6) {
        axios
          .post(url + "token/register", {
            ac: t.ac,
            se: t.$md5(t.se),
            name: t.name
          })
          .then(function(res) {
            console.log(res);
            if (res.data.code == 1) {
              console.log("注册成功");
              t.$toast({
                message: "注册成功",
                iconClass: "iconfont icon-xuanze"
              });
              setTimeout(() => {
                t.$router.go(-1);
              }, 2000);
            } else {
              t.msg = "用户名已存在";
            }
          });
      }
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
