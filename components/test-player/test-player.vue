<template>
    <view class="player">
        <div class="board board-1">
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

        </div>
    </view>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    .player {
        // height: 46.6vh;
        width: 100vw;
        padding: 0px 10px 0;
        overflow: hidden;

        position: relative;

        .board {

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
    }
</style>
