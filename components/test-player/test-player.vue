<template>
  <view class="player">
    <view class="shared">
      <!-- 虚 -->
      <sa-shared-area name="shadow" style="width: 50%"></sa-shared-area>
      <!-- 距 -->
      <sa-shared-area name="distance" style="width: 50%"></sa-shared-area>
    </view>
    <!-- 樱花数量提示区域 -->
    <sa-token-tip></sa-token-tip>
    <!-- 个人状态区 -->
    <view class="personal">
      <!-- 装 -->
      <sa-personal-area name="aura" style="width: 33%"></sa-personal-area>
      <!-- 气 -->
      <sa-personal-area name="aura" style="width: 33%"></sa-personal-area>
      <!-- 命 -->
      <sa-personal-area name="aura" style="width: 33%"></sa-personal-area>
    </view>

    <view style="height: 32%;">
      <!-- 付与牌和动作 -->
      <!-- <view style="width: 72%; height: 100%; display: flex;"> -->
      <sa-enhan-n-action style="display: flex; width: 72%; height: 100%;"> </sa-enhan-n-action>
      <!-- </view> -->

      <!-- 回合结束按钮 -->
      <base-end-turn-btn class="end-turn-btn" style="width: 18px; height: 100%;"></base-end-turn-btn>
    </view>
  </view>
</template>

<script>
  export default {
    name: "test-player",
    data() {
      return {

      };
    }
  }
</script>

<style scoped lang="scss">
  .player {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 50%;

    background-color: #fff;

    .shared {
      height: 25%;
      width: 100%;
      display: flex;
      // justify-content: space-between;

    }

    .personal {
      height: 43%;
      width: 100%;
      display: flex;
    }
  }
</style>
