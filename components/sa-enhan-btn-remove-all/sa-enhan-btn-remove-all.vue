<template>
    <!-- 全部减一按钮 -->
    <view class="btn-remove-all">
        <!-- 背景层 -->
        <view class="bg">

        </view>
        <!-- 信息展示层 -->
        <view class="info">
            <view class="info-text">全部 <text class="highlight">-1</text></view>
        </view>
        <!-- 触摸层 -->
        <view class="touch" @click="removeAll"></view>
    </view>
</template>

<script setup lang="ts">
    import {
        useSakuraArms
    } from "@/store/sakuraArms"
    const sakuraArms = useSakuraArms()
    const props = defineProps < {
        primaryAreaName: string,
    } > ()
    // 全部付与牌token数量减一
    const removeAll = () => {
        sakuraArms.removeAllEnhanCardToken(props.primaryAreaName)
    }
</script>

<style scoped lang="scss">
    // 全部减一按钮
    .btn-remove-all {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        overflow: hidden;

        position: relative;

        .bg {
            width: 100%;
            height: 100%;
            background: #E6FFED;
            position: absolute;
        }

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

                .highlight {
                    color: #23C3DB;
                }
            }
        }

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
