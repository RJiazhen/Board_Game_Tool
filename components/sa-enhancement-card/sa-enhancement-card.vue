<template>
  <view class="enhancement-card">
    <view class="info">
      <view class="token">
        3
      </view>
      <span class="line"></span>
      <view class="no">
        A
      </view>
    </view>
    <view class="modi inc">
      <text>+</text>
    </view>
    <view class="modi dec">
      <text>-</text>
    </view>
  </view>
</template>

<script>
  export default {
    name: "sa-enhancement-card",
    data() {
      return {

      };
    }
  }
</script>

<style scoped lang="scss">
  .enhancement-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 70px;
    height: 100%;

    border-width: 0px 1px 0px 0px;
    border-style: solid;
    border-color: #979797;
    // mix-blend-mode: normal;
    // filter: drop-shadow(-4px 4px 4px rgba(0, 0, 0, 0.25));


    .info {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);

      width: 100%;
      height: 50%;

      background: url("@/static/sakura_arms/sakura_icon_light_colored.png") no-repeat center/65%;

      .token {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);

        font-family: 'Inter';
        font-size: 32px;
      }

      .line {
        position: absolute;
        right: 12px;
        bottom: 0px;

        height: 22px;
        width: 1px;
        background-color: #959292;
        transform: rotate(40deg)
      }

      .no {
        position: absolute;
        right: 3px;
        bottom: 0px;

        font-family: 'Inter';
        font-weight: 300;
        font-size: 12px;
        color: #959292;
      }
    }

    .modi {
      height: 50%;
      width: 100%;

      font-weight: 400;
      font-size: 30px;
      text-align: center;
      display: flex;

      justify-content: center;
    }

    .dec {
      text {
        line-height: 180%;
      }
    }

    .active {
      color: #8100FF;
      background: #E8EA94;
    }

  }
</style>
