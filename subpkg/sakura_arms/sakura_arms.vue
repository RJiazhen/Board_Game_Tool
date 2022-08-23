<template>
  <view>
    <!-- 菜单 -->
    <view class="menu"></view>
    <!-- 游戏版图 -->
    <view class="game-board">
      <!-- 玩家一 -->
      <view class="player1" data-player="player1">
        <!-- 基础动作 -->
        <view class="basic-action" data-test="test">
          <button class="mini-btn" size="mini" @click="forWardMovement($event)" data-player="test">前进</button>
          <button class="mini-btn" size="mini">脱离</button>
          <button class="mini-btn" size="mini">后退</button>
          <button class="mini-btn" size="mini">装附</button>
          <button class="mini-btn" size="mini">聚气</button>
        </view>
        <!-- 其他动作 -->
        <view class="other-action">
          <button class="mini-btn" size="mini">结束回合</button>
          <button class="mini-btn" size="mini">重铸牌库</button>
          <button class="mini-btn" size="mini">打出付与牌</button>
        </view>
        <!-- 樱花结晶面板 -->
        <view class="sakura-board">
          <view class="life" data-region="aura">
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
      <!-- 公共区域 -->
      <view class="shared">
        <view class="distance" data-region="distance">
          <text class="area-title">距：</text>
          <text class="sakura-token-count">{{shared.distance}}</text>
          <text class="sakura-token-limit">/{{shared.distance_limit}}</text>
        </view>
        <view class="shadow" data-region="shadow">
          <text class="area-title">虚：</text>
          <text class="sakura-token-count">{{shared.shadow}}</text>
          <text class="sakura-token-limit">/{{shared.shadow_limit}}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // 玩家一的相关数值
        player1: {
          // 命
          life: 10,
          life_limit: 10,
          // 装
          aura: 3,
          aura_limit: 5,
          // 气
          flare: 0,
          flare_limit: null,
          // 付与牌
        },
        // 公用区域
        shared: {
          distance: 10,
          distance_limit: 10,
          shadow: 0,
          shadow_limit: null,
        },
        // 玩家二的相关数值
        player2: {
          // 命
          life: 10,
          life_limit: 10,
          // 装
          aura: 3,
          aura_limit: 5,
          // 气
          flare: 0,
          flare_limit: null,
          // 付与牌
        },
      };
    },
    methods: {
      forWardMovement(e) {
        console.log(e.currentTarget.parentNode)
        // console.log(e.currentTarget.getAttribute("data-player"));
      }
    },
  }
</script>

<style lang="scss">

</style>
