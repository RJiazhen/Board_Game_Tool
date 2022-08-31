<template>
  <view class="player1" data-player="player1" @click="changeTargetPlayer">
    <!-- test:{{test}} -->
    <!-- 基础动作 -->
    <view class="basic-action" data-test="test">
      <button class="mini-btn" size="mini" @click="advance()" data-player="test">前进</button>
      <button class="mini-btn" size="mini" @click="breakaway()">脱离</button>
      <button class="mini-btn" size="mini" @click="retreat()">后退</button>
      <button class="mini-btn" size="mini" @click="recover()">装附</button>
      <button class="mini-btn" size="mini" @click="focus()">聚气</button>
    </view>
    <!-- 其他动作 -->
    <view class="other-action">
      <button class="mini-btn" size="mini">结束回合</button>
      <button class="mini-btn" size="mini">重铸牌库</button>
      <button class="mini-btn" size="mini">打出付与牌</button>
    </view>
    <!-- 樱花结晶面板 -->
    <view class="sakura-board">
      <view class="aura" data-region="aura">
        <text class="area-title">装：</text>
        <text class="sakura-token-count">{{player1.aura}}</text>
        <text class="sakura-token-limit">/{{player1.aura_limit}}</text>
      </view>
      <view class="flare" data-region="flare">
        <text class="area-title">气：</text>
        <text class="sakura-token-count">{{player1.flare}}</text>
        <text class="sakura-token-limit">/{{player1.flare_limit||"∞"}}</text>
      </view>
      <view class="life" data-region="life">
        <text class="area-title">命：</text>
        <text class="sakura-token-count">{{player1.life}}</text>
        <text class="sakura-token-limit">/{{player1.life_limit}}</text>
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
        areaName: 'player1'
      }
    },
    computed: {
      ...mapState('m_sa', ['player1'])
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

</style>
