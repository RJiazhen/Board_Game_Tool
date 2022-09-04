<template>
  <view class="container">
    <view class="game-item" v-on:click="gotoTool('sakura_arms')">
      <image src="../../static/sakura_arms_icon.png" mode="aspectFit"></image>
      <text>散樱乱武</text>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        href: 'https://uniapp.dcloud.io/component/README?id=uniui'
      }
    },
    methods: {
      gotoTool(pagename) {
        uni.navigateTo({
          url: `/subpkg/${pagename}/${pagename}`
        })
      }
    }
  }
</script>

<style lang="scss">
  .container {
    .game-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 375rpx;
      width: 375rpx;
      // border: 1px solid #efefef;
      // border-radius: 15rpx;

      image {
        height: 40vw;
      }

      text {
        font-weight: bold;
        font-size: 6vw;
      }
    }
  }
</style>
