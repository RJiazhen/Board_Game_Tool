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
