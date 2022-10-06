<template>

  <!-- 凹槽 -->
  <view class="slot">

    <!-- 付与牌和基本动作的容器 -->
    <view class="enhan-n-action">

      <!-- 付与牌 -->
      <view class="enhancement-cards" v-show="false">
        <sa-enhancement-card></sa-enhancement-card>
        <sa-enhancement-card></sa-enhancement-card>
        <sa-enhancement-card></sa-enhancement-card>
        <sa-enhancement-add-btn></sa-enhancement-add-btn>
      </view>
      <!-- 基本动作 -->
      <view class="basic-actions">
        <sa-basic-action areaName="advance"></sa-basic-action>
        <sa-basic-action areaName="retreat"></sa-basic-action>
        <sa-basic-action areaName="advance"></sa-basic-action>
        <sa-basic-action areaName="advance"></sa-basic-action>
        <sa-basic-action areaName="advance"></sa-basic-action>
      </view>
    </view>
  </view>
  <view class="switch-btn basic-action-btn">
    <text>基本动作</text>
  </view>
  <view class="switch-btn enhancement-btn">
    <text>付与牌</text>
  </view>
</template>

<script>
  export default {
    name: "sa-enhan-n-action",
    data() {
      return {

      };
    },
    options: {
      // virtualHost: true,
    }
  }
</script>

<style scoped lang="scss">
  $slogWidth:65vw;

  // 凹槽
  .slot {
    width: $slogWidth;
    height: 100%;
    margin-left: 2px;

    position: relative;
    overflow: hidden;


    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    background: #FFFFFF;

    .enhan-n-action {
      height: 100%;

      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-50%);
      display: flex;
      flex-wrap: nowrap;



      .enhancement-cards {
        height: 100%;
        width: $slogWidth;
        display: flex;
        overflow: scroll;
      }

      .basic-actions {
        width: $slogWidth;
        height: 100%;

        display: flex;
        flex-wrap: nowrap;
        position: relative;
        overflow: scroll;
      }
    }
  }

  // 切换按钮
  .switch-btn {
    width: calc(100% - $slogWidth);
    height: 98%;
    margin-left: 3px;
    border-radius: 11px;

    text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);

      writing-mode: vertical-lr;
      white-space: nowrap;

      font-weight: 100;
      font-size: 16px;
    }
  }

  // 基本动作按钮
  .basic-action-btn {
    // display: none;
    filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.25));
    background: linear-gradient(180deg, rgba(157, 153, 152, 0.28) 3.12%, #484848 100%);

    text {
      letter-spacing: 0.3em;
      color: #FFFFFF;
    }
  }

  // 添加付与牌按钮
  .enhancement-btn {
    display: none;
    filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.25));
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.46) 0%, #A0F2BD 100%);

    text {
      letter-spacing: 0.5em;
      color: #717171;
    }
  }
</style>
