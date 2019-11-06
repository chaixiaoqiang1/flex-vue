<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

.swipe {
  width: 100%;
  height: 100px;
}

.route1 {
  margin-top: 50px;
}
</style>

<template>
  <div id="app">
    <!-- <van-nav-bar title="小院科技" left-text="返回" right-text="搜索" left-arrow @click-left="onClickLeft"
    @click-right="onClickRight" />-->

    <!-- <div class="swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" width="100%" height="50%" fit="contain" />
        </van-swipe-item>
      </van-swipe>

    </div>-->

    <!-- <div class="route1">
      <van-button type="primary" to="test">路由跳转</van-button>
    </div>


    <div class="route1">
      <van-button type="primary" to="test1">路由跳转1</van-button>
    </div>-->

    <!-- <a href="./bar">去购物车</a> -->

    <!-- <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/foo">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/bar">社交</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>-->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      active: 0,
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  beforeCreate() {

  
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {}
  }
};
</script>
