<template>
    <view class="token-tip">
        <image class="token-icon" src="../../static/sakura_token_icon.svg" mode=""></image>
        <view class="token-count">
            +1
        </view>
    </view>
</template>

<script>
    export default {
        name: "sa-token-tip",
        data() {
            return {

            };
        }
    }
</script>

<style scoped lang="scss">
    .token-tip {
        width: 76px;
        height: 30px;
        background: #F7F8FC;
        border: 1px solid #F0F1F2;
        border-radius: 15px;

        overflow: hidden;
        position: relative;

        .token-icon {
            position: absolute;
            width: 50px;
            height: 50px;
            left: -5px;
            top: 50%;

            transform: translate(0, -50%) rotate(-52deg);
        }

        .token-count {
            position: absolute;
            width: 35px;
            height: 40px;
            right: 5px;
            top: calc(50% - 40px/2);

            font-weight: 400;
            font-size: 25px;
            line-height: 40px;

            color: #CF6379;
        }
    }
</style>
