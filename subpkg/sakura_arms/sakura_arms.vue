<template>
  <view>
    <uni-icons type="loop" @click="reset" size="50"></uni-icons>
    <!-- 菜单 -->
    <view class="menu"></view>
    <!-- 游戏版图 -->
    <view class="game-board">
      <!-- 玩家一 -->
      <SA_player1></SA_player1>
      <!-- 公共区域 -->
      <SA_shared></SA_shared>
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
      return {
        // 事件的指向玩家
        targetPlayer: "player1",
      };
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

</style>
