<template>
  <view class="player1" data-player="player1" @click="changeTargetPlayer">
    <!-- 樱花结晶面板 -->
    <view class="personal-status">
      <!-- 装 -->
      <view class="aura area" data-region="aura">
        <view class="area-token-num">
          <text class="area-token-count">{{player1.aura}}</text>
          <text class="area-token-limit">/{{player1.aura_limit}}</text>
        </view>
        <view class="area-title">装</view>
      </view>
      <!-- 气 -->
      <view class="flare area" data-region="flare">
        <view class="area-token-num">
          <text class="area-token-count">{{player1.flare}}</text>
          <text class="area-token-limit">/{{player1.flare_limit||"∞"}}</text>
        </view>
        <view class="area-title">气</view>
      </view>
      <!-- 命 -->
      <view class="life area" data-region="life">
        <view class="area-token-num">
          <text class="area-token-count">{{player1.life}}</text>
          <text class="area-token-limit">/{{player1.life_limit}}</text>
        </view>
        <view class="area-title">命</view>
      </view>
    </view>
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
        areaName: 'player1',
        // 控制脱离按钮是否显示
        advanceHold: false,
      }
    },
    computed: {
      ...mapState('m_sa', ['player1']),

    },
    methods: {
      ...mapMutations('m_sa', ['moveSakuraToken', 'test']),
      // 前进
      advance() {
        const para = {
          from1: 'shared',
          from2: 'distance',
          to1: this.areaName,
          to2: 'aura',
          amount: 1
        }
        this.moveSakuraToken(para)
      },
      // 脱离
      breakaway() {
        const para = {
          from1: 'shared',
          from2: 'shadow',
          to1: 'shared',
          to2: 'distance',
          amount: 1
        }
        this.moveSakuraToken(para)
      },
      // 后退
      retreat() {
        const para = {
          from1: this.areaName,
          from2: 'aura',
          to1: 'shared',
          to2: 'distance',
          amount: 1
        }
        this.moveSakuraToken(para)
      },
      // 装附
      recover() {
        const para = {
          from1: 'shared',
          from2: 'shadow',
          to1: this.areaName,
          to2: 'aura',
          amount: 1
        }
        this.moveSakuraToken(para)
      },
      // 聚气
      focus() {
        const para = {
          from1: this.areaName,
          from2: 'aura',
          to1: this.areaName,
          to2: 'flare',
          amount: 1
        }
        this.moveSakuraToken(para)
      },
      // 结束回合
      // 重铸牌库
      // 打出付与牌
    },
  }
</script>

<style lang="scss">
  // 状态区
  .personal-status {
    height: 14vh;
    display: flex;
    justify-content: space-between;
    padding-top: 0.5vh;
    // padding-bottom: 1vh;

    // background-color: #dddddd;
    .area {
      background-color: #fff;
      width: 32%;
      height: 13.5vh;
      position: relative;
      border-radius: 5px;
      // border: solid 1px #a2a2a2;
      box-shadow:
        // 立体阴影
        7px 7px 6px rgba(0, 0, 0, .4),
        -7px -7px 12px rgba(255, 255, 255, .9);


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
