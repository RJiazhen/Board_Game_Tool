<template>
  <view class="basic-action"></view>
</template>

<script>
  export default {
    name: "sa-basic-action",
    data() {
      return {

      };
    }
  }
</script>

<style scoped lang="scss">
  .basic-action {
    position: relative;
    width: 15vw;
    height: calc(15vw * 1.58);

    background: url('@/static/sakura_arms/advance.png') no-repeat center/contain;

    &:active {
      background: url('@/static/sakura_arms/advance_actived.png') no-repeat center/contain;

      &::after {
        content: "";
        width: 15vw;
        height: calc(15vw * 1.58);

        position: absolute;
        top: 0;
        left: 0;

        border-radius: 15px;
        background: rgba(217, 217, 217, 0.6);
        filter: blur(15px);
      }
    }
  }
</style>
