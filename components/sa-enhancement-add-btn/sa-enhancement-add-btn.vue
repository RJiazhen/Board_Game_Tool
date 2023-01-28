<template>
  <view class="enhancement-add-btn">
    <view class="info">
      <text class="add">+</text>
      <text class="no">D</text>
    </view>
  </view>
</template>

<script>
  export default {
    name: "sa-enhancement-add-btn",
    data() {
      return {

      };
    }
  }
</script>

<style scoped lang="scss">
  .enhancement-add-btn {
    position: relative;
    display: flex;

    width: 70px;
    height: 100%;

    border-width: 0px 1px 0px 0px;
    border-style: solid;
    border-color: #979797;

    background: linear-gradient(180deg, rgba(160, 242, 189, 0) 0%, #A0F2BD 100%);

    .info {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);

      width: 100%;
      height: 50%;

      background: url("@/static/sakura_arms/sakura_icon_light_colored.png") no-repeat center/65%;

      .add {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);

        font-weight: 200;
        font-size: 50px;
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
  }
</style>
