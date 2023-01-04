<template>
  <view class="player">
    <div class="board board-1">
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
    </div>
  </view>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .player {
    // height: 46.6vh;
    width: 100vw;
    padding: 0px 10px 0;
    overflow: hidden;

    .board {

      .shared {
        height: 20.33vh;
        display: flex;

        sa-shared-area:nth-child(1) {
          margin-right: 3px;
        }
      }

      .personal {
        height: 23.92vh;
        display: flex;

        sa-personal-area:nth-child(1) {
          margin-right: 3px;
        }
      }
    }
  }
</style>
