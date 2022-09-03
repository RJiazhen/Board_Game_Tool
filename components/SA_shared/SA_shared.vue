<template>
  <!-- 因为「虚」区域是使用外层容器的背景，所以当「虚」区域处于激活状态时改变外层容器的样式 -->
  <view class="shared" :class="shared.shadow_class">
    <!-- 左侧「虚」 -->
    <view class="shadow-container" :class="shared.shadow_class" data-area="shadow" @click="areaClick">
      <view class="left-shadow">
        <text class="sakura-token-count">{{shared.shadow}}</text>
        <text class="sakura-token-limit">/{{shared.shadow_limit?shared.shadow_limit:"∞"}}</text>
        <text class="area-title">虚</text>
      </view>
    </view>
    <!-- 「距」 -->
    <view class="distance" :class="shared.distance_class" data-area="distance" @click="areaClick">
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
    <view class="shadow-container" :class="shared.shadow_class" data-area="shadow" @click="areaClick">
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
      ...mapMutations('m_sa', ['moveSakuraToken', 'resetMovementParas', 'resetClass', 'saveToStorage']),

      // 区域点击
      areaClick(e) {
        // 修改样式
        const classIndex = e.currentTarget.dataset.area + "_class"
        this.shared[classIndex] = "active"
        // 如果和上一次点击的区域相同
        if (this.movementParas.from1 == this.TopAreaName && this.movementParas.from2 == e.currentTarget.dataset.area) {
          // 重置移动参数和Class
          this.resetMovementParas()
          this.resetClass()
          this.saveToStorage()
          return
        }
        // 如果已经准备移动token
        if (this.movementParas.isReadyToMove) {
          this.movementParas.to1 = this.TopAreaName;
          this.movementParas.to2 = e.currentTarget.dataset.area;
          // 延时移动token，以防样式变化太快
          let timer = setTimeout(() => {
            this.moveSakuraToken()
            clearTimeout(timer)
          }, 300)
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

    &.active {
      background-color: #f7e887;
    }

    .area-title {
      font-size: 30px;
    }

    .sakura-token-count {
      font-size: 40px;

    }

    .sakura-token-limit {
      font-size: 10px;
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
      overflow: hidden;
      transition: 0.5s all;

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
