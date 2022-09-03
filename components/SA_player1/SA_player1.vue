<template>
  <view class="player1" data-player="player1" @click="playerClick">
    <!-- 樱花结晶面板 -->
    <view class="personal-status">
      <!-- 装 -->
      <view class="aura area" :class="player1.aura_class" data-area="aura" @click="areaClick">
        <view class="area-token-num">
          <text class="area-token-count">{{player1.aura}}</text>
          <text class="area-token-limit">/{{player1.aura_limit}}</text>
        </view>
        <view class="area-title">装</view>
      </view>
      <!-- 气 -->
      <view class="flare area" :class="player1.flare_class" data-area="flare" @click="areaClick">
        <view class="area-token-num">
          <text class="area-token-count">{{player1.flare}}</text>
          <text class="area-token-limit">/{{player1.flare_limit||"∞"}}</text>
        </view>
        <view class="area-title">气</view>
      </view>
      <!-- 命 -->
      <view class="life area" :class="player1.life_class" data-area="life" @click="areaClick">
        <view class="area-token-num">
          <text class="area-token-count">{{player1.life}}</text>
          <text class="area-token-limit">/{{player1.life_limit}}</text>
        </view>
        <view class="area-title">命</view>
      </view>
    </view>
    <!-- 动作 -->
    <view class="action">
      <!-- 基础动作 -->
      <view class="basic-action" data-test="test">
        <view class="action-button advance" @click="advance()" data-player="test">前进</view>
        <view class="action-button breakaway" @click="breakaway()" v-if="advanceHold">脱离</view>
        <view class="action-button" @click="retreat()">后退</view>
        <view class="action-button" @click="recover()">装附</view>
        <view class="action-button" @click="focus()">聚气</view>
      </view>
      <!-- 其他动作 -->
      <view class="other-action">
        <view class="action-button" size="mini">打出付与牌</view>
        <view class="action-button danger" size="mini">结束回合</view>
        <!-- <view class="action-button" size="mini">重铸牌库</view> -->
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
    name: "SA_player1",
    data() {
      return {
        // 控制脱离按钮是否显示
        advanceHold: false,
        isActive: true,
        areaClass: ""
      }
    },
    props: {
      TopAreaName: {
        type: String,
      }
    },
    computed: {
      ...mapState('m_sa', ['player1', 'movementParas']),
    },
    methods: {
      ...mapMutations('m_sa', ['moveSakuraToken', 'resetMovementParas', 'resetClass', 'saveToStorage']),
      // 区域点击
      areaClick(e) {
        // 修改样式
        const classIndex = e.currentTarget.dataset.area + "_class"
        this.player1[classIndex] = "active"
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
      // 前进
      advance() {
        this.movementParas.from1 = 'shared';
        this.movementParas.from2 = 'distance';
        this.movementParas.to1 = this.TopAreaName;
        this.movementParas.to2 = 'aura';
        this.movementParas.amount = 1;
        this.moveSakuraToken()
      },
      // 脱离
      breakaway() {
        this.movementParas.from1 = 'shared';
        this.movementParas.from2 = 'shadow';
        this.movementParas.to1 = 'shared';
        this.movementParas.to2 = 'distance';
        this.movementParas.amount = 1;
        this.moveSakuraToken()
      },
      // 后退
      retreat() {
        this.movementParas.from1 = this.TopAreaName;
        this.movementParas.from2 = 'aura';
        this.movementParas.to1 = 'shared';
        this.movementParas.to2 = 'distance';
        this.movementParas.amount = 1;
        this.moveSakuraToken()
      },
      // 装附
      recover() {
        this.movementParas.from1 = 'shared';
        this.movementParas.from2 = 'shadow';
        this.movementParas.to1 = this.TopAreaName;
        this.movementParas.to2 = 'aura';
        this.movementParas.amount = 1;
        this.moveSakuraToken()
      },
      // 聚气
      focus() {
        this.movementParas.from1 = this.TopAreaName;
        this.movementParas.from2 = 'aura';
        this.movementParas.to1 = this.TopAreaName;
        this.movementParas.to2 = 'flare';
        this.movementParas.amount = 1;
        this.moveSakuraToken()
      },
      // 结束回合
      // 重铸牌库
      // 打出付与牌
    },
  }
</script>

<style lang="scss">
  .active {
    background-color: #f7e887 !important;
  }

  .personal-status {
    height: 14vh;
    display: flex;
    justify-content: space-between;
    padding-top: 0.5vh;

    .area {
      background-color: #fff;
      width: 32%;
      height: 13.5vh;
      position: relative;
      border-radius: 5px;
      // border: solid 1px #a2a2a2;
      transition: .1s all;
      box-shadow: // 立体阴影
        7px 7px 6px rgba(0, 0, 0, .4),
        -7px -7px 12px rgba(255, 255, 255, .9);
      // 控制激活时样式变化效果
      transition: 1s all;


      .area-title {
        position: absolute;
        font-size: 30px;
        right: 5%;
        bottom: 3%;

      }

      .area-token-num {
        position: absolute;
        top: 40%;
        left: 40%;
        transform: translate(-50%, -50%);

        .area-token-count {
          font-size: 55px;

        }

        .area-token-limit {
          font-size: 10px;
          color: #0f0f0f;
        }
      }

    }
  }

  // 动作
  .action {
    display: flex;
    height: 26vh;
    padding: 0 1vw;

    // 动作按钮
    .action-button {
      height: 11vh;
      font-size: 23px;
      text-align: center;
      line-height: 11vh;
      margin-top: 5px;
      background-color: #fff;
      border-radius: 20px;
      // 立体阴影
      box-shadow:
        7px 7px 6px rgba(0, 0, 0, .4),
        -7px -7px 12px rgba(255, 255, 255, .9);
    }

    // 基本动作
    .basic-action {
      width: 60vw;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      align-content: flex-start;

      .action-button {
        width: 28vw;
      }
    }

    // 其他动作
    .other-action {
      width: 39vw;
      margin-left: 1vw;

      .danger {
        background-color: #D9534F;
        color: #fff;
        border: solid 2px #D43F3A;
        box-sizing: border-box;
      }

      .action-button {}
    }
  }
</style>
