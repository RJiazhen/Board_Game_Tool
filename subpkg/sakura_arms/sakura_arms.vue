<template>
  <view class="container">
    <uni-icons class="tem" type="loop" @click="reset" size="50"></uni-icons>
    <!-- 菜单 -->
    <view class="menu"></view>
    <!-- 游戏版图 -->
    <view class="game-board">
      <!-- 玩家二 -->
      <view class="player2">
      </view>
      <!-- 公共区域 -->
      <SA_shared TopAreaName="shared"></SA_shared>
      <!-- 玩家一 -->
      <SA_player1 TopAreaName="player1"></SA_player1>
    </view>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {};
    },
    computed: {},
    methods: {
      ...mapMutations('m_sa', ['resetState', 'getFromStorage']),
      reset() {
        this.resetState()
      }
    },
    onLoad() {
      this.getFromStorage()
    }
  }
</script>

<style lang="scss">
  .container {
    height: 100vh;
    position: relative;
    background-color: #dddddd;
    // 临时内容

    .tem {
      position: absolute;
      top: 0;
      left: 0;
    }

    .menu {}

    // 游戏版图
    .game-board {
      height: 100%;
      width: 100%;

      .player2 {
        width: 100%;
        height: 40vh;
        background-color: #8a8a8a
      }

      .shared {
        height: 20vh;
      }

      .player1 {
        height: 40vh;

      }
    }
  }
</style>
