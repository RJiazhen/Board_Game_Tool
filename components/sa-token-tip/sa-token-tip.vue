<template>
  <view class="token-tip" @click="sakuraArms.offsetTokenDifference()">
    <image class="token-icon" src="../../static/sakura_token_icon.svg" mode=""></image>
    <view class="token-count" :class="tokenCountStyle">
      <text v-if="sakuraArms.tokenDifference>0">+</text>
      <text v-if="sakuraArms.tokenDifference===0">&nbsp;</text>
      <text>{{sakuraArms.tokenDifference}}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
  import {
    computed
  } from "vue";

  import {
    useSakuraArms
  } from "@/store/sakuraArms"
  import {
    onReady
  } from '@dcloudio/uni-app'
  const sakuraArms = useSakuraArms()



  // 数字样式
  const tokenCountStyle = computed(() => {
    if (sakuraArms.tokenDifference > 0) {
      return 'add-count'
    }
    if (sakuraArms.tokenDifference < 0) {
      return 'minus-count'
    }
    return ''
  })
</script>

<style scoped lang="scss">
  @import "@/common/sakuraArms.scss";

  .token-tip {
    width: $token-tip-width;
    height: $token-tip-height;
    background: $area-normal-bg-color;
    border: 1px solid $token-tip-boader-color;
    border-radius: calc($token-tip-height / 2);

    overflow: hidden;
    position: relative;

    .token-icon {
      position: absolute;
      width: $token-tip-icon-size;
      height: $token-tip-icon-size;
      left: -5px;
      top: 50%;

      transform: translate(0, -50%) rotate(-52deg);
    }

    .token-count {
      position: absolute;
      width: calc($token-tip-token-count * 2);
      height: $token-tip-token-count;
      right: 8px;
      top: calc(50% - $token-tip-token-count/2);

      text-align: end;
      font-size: $token-tip-token-count;
      line-height: $token-tip-token-count;

      color: #C7CDD0;

      &.add-count {
        color: #CF6379;

      }

      &.minus-count {
        color: #23c3db;
      }
    }
  }
</style>
