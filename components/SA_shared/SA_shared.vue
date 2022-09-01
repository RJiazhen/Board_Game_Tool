<template>
  <view class="shared">
    <!-- 左侧「虚」 -->
    <view class="shadow-container" data-region="shadow">
      <view class="left-shadow">
        <text class="sakura-token-count">{{shared.shadow}}</text>
        <text class="sakura-token-limit">/{{shared.shadow_limit?shared.shadow_limit:"∞"}}</text>
        <text class="area-title">虚</text>
      </view>
    </view>
    <!-- 「距」 -->
    <view class="distance" data-region="distance">
      <view class="for-player1">
        <text class="sakura-token-count">{{shared.distance}}</text>
        <text class="sakura-token-limit">/{{shared.distance_limit}}</text>
        <text class="area-title">距</text>
      </view>
      <view class="for-player2">
        <text class="sakura-token-count">{{shared.distance}}</text>
        <text class="sakura-token-limit">/{{shared.distance_limit}}</text>
        <text class="area-title">距</text>
      </view>
    </view>
    <!-- 右侧「虚」 -->
    <view class="shadow-container" data-region="shadow">
      <view class="right-shadow">
        <text class="sakura-token-count">{{shared.shadow}}</text>
        <text class="sakura-token-limit">/{{shared.shadow_limit?shared.shadow_limit:"∞"}}</text>
        <text class="area-title">虚</text>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from "vuex"
  export default {
    name: "SA_shared",
    data() {
      return {
        from: '',
        to: ''
      }
    },
    computed: {
      ...mapState('m_sa', ['shared'])
    },
    methods: {
      ...mapMutations('m_sa', ['moveSakuraToken'])
    }
  }
</script>

<style lang="scss">
  .shared {
    display: flex;
    justify-content: space-between;
    background-color: #dddddd;

    .area-title {
      font-size: 30px;
    }

    .sakura-token-count {
      font-size: 40px;

    }

    .sakura-token-limit {
      font-size: 10px;
      color: #0f0f0f;
    }

    // 距区域
    .distance {
      width: 33%;
      position: relative;
      border-radius: 20px;
      // border-left: #0f0f0f 1px;
      // border-right: #0f0f0f 1px;
      border: outset 3px;
      background-color: #fff;

      .for-player1 {
        position: absolute;
        left: 5%;
        top: 3%;
        transform: rotate(180deg);
      }

      .for-player2 {
        position: absolute;
        right: 5%;
        bottom: 3%;
      }
    }

    // 虚区域
    .shadow-container {
      width: 33%;
      position: relative;

      .right-shadow {
        position: absolute;
        right: 5%;
        bottom: 3%;
      }

      .left-shadow {
        position: absolute;
        left: 5%;
        top: 3%;
        rotate: 180deg;
      }
    }

  }
</style>
