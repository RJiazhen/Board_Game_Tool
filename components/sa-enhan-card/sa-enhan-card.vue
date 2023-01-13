<template>
    <!-- 单张付与牌 -->
    <view class="enhan-card">
        <!-- 背景层 -->
        <view class="bg">
            <view class="bg-left" :class="minusActivate?'activated':''"></view>
            <view class="bg-right" :class="addActivate?'activated':''"></view>
        </view>
        <!-- 信息展示层 -->
        <view class="info">
            <!-- 序号 -->
            <view class="order">付{{order}}</view>
            <!-- 图标 -->
            <view class="icon">
                <image class="icon-img" src="../../static/sakura_arms/shadow_icon.png" mode="aspectFit"></image>
            </view>
            <!-- 变化数字弹出 -->
            <view class="change-count-area">
                <view class="change-count" :class="changeCountStyle">
                    <text v-if="changeCount>0">+</text>
                    <text> {{changeCount}} </text>
                </view>
            </view>
            <view class="token-count">{{tokenCount}}</view>
            <!-- 减号 -->
            <view class="minus">
                <image class="sign" src="../../static/minus.svg" mode="aspectFit"></image>
            </view>
            <!-- 加号 -->
            <view class="add">
                <image class="sign" src="../../static/add.svg" mode="aspectFit"></image>
            </view>
        </view>
        <!-- 触摸层 -->
        <view class="touch">
            <view class="touch-left" @click="minus">
            </view>
            <view class="touch-right" @click="add">
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
    import {
        computed,
        onMounted,
        ref
    } from "vue";
    import {
        useSakuraArms
    } from "@/store/sakuraArms"
    import _ from 'lodash'

    const sakuraArms = useSakuraArms()
    const props = defineProps < {
        primaryAreaName: string,
        order: string,
    } > ()

    // 区域名称
    const areaName = `enhancement${props.order}`

    // 本区域token数量
    const tokenCount = computed(() => {
        return _.get(sakuraArms.currentState, `${props.primaryAreaName}.${areaName}.count`)
    })

    // 控制按下按钮时的样式变化
    const minusActivate = ref(false)
    const addActivate = ref(false)

    // 恢复减token相关的样式为未激活
    const inactivateMinus = _.debounce(() => {
        minusActivate.value = false
    }, 700)
    // 修改加token相关的样式为未激活
    const inactivateAdd = _.debounce(() => {
        addActivate.value = false
    }, 700)

    // 变化的量
    const changeCount = ref(0)
    // 变化的量对应的样式对应的样式
    const changeCountStyle = computed(() => {
        if (changeCount.value === 0) {
            return 'no-change'
        }
        if (changeCount.value < 0) {
            return 'minus-count'
        }
        if (changeCount.value > 0) {
            return 'add-count'
        }
    })
    // 恢复changeCount为0
    const resetChangeCount = _.debounce(() => {
        changeCount.value = 0
    }, 1000)


    // 减少token
    const minus = () => {
        console.log(props.primaryAreaName, areaName);
        console.log();
        // 成功减少则修改changeCount
        if (sakuraArms.minusToken(props.primaryAreaName, areaName)) {
            changeCount.value -= 1
            // 将changeCount重置为0 （1s延迟）
            resetChangeCount()
        }
        // 修改样式
        minusActivate.value = true
        // 然后恢复为未激活状态（500s延迟）
        inactivateMinus()
    }
    // 增加token
    const add = () => {
        if (sakuraArms.addToken(props.primaryAreaName, areaName)) {
            changeCount.value += 1
            // 将changeCount重置为0 （1s延迟）
            resetChangeCount()
        }
        // 修改样式
        addActivate.value = true
        // 然后恢复为未激活状态（500s延迟）
        inactivateAdd()
    }
</script>

<style scoped lang="scss">
    .enhan-card {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        overflow: hidden;

        position: relative;

        // 背景层
        .bg {
            width: 100%;
            height: 100%;
            position: absolute;

            display: flex;

            .bg-left {
                width: 50%;
                height: 100%;
                background: #E6FFED;
                transition: .1s all;
            }

            .bg-right {
                width: 50%;
                height: 100%;
                background: #E6FFED;
                transition: .1s all;
            }

            // 激活时的背景
            .activated {
                background: rgba(0, 0, 0, 0.2);
                transition: .25s all;
            }
        }

        // 信息展示层
        .info {
            width: 100%;
            height: 100%;

            position: absolute;

            // 序号
            .order {
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
                color: #8A7975;
            }

            // 图标
            .icon {
                position: absolute;
                left: 45px;
                top: 7px;

                .icon-img {
                    width: 35px;
                    height: 35px;
                }
            }

            // 弹出变化的数字
            .change-count-area {
                width: 50px;
                height: 30px;
                position: absolute;
                left: 50%;
                top: calc(50% - 35px);
                translate: -50% -50%;

                overflow: hidden;

                .change-count {
                    translate: -50% 100%;

                    line-height: 25px;
                    font-size: 25px;
                    text-align: center;


                    // 变化值为0时
                    &.no-change {
                        display: none;
                        color: rgba(0, 0, 0, 0);
                    }

                    // token减少时
                    &.minus-count {
                        translate: 0 0;
                        color: #23c3db;
                    }

                    // token增加时
                    &.add-count {
                        translate: 0 0;
                        color: #cf6379;

                    }
                }
            }

            .token-count {
                font-family: 'Inter';
                font-style: normal;
                font-size: 63px;
                font-weight: 400;
                color: #000000;

                position: absolute;
                left: 50%;
                top: 50%;
                transform: translateX(-50%) translateY(-50%);
            }

            .minus {
                position: absolute;
                left: 15%;
                top: 50%;
                transform: translate(-50%, -50%);
            }

            .add {
                position: absolute;
                right: 15%;
                top: 50%;
                transform: translate(50%, -50%);
            }

            // 加减号共用样式
            .sign {
                width: 36x;
                height: 36px;
            }
        }

        // 触摸层
        .touch {
            width: 90%;
            height: 90%;

            position: absolute;
            left: 50%;
            top: 50%;
            translate: -50% -50%;

            display: flex;
            align-items: center;
            justify-content: center;

            .touch-left {
                width: 50%;
                height: 100%;
            }

            .touch-right {
                width: 50%;
                height: 100%;
            }
        }
    }
</style>
