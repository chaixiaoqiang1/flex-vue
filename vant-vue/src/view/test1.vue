<style scoped lang="less">
/* .top{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
  } */

  .top{
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    width: 100%;
    height: 50px;
    background: #000;
  }

  
</style>

<template>
  <div class="app">
    <div class="top">首页</div>

    <div class="main"></div>
    
    <div class="footer"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeIcon: "https://img.yzcdn.cn/vant/user-active.png",
      inactiveIcon: "https://img.yzcdn.cn/vant/user-inactive.png",
      checked: false,
      result: ["a", "b"],

      show: false,
      value: "123",
      showKeyboard: true,

      // minHour: 10,
      // maxHour: 20,
      minDate: new Date(2000, 10, 1),
      // maxDate: new Date(2020, 10, 1),
      currentDate: new Date()
    };
  },
  methods: {
    formatter(type, value) {
      // console.log(type, value);
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      }

      return value;
    },
    showPopup() {
      this.show = true;
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  }
};
</script>