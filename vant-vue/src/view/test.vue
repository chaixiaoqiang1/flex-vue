<style>
  #app {
    padding: 0 20px;
  }

  .van-image {
    display: flex;
  }

  .van-checkbox .img {
    display: flex;
    width: 100%;
    height: 100%;
    /* margin-top: 50px; */
  }

  .van-checkbox__icon {
    height: 50%;
  }

  .van-col {
    background: #ff0;
  }

  .van-popup {
    width: 100px;
    height: 100px;
  }

  .van-icon {
    /* margin: 20px; */
  }
</style>

<template>
  <div class="">


    <van-row>
        <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
    </van-row>


    <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->

    <!-- <van-popup v-model="show">内容</van-popup> -->


    <van-icon name="chat" dot />
    <van-icon name="chat" info="9" />
    <van-icon name="chat" info="99+" />


    <van-cell-group>
      <van-field v-model="username" required clearable label="用户名" right-icon="question-o" placeholder="请输入用户名"
        @click-right-icon="$toast('question')" />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>


    <van-cell-group>
      <van-field v-model="username" label="用户名" placeholder="请输入用户名" error />
      <van-field v-model="phone" label="手机号" placeholder="请输入手机号" error-message="手机号格式错误" />
    </van-cell-group>


    <van-button @touchstart.stop="show = true">
      弹出默认键盘
    </van-button>

    <van-number-keyboard :show="show" extra-key="." close-button-text="完成" @blur="show = false" @input="onInput"
      @delete="onDelete" />

    <!-- <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" size="large" />
      <van-cell title="单元格" value="内容" size="large" label="描述信息" />
    </van-cell-group> -->


    <!-- <van-image src="https://img.yzcdn.cn/vant/cat1.jpeg" style="margin: 20px;">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>


    <van-image src="https://img.yzcdn.cn/vant/cat1.jpeg" style="margin: 20px;">
      <template v-slot:error>加载失败</template>
    </van-image>

    <van-checkbox v-model="checked">复选框</van-checkbox>

    <van-checkbox v-model="checked">
      自定义图标
      <img slot="icon" slot-scope="props" :src="props.checked ? activeIcon : inactiveIcon">
    </van-checkbox>


    <van-checkbox-group v-model="result">
      <van-checkbox name="a">复选框 a</van-checkbox>
      <van-checkbox name="b">复选框 b</van-checkbox>
      <van-checkbox name="c">复选框 c</van-checkbox>
    </van-checkbox-group> -->


    <!-- <van-datetime-picker v-model="currentDate" type="datetime" :min-date="minDate" :max-date="maxDate" /> -->


    <!-- <van-datetime-picker v-model="currentDate" type="date" :min-date="minDate" :formatter="formatter" /> -->

    <van-password-input :value="value" info="密码为 6 位数字" :focused="showKeyboard" @focus="showKeyboard = true" />

    <!-- 数字键盘 -->
    <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false" />


  </div>
</template>


<script>

  export default {
    data() {
      return {
        activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
        inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
        checked: false,
        result: ['a', 'b'],

        show: false,
        value: '123',
        showKeyboard: true,


        // minHour: 10,
        // maxHour: 20,
        minDate: new Date(2000, 10, 1),
        // maxDate: new Date(2020, 10, 1),
        currentDate: new Date()
      }
    },
    methods: {
      formatter(type, value) {

        // console.log(type, value);
        if (type === 'year') {
          return `${value}年`;
        } else if (type === 'month') {
          return `${value}月`
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

  }

</script>