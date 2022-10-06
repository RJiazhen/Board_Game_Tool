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

    <view style="height: 32%;display: flex;flex-wrap: nowrap;">
      <!-- 付与牌和动作 -->
      <sa-enhan-n-action style="display: flex; width: 80vw;height: 100%;"> </sa-enhan-n-action>

      <!-- 回合结束按钮 -->
      <base-end-turn-btn class="end-turn-btn" style="display: flex;width: 20%; height: 100%; position: relative;">
      </base-end-turn-btn>
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
    height: 100%;
    width: 100vw;
    background-color: #fff;

    .shared {
      height: 25%;
      width: 100%;
      display: flex;

      border-top: 1px solid rgba(0, 0, 0, .5);
      border-bottom: 1px solid #979797;

      sa-shared-area:nth-child(1) {
        border-right: 1px solid #979797;

      }
    }

    .personal {
      height: 43%;
      width: 100%;
      display: flex;

      sa-personal-area:nth-child(2) {
        position: relative;

        &::before {
          content: "";

          position: absolute;
          top: 5%;
          left: 1px;

          height: 90%;
          width: 2px;
          background-color: #979797;
        }

        &::after {
          content: "";

          position: absolute;
          top: 5%;
          right: 1px;

          height: 90%;
          width: 2px;
          background-color: #979797;
        }
      }
    }
  }
</style>
