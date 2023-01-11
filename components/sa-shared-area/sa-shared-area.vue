<template>
    <view class="shared-area">
        <!-- 背景层 -->
        <view class="bg">
            <view class="bg-left" :class="minusActivate?'activated':''">
            </view>
            <view class="bg-right" :class="addActivate?'activated':''">
            </view>
        </view>
        <!-- 信息展示层 -->
        <view class="info">
            <view class="name">{{areaNameZh}}</view>
            <view class="icon">
                <image class="icon-img" :src="iconSrc" mode="aspectFit"></image>
            </view>
            <view class="token token-count">{{tokenCount}}</view>
            <view class="token token-limit">/ {{tokenLimit===null?'∞':tokenLimit}}</view>
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
        ref
    } from "vue";
    import {
        useSakuraArms
    } from "@/store/sakuraArms"
    import _ from 'lodash'

    const sakuraArms = useSakuraArms()

    const props = defineProps < {
        areaName: string,
        // playerName: string
    } > ()

    // 区域名称列表
    const areaNames = {
        'shadow': '虚',
        'distance': '距'
    }
    // 本区域名称
    const areaNameZh = computed((): string => {
        return _.get(areaNames, props.areaName)
    })

    // 区域图标列表
    const iconSrcs = {
        'shadow': '../../static/sakura_arms/shadow_icon.png',
        'distance': '../../static/sakura_arms/shadow_icon.png'
    }
    // 本区域图标
    const iconSrc = computed((): string => {
        return _.get(iconSrcs, props.areaName)
    })

    // 本区域token数量
    const tokenCount = computed(() => {
        return _.get(sakuraArms.currentState, `shared.${props.areaName}.count`)
    })
    // 本区域token上限
    const tokenLimit = computed(() => {
        return _.get(sakuraArms.currentState, `shared.${props.areaName}.limit`)
    })

    // 控制按下按钮时的样式变化
    const minusActivate = ref(false)
    const addActivate = ref(false)

    // 恢复左半部分（减）为未激活
    const inactivateMinus = _.debounce(() => {
        minusActivate.value = false
    }, 500)
    // 修改右半部分（加）样式
    const inactivateAdd = _.debounce(() => {
        addActivate.value = false
    }, 500)

    // 减少token
    const minus = () => {
        sakuraArms.minusToken('shared', props.areaName)
        // 修改样式
        minusActivate.value = true
        // 然后恢复为未激活状态（500s延迟）
        inactivateMinus()
    }

    // 增加token
    const add = () => {
        sakuraArms.addToken('shared', props.areaName)
        // 修改样式
        addActivate.value = true
        // 然后恢复为未激活状态（500s延迟）
        inactivateAdd()
    }
</script>

<style lang="scss">
    .shared-area {
        height: 100%;
        border-radius: 12px;
        overflow: hidden;

        position: relative;

        // 背景层
        .bg {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;

            display: flex;

            .bg-left {
                width: 50%;
                height: 100%;
                background: #F7F8FC;
                transition: .1s all;
            }

            .bg-right {
                width: 50%;
                height: 100%;
                background: #F7F8FC;
                transition: .5s all;
            }

            // 激活时的背景
            .activated {
                background: rgba(0, 0, 0, 0.2);
                transition: .25s all;
            }
        }

        // 信息展示层
        .info {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;

            .name {
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

                color: #DDD8D7;
            }

            .icon {

                position: absolute;
                left: 30px;
                top: 9px;

                .icon-img {
                    width: 35px;
                    height: 35px;
                }
            }

            .token {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                color: #000000;
            }

            .token-count {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translateX(-50%) translateY(-50%);
                font-size: 63px;
            }

            .token-limit {
                position: absolute;
                right: calc(50% - 50px);
                bottom: calc(50% - 30px);
                font-size: 10px;
                color: #b0c1d9;
            }

            .minus {
                position: absolute;
                left: 18%;
                top: 50%;
                transform: translate(-50%, -50%);
            }

            .add {

                position: absolute;
                right: 18%;
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
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;

            display: flex;

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
