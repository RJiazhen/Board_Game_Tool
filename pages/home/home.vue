<template>
  <view class="container">
    <view class="game-items">
      <view class="game-item" v-on:click="gotoTool('sakura_arms')">
        <image src="../../static/sakura_arms_icon.png" mode="aspectFit"></image>
        <text>散樱乱武</text>
      </view>
    </view>
    <view class="qr-code">
      <image :show-menu-by-longpress="true" src="../../static/QR_code.png" mode="aspectFit"></image>
      <view>长按分享小程序</view>
    </view>
  </view>
</template>

<script setup lang="ts">
  import {
    onMounted
  } from "vue";

  // 开启分享功能
  onMounted(() => {
    uni.showShareMenu({})
  })

  const gotoTool = (pagename) => {
    uni.navigateTo({
      url: `/subpkg/${pagename}/${pagename}`
    })
  }
</script>

<style lang="scss">
  .container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .game-items {
      width: 100vw;
      display: flex;

      .game-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 50vw;
        width: 50vw;
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

    .qr-code {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      image {
        width: 180px;
        height: 180px;
        margin: 0;
      }
    }

  }
</style>
