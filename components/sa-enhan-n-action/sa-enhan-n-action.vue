<template>
  <view class="slot">
    <!-- 付与牌 -->
    <view class="enhancement-cards">
      <enhancement-card></enhancement-card>
    </view>
    <!-- 基本动作 -->
    <view class="basic-actions">
      <!-- 前进 -->
      <view class="basic-action advance">
      </view>
      <!-- 后退 -->
      <view class="basic-action retreat">
      </view>
      <!-- 聚气 -->
      <view class="basic-action focus">
      </view>
      <!-- 装附 -->
      <view class="basic-action recover">
      </view>
      <!-- 脱离 -->
      <view class="basic-action breakaway">
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
  .container {
    // width: 100%;
    height: 100%;
    // background-color: red;
    display: flex;
  }

  // 凹槽
  .slot {
    width: 82%;
    height: 100%;
    margin-left: 2px;

    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    background: #FFFFFF;

    .enhancement-cards {}

    .basic-actions {

      .basic-action {}

      .advance {}

      .retreat {}

      .focus {}

      .recover {}

      .breakaway {}
    }
  }

  // 切换按钮
  .switch-btn {
    width: 44px;
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

      font-family: 'source-han';
      font-style: normal;
      font-weight: 100;
      font-size: 15px;
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
