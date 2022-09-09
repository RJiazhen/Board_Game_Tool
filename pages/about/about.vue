<template>
  <view class="about-container">
    <view class="title">关于</view>
    <view class="intro">
      <image class="avatar" src="../../static/avatar.png" mode="widthFix"></image>
      <view class="time">&nbsp;&nbsp;&nbsp;2022年9月5日</view>
    </view>
    <view>你好，我是小程序的作者开开，希望你喜欢我制作的工具，如有问题和建议可以点击下方按钮进行反馈</view>
    <view class="feedback">
      <button type="primary" open-type="feedback" size="mini" plain="true">意见反馈</button>
    </view>
    <view class="more-info">
      <view>同时，本小程序遵循GPLv3协议进行开源，你可以扫描下方二维码了解未来更新计划</view>
      <image :show-menu-by-longpress="true" class="qr-code" src="../../static/github_QR_code.png" mode="widthFix">
      </image>
      <uni-link href="https://github.com/RJiazhen/Board_Game_Tool" text="点击复制项目网址">
      </uni-link>
    </view>
  </view>
</template>

<script>
  // 导入并混入添加分享功能
  import {
    showShareMenu
  } from '@/common/showShareMenu.js'
  export default {
    mixins: [showShareMenu],
    data() {
      return {};
    },


  }
</script>

<style lang="scss">
  .about-container {
    padding: 5vw;

    .title {
      font-size: 10vw;
      font-weight: bold;
      align-items: center;
    }

    .intro {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 5px;

      .avatar {
        display: inline-block;
        width: 10vw;
        border-radius: 5vw;
        vertical-align: middle;
      }

      .time {
        vertical-align: middle;
      }
    }

    .feedback {
      margin-top: 2vh;
      display: flex;
      justify-content: center;
    }

    .more-info {
      margin-top: 2vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;

      image {
        width: 50vw;
      }
    }
  }
</style>
