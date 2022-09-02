<template>
  <view class="shared">
    <!-- 左侧「虚」 -->
    <view class="shadow-container" data-area="shadow" @click="areaClick">
      <view class="left-shadow">
        <text class="sakura-token-count">{{shared.shadow}}</text>
        <text class="sakura-token-limit">/{{shared.shadow_limit?shared.shadow_limit:"∞"}}</text>
        <text class="area-title">虚</text>
      </view>
    </view>
    <!-- 「距」 -->
    <view class="distance" data-area="distance" @click="areaClick">
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
    <view class="shadow-container" data-area="shadow" @click="areaClick">
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
    props: {
      TopAreaName: {
        type: String,
      }
    },
    computed: {
      ...mapState('m_sa', ['shared', 'movementParas'])
    },
    methods: {
      ...mapMutations('m_sa', ['moveSakuraToken', 'resetMovementParas']),

      // 区域点击
      areaClick(e) {
        // 如果和上一次点击的区域相同
        if (this.movementParas.from1 == this.TopAreaName && this.movementParas.from2 == e.currentTarget.dataset.area) {
          this.resetMovementParas()
          return
        }
        // 如果已经准备移动token
        if (this.movementParas.isReadyToMove) {
          this.movementParas.to1 = this.TopAreaName;
          this.movementParas.to2 = e.currentTarget.dataset.area;
          this.moveSakuraToken()
          return
        }
        this.movementParas.from1 = this.TopAreaName;
        this.movementParas.from2 = e.currentTarget.dataset.area;
        this.movementParas.amount = 1
        this.movementParas.isReadyToMove = true
      },
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
      // border: solid 1px #a2a2a2;
      box-shadow:
        // 立体阴影
        7px 7px 12px rgba(0, 0, 0, .4),
        -7px -7px 12px rgba(255, 255, 255, .9);
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
