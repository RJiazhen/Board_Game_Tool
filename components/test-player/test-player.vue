<template>
    <view class="player">
        <view class="boards">
            <!-- 面板一 -->
            <view class="board board-1">
                <!-- 公共区域 -->
                <view class="shared">
                    <!-- 虚 -->
                    <sa-shared-area name="shadow" style="width: 50%"></sa-shared-area>
                    <!-- 距 -->
                    <sa-shared-area name="distance" style="width: 50%"></sa-shared-area>
                </view>
                <!-- 个人区域 -->
                <view class="personal">
                    <!-- 装 -->
                    <sa-personal-area name="aura" style="width: 33%"></sa-personal-area>
                    <!-- 气 -->
                    <sa-personal-area name="aura" style="width: 33%"></sa-personal-area>
                    <!-- 命 -->
                    <sa-personal-area name="aura" style="width: 33%"></sa-personal-area>
                </view>
                <!-- 樱花数量提示区域 -->
                <sa-token-tip class="token-tip"></sa-token-tip>
            </view>
            <!-- 面板二 -->
            <view class="board board-2">
                <!-- 付与牌区域 -->
                <sa-enhan-card class="enhan-card" v-for="(card, index) in enhans" :key="index" :order="card.order">
                </sa-enhan-card>
                <!-- 添加付与牌按钮 -->
                <sa-enhan-btn-add class="enhan-btn-add"></sa-enhan-btn-add>
                <!-- 全部付与牌减一按钮 -->
                <sa-enhan-btn-remove-all class="enhan-btn-remove-all"></sa-enhan-btn-remove-all>
                <!-- token数量提示 -->
                <sa-token-tip class="token-tip"></sa-token-tip>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
    // 付与牌列表
    const enhans = [{
        order: 'A',
        tokenCount: 1,
        isShow: true
    }, {
        order: 'B',
        tokenCount: 1,
        isShow: true
    }, {
        order: 'C',
        tokenCount: 1,
        isShow: false
    }, {
        order: 'C',
        tokenCount: 1,
        isShow: false
    }]
</script>

<style scoped lang="scss">
    .player {
        width: 100vw;
        height: calc(44.25vh + 3px);
        // overflow: hidden;

        position: relative;

        .boards {
            position: absolute;
            left: -100vw;
            top: 0;

            display: flex;
            align-items: center;

            .board {
                width: 100vw;
                height: calc(44.25vh + 3px);
                padding: 0px 10px 0;
            }

            // 面板一
            .board-1 {
                position: relative;

                .token-tip {
                    position: absolute;
                    top: calc(50% - 20px);
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .shared {
                    height: 20.33vh;
                    display: flex;

                    sa-shared-area:nth-child(1) {
                        margin-right: 3px;
                    }
                }


                .personal {
                    height: 23.92vh;
                    display: flex;

                    margin-top: 3px;

                    sa-personal-area:nth-child(-n+2) {
                        margin-right: 3px;
                    }
                }
            }

            // 面板二
            .board-2 {
                position: relative;
                display: flex;
                flex-wrap: wrap;


                // 单张付与牌
                .enhan-card {
                    // 宽度是扣除外侧盒子的padding以及.enhan-card自己的margin-righ再除3
                    // 从而保证每行3个付与牌区域，且各间距固定，还能左对齐
                    width: calc((100vw - 26px) / 3);
                    height: 24vh;
                    margin-right: 3px;

                    &:nth-child(3n) {
                        margin-right: 0;
                    }

                    &:nth-child(n+4) {
                        margin-top: 3px;
                    }
                }

                // 添加付与牌按钮
                .enhan-btn-add {
                    width: calc((100vw - 26px) / 3);
                    height: 24vh;
                    margin-right: 3px;
                    margin-top: 3px;
                }

                // 全部付与牌减一按钮
                .enhan-btn-remove-all {
                    width: calc((100vw - 26px) / 3);
                    height: 24vh;
                    margin-top: 3px;
                }

                // token数量提示区域
                .token-tip {
                    position: absolute;
                    top: calc(50% - 20px);
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
    }
</style>
