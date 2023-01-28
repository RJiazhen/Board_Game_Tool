<template>
  <view class="container">
    <view class="game-board">
      <test-player class="player player1" playerName="player1"></test-player>
      <test-player class="player player2" playerName="player2"></test-player>
      <!-- 中心菜单 -->
      <sa-menu class="menu"></sa-menu>
    </view>
  </view>
</template>

<script setup lang="ts">
  import {
    useSakuraArms
  } from "@/store/sakuraArms"

  import {
    onReady
  } from '@dcloudio/uni-app'

  const sakuraArms = useSakuraArms()
  onReady(() => {
    sakuraArms.getFromStorage()
  })
</script>
<style scoped lang="scss">
  .container {
    height: 100vh;
    width: 100vw;
    position: fixed;
    background: linear-gradient(180.05deg, #B0C1D9 -2.17%, #F2D5DB 99.95%);
    padding: 10px 0 10px;

    // 游戏版图
    .game-board {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;

      .player {
        // 玩家面板之间有8px的间距
        height: calc(50% - 4px);
      }

      .player:nth-child(1) {
        margin-bottom: 8px;
      }

      .player1 {
        transform: rotate(180deg);
      }

      .player2 {
        left: 0%;
      }
    }

    // 中心菜单
    .menu {
      position: absolute;
      left: 50%;
      top: 50%;
      translate: -50% -50%;
    }
  }
</style>
