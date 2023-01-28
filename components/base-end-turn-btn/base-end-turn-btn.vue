<template>
  <view class="base-end-turn-btn">
    <view>结束<br>回合</view>
  </view>
</template>

<script>
  export default {
    name: "base-end-turn-btn",
    data() {
      return {

      };
    }
  }
</script>

<style scoped lang="scss">
  .base-end-turn-btn {
    width: 90%;
    height: 100%;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    background: #8C0303;
    border-radius: 11px;

    view {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      text-align: center;

      color: #CBCBCB;
    }
  }
</style>
