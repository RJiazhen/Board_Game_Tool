<template>
  <view class="container">
    <uni-icons class="reset" type="loop" @click="reset" size="50px"></uni-icons>
    <!-- 菜单 -->
    <view class="menu"></view>
    <!-- 游戏版图 -->
    <view class="game-board">
      <!-- 玩家二 -->
      <view class="player1">
        <SA_player TopAreaName="player1"></SA_player>
      </view>
      <!-- 公共区域 -->
      <SA_shared TopAreaName="shared"></SA_shared>
      <!-- 玩家一 -->
      <SA_player TopAreaName="player2"></SA_player>
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
        uni.showModal({
          content: '是否重置所有数值？',
          success: (res) => { // success是只要接口调用成功都会执行
            if (res.confirm) { // res.confirm才是点击确认才执行
              this.resetState()
            }
          }
        })
      }
    },
    // 加载时从本地存储获取数据
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

    .reset {
      position: absolute;
      top: 50%;
      left: -10px;
      transform: translateY(-50%);
      z-index: 999999;
    }

    .menu {}

    // 游戏版图
    .game-board {
      height: 100%;
      width: 100%;

      .player1 {
        height: 40vh;
        transform: rotate(180deg);
      }

      .player2 {
        height: 40vh;
      }

      .shared {
        height: 20vh;
      }

    }
  }
</style>
