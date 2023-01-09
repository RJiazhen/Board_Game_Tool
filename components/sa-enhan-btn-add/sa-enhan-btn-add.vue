<template>
    <!-- 添加付与牌按钮 -->
    <view class="btn-add">
        <!-- 背景层 -->
        <view class="bg"> </view>
        <!-- 信息展示层 -->
        <view class="info">
            <view class="info-text">添加<br>付与牌</view>
            <image class="info-icon" src="../../static/sakura_arms/add_square_icon.svg" mode="aspectFit"></image>
        </view>
        <!-- 触摸层 -->
        <view class="touch" @click="addEnhanCard"></view>
    </view>
</template>

<script setup lang="ts">
    const addEnhanCard = () => {
        console.log('addEnhanCard');
    }
</script>

<style scoped lang="scss">
    // 添加付与牌按钮
    .btn-add {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        overflow: hidden;

        position: relative;

        // 背景层
        .bg {
            width: 100%;
            height: 100%;
            background: #E6FFED;
            position: absolute;
        }

        // 信息展示层
        .info {

            width: 100%;
            height: 100%;
            position: absolute;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .info-text {
                // font-family: 'Noto Sans TC';
                font-weight: 500;
                font-size: 25px;
                line-height: 25px;

                width: 100%;
                text-align: center;
            }

            .info-icon {
                width: 30px;
                height: 30px;

                margin-top: 10px;
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
        }
    }
</style>
