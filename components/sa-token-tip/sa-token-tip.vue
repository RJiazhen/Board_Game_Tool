<template>
    <view class="token-tip">
        <image class="token-icon" src="../../static/sakura_token_icon.svg" mode=""></image>
        <view class="token-count" :class="tokenCountStyle">
            <text v-if="tokenDifference>0">+</text>
            <text v-if="tokenDifference==0">&nbsp;</text>
            <text>{{tokenDifference}}</text>
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

    // 当前面板的token数量和理论数量（36）之间的差值
    const tokenDifference = computed(() => {
        let count = 0
        // 公共区域token数量计算
        for (let i in sakuraArms.currentState.shared) {
            count += sakuraArms.currentState.shared[i].count
        }
        // player1区域token数量计算
        for (let i in sakuraArms.currentState.player1) {
            count += sakuraArms.currentState.player1[i].count
        }
        // player2区域token数量计算
        for (let i in sakuraArms.currentState.player2) {
            count += sakuraArms.currentState.player2[i].count
        }
        return 36 - count
    })


    // 数字样式
    const tokenCountStyle = computed(() => {
        if (tokenDifference.value > 0) {
            return 'add-count'
        }
        if (tokenDifference.value < 0) {
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
