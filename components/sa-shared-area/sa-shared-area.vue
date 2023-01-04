<template>
  <view class="shared-area">
    <view class="name">虚</view>
    <view class="token">
      <div class="token-count">10</div>
      <div class="token-limit">/ ∞</div>
    </view>
    <view class="click-area sub">
      -
    </view>
    <view class="click-area add">
      +
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
  .shared-area {
    position: relative;
    height: 100%;
    display: flex;
    background: #F7F8FC;
    border-radius: 12px;

    .name {
      position: absolute;
      left: 11px;
      top: 11px;

      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: baseline;
      text-align: center;

      color: #DDD8D7;
    }

    .token {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      color: #000000;

      .token-count {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);

        font-size: 63px;

      }

      .token-limit {
        position: absolute;
        right: 25%;
        bottom: 10px;

        font-size: 10px;
      }
    }

    .click-area {
      width: 50%;
      height: 100%;
      text-align: center;
      line-height: 84px;

      font-weight: 200;
      font-size: 40px;
      font-family: 'Inter';

      transition: 50ms;

      &:active {
        color: #8100FF;
        background-color: rgba(232, 234, 148, .6);
        transition: 50ms;
      }
    }

  }
</style>
