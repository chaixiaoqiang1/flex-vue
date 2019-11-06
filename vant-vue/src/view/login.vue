<style scoped>
.top {
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 400px;
  height: 400px;
  border: 1px solid #000;
}
.item {
  margin: 20px;
}
</style>

<template>
  <div>
    <div class="top">
      <div class="item">
        用户名：
        <input type="text" v-model="username" />
      </div>
      <div class="item">
        密码：
        <input type="text" v-model="password" />
      </div>
      <div class="item">
        <van-button type="info" @click="submitForm()">提交</van-button>
        <van-button type="danger">重置</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { CLIENT_RENEG_WINDOW } from "tls";
const axios = require("axios");

export default {
  data() {
    return {
      title: "登录页",
      username: "",
      password: ""
    };
  },

  created() {
    if (sessionStorage.getItem("islogin")) {
      this.$router.push({ path: "/test1" });
      // window.location.href = "/#/test1";
    }
  },

  methods: {
    submitForm() {
      var that = this;

      var url = this.$userMsg + "demo/index";

      axios
        .get(url, {
          params: {
            username: this.username,
            password: this.password
          }
        })
        .then(function(result) {
          // console.log(this);

          if (result.data.code) {
            sessionStorage.setItem("islogin", true);
            window.location.href = "/#/test1";
          } else {
            sessionStorage.setItem("islogin", false);
            alert("密码或账户错误");
          }
        });
    }
  }
};
</script>
