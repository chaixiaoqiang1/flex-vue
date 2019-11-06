<style>


</style>

<template>
  <div class="container">

   
  </div>
</template>


<script>

  export default {
    created() {
      console.log(this.$route.path);

      console.log(this.$route);

      this.aPlus = 500
      // console.log(this.aPlus = 123);

    },
    data() {
      return {
        a: 123,
        xianshi: true,
        event: 'mouseover',
        imageSrc: 'http://'
      }
    }
    , computed: {
      test: function () {
        return 'test123fdasfdasjklflsda';
      },
      // 读取和设置
      aPlus: {
        get: function () {
          return this.a + 1
        },
        set: function (v) {
          this.a = v
        }
      }
    },
    methods: {
      doThis() {
        alert(123)
      }
    }
  }

</script>