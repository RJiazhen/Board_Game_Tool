<template>
  <!-- 因为「虚」区域是使用外层容器的背景，所以当「虚」区域处于激活状态时改变外层容器的样式 -->
  <view class="shared" :class="shared.shadow.class">
    <!-- 左侧「虚」 -->
    <view class="shadow-container" :class="shared.shadow.class" data-area="shadow" @touchend="areaClick">
      <view class="left-shadow">
        <text class="sakura-token-count">{{shared.shadow.count}}</text>
        <text class="sakura-token-limit">/{{shared.shadow.limit?shared.shadow.limit:"∞"}}</text>
        <text class="area-title">虚</text>
      </view>
    </view>
    <!-- 「距」 -->
    <view class="distance" :class="shared.distance.class" data-area="distance" @touchend="areaClick">
      <view class="for-player1">
        <text class="sakura-token-count">{{shared.distance.count}}</text>
        <text class="sakura-token-limit">/{{shared.distance.limit}}</text>
        <text class="area-title">距</text>
      </view>
      <view class="for-player2">
        <text class="sakura-token-count">{{shared.distance.count}}</text>
        <text class="sakura-token-limit">/{{shared.distance.limit}}</text>
        <text class="area-title">距</text>
      </view>
    </view>
    <!-- 右侧「虚」 -->
    <view class="shadow-container" :class="shared.shadow.class" data-area="shadow" @click="areaClick">
      <view class="right-shadow">
        <text class="sakura-token-count">{{shared.shadow.count}}</text>
        <text class="sakura-token-limit">/{{shared.shadow.limit?shared.shadow.limit:"∞"}}</text>
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

  import {
    saMixin
  } from '@/common/saAreaClick.js'
  export default {
    mixins: [saMixin],
    name: "SA_shared",
    data() {
      return {
        from: '',
        to: '',
        self: this,
      }
    },
    props: {
      TopAreaName: {
        type: String,
      }
    },
    computed: {
      // 获取shared数据给混入的saAreaClick方法用
      ...mapState('m_sa', ['shared'])
    },
    methods: {
      areaClick(e) {
        // 调用混入的saAreaClick方法
        this.saAreaClick(e)
      }
    }
  }
</script>

<style lang="scss">
  .shared {
    display: flex;
    justify-content: space-between;
    transition: .1s all;

    &.active {
      background-color: #f7e887;
    }

    // 要打出付与牌时的区域样式
    &.move-to-enhancement {
      background-color: #689766;
    }

    .area-title {
      font-size: 30px;
    }

    .sakura-token-count {
      font-size: calc(30px + 5vw);
    }

    .sakura-token-limit {
      font-size: calc(10px + 2vw)
    }

    // 距区域
    .distance {
      width: 33%;
      position: relative;
      border-radius: 20px;
      box-shadow:
        // 立体阴影
        7px 7px 12px rgba(0, 0, 0, .4),
        -7px -7px 12px rgba(255, 255, 255, .9);
      background-color: #fff;
      overflow: hidden;

      &.active {
        background-color: #f7e887;
        // color: #fff !important;
      }

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

      &.active {
        background-color: #f7e887;
      }

      // 要打出付与牌时的区域样式
      &.move-to-enhancement {
        background-color: #689766;
      }

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
