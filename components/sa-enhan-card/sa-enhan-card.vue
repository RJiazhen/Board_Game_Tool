<template>
    <!-- 单张付与牌 -->
    <view class="enhan-card">
        <!-- 背景层 -->
        <view class="bg">
            <view class="bg-left"> </view>
            <view class="bg-right"></view>
        </view>
        <!-- 信息展示层 -->
        <view class="info">
            <!-- 序号 -->
            <view class="order">付{{order}}</view>
            <!-- 图标 -->
            <view class="icon">
                <image class="icon-img" src="../../static/sakura_arms/shadow_icon.png" mode="aspectFit"></image>
            </view>
            <view class="token-count">5</view>
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
    const props = defineProps < {
        order: String
    } > ()
    // 增加token
    const add = () => {
        console.log('add');
    }

    // 减少token
    const minus = () => {
        console.log('minus');
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
            }

            .bg-right {
                width: 50%;
                height: 100%;
                background: #E6FFED;
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
