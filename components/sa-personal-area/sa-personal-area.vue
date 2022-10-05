<template>
  <view class="personal-area">
    <view class="name">装</view>
    <view class="token">
      <view class="token-count">10</view>
      <view class="token-limit">/ 10</view>
    </view>
    <view class="click-area">
      <view class="sub">
        -
      </view>
    </view>
    <view class="click-area">
      <view class="add">+</view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "sa-personal-area",
    data() {
      return {

      };
    }
  }
</script>

<style scoped lang="scss">
  .personal-area {
    position: relative;
    height: 100%;
    display: flex;
    background: url("../../static/sakura_arms/aura_icon.png") no-repeat center/60%;
    // border: solid 1px #000;

    .name {
      position: absolute;
      left: 10px;
      bottom: 15px;

      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: baseline;
      text-align: center;

      color: #DDD8D7;
    }

    .token {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      color: #000000;

      .token-count {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-60%) translateY(-50%);

        font-size: 63px;

      }

      .token-limit {
        position: absolute;
        right: 10%;
        bottom: 30%;

        font-size: 10px;
      }
    }

    .click-area {
      position: relative;
      width: 50%;
      height: 100%;
      text-align: center;
      line-height: 100%;

      font-weight: 200;
      font-size: 40px;
      font-family: 'Inter';

      .sub {
        position: absolute;
        top: 50%;
        left: 12%;
        transform: translateY(-50%);
      }

      .add {
        position: absolute;
        top: 50%;
        right: 15%;
        transform: translateY(-50%);
      }
    }
  }
</style>
