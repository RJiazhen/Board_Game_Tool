<template>
    <view class="shared-area">
        <!-- 背景层 -->
        <view class="bg">
            <view class="bg-left">
            </view>
            <view class="bg-right">
            </view>
        </view>
        <!-- 信息展示层 -->
        <view class="info">
            <view class="name">{{areaName}}</view>
            <view class="icon">
                <image class="icon-img" :src="iconSrc" mode="aspectFit"></image>
            </view>
            <view class="token token-count">10</view>
            <view class="token token-limit">/ ∞</view>
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
        computed
    } from "vue";
    import _ from 'lodash'

    const props = defineProps < {
        name: string,
    } > ()

    // 区域名称
    const areaNames = {
        'shadow': '虚',
        'distance': '距'
    }
    // 根据传入的参数设置区域名称
    const areaName = computed((): string => {
        return _.get(areaNames, props.name)
    })

    // 区域图标
    const iconSrcs = {
        'shadow': '../../static/sakura_arms/shadow_icon.png',
        'distance': '../../static/sakura_arms/shadow_icon.png'
    }
    const iconSrc = computed((): string => {
        return _.get(iconSrcs, props.name)
    })


    // 减少token
    const minus = () => {
        console.log('minus');
    }

    // 增加token
    const add = () => {
        console.log('add');
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
            }

            .bg-right {
                width: 50%;
                height: 100%;
                background: #F7F8FC;

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
