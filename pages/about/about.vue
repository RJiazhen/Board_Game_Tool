<template>
  <view class="about-container">
    <view class="title">关于</view>
    <view class="intro">
      <image class="avatar" src="../../static/avatar.png" mode="widthFix"></image>
      <text class="time">&nbsp;&nbsp;&nbsp;2022年9月5日</text>
    </view>
    <view>你好，我是小程序的作者开开，希望你喜欢我制作的工具，如有问题和建议可以点击下方按钮进行反馈</view>
    <view class="feedback">
      <button type="primary" open-type="feedback" size="mini" plain="true">意见反馈</button>
    </view>
    <view class="more-info">
      <view>同时，本小程序遵循GPLv3协议进行开源，你可以扫描下方二维码了解未来更新计划</view>
      <image class="qr-code" src="../../static/github_QR_code.png" mode="widthFix"></image>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
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
      justify-content: center;
      flex-wrap: wrap;

      image {
        width: 50vw;
      }
    }
  }
</style>
