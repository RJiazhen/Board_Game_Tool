<template>
    <view class="menu">
        <!-- 环型菜单 -->
        <view class="circle-menu" :class="isActive">
            <!-- 菜单边框 -->
            <view class="menu-border"></view>
            <!-- 按钮轮盘 -->
            <view class="btn-wheel">
                <view class="btn" v-for="(btn, index) in btnList" :key="index" @click="btn.func()">
                    <image class="btn-icon" :src="btn.icon" mode="aspectFit"></image>
                    <text class="btn-name">{{ btn.name }}</text>
                </view>
            </view>
        </view>
        <!-- 中心按钮 -->
        <view class="center-btn" :class="isActive" @click="changeActive">
            <!-- 按钮背景 -->
            <view class="center-btn-bg"></view>
            <!-- 打开按钮 -->
            <view class="btn-open" :class="isActive">
                <view class="rect" :class="isActive"></view>
                <view class="rect" :class="isActive"></view>
                <view class="rect" :class="isActive"></view>
            </view>
            <!-- 关闭按钮 -->
            <view class="btn-close" :class="isActive">
                <view class="rect" :class="isActive"></view>
                <view class="rect" :class="isActive"></view>
            </view>
        </view>
        <!-- 重置按钮弹窗 -->
        <uni-popup ref="resetPopup" type="dialog">
            <uni-popup-dialog type="warn" mode="base" content="确认重置吗？" :before-close="true" @close="closeReset" @confirm="confirmReset"></uni-popup-dialog>
        </uni-popup>

        <!-- 帮助按钮弹窗 -->
        <uni-popup ref="helpPopup" type="bottom" background-color="#fff">
            <uni-popup-dialog type="warn" mode="base" content="" :before-close="true" @close="closeHelp" @confirm="nextHelp">
                <view class="helpInfo">帮助信息</view>
            </uni-popup-dialog>
        </uni-popup>
    </view>
</template>

<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue';
import { useSakuraArms } from '@/store/sakuraArms';

const sakuraArms = useSakuraArms();
const cur = getCurrentInstance();

// 当前激活状态
const isActive = ref('unactivated');

// 改变激活状态
const changeActive = () => {
    // 需要先设置样式为空，然后再切换样式，以保证动画能再次执行
    if (isActive.value === 'unactivated') {
        isActive.value = '';
        const timer = setTimeout(() => {
            isActive.value = 'activated';
            clearTimeout(timer);
        }, 30);
    } else {
        isActive.value = '';
        const timer = setTimeout(() => {
            isActive.value = 'unactivated';
            clearTimeout(timer);
        }, 30);
    }
};

// 环型菜单列表
const btnList = [
    {
        name: '重置',
        icon: '../../static/sakura_arms/reset_icon.svg',
        func: () => {
            cur.refs.resetPopup.open();
            changeActive();
        }
    },
    {
        name: '帮助',
        icon: '../../static/sakura_arms/reset_icon.svg',
        func: () => {
            cur.refs.helpPopup.open();
            changeActive();
        }
    }
];

// 重置按钮相关函数
const closeReset = () => {
    cur.refs.resetPopup.close();
};
const confirmReset = () => {
    sakuraArms.resetState();
    cur.refs.resetPopup.close();
};

// 帮助按钮相关函数
const closeHelp = () => {
    cur.refs.helpPopup.close();
};
let helpInfoCount = 0;
const nextHelp = () => {
    cur.refs.helpPopup.close();
    // if (helpInfoCount == 3) {
    //     cur.refs.helpPopup.close()
    //     helpInfoCount = 0
    // } else {
    //     helpInfoCount += 1
    //     console.log(helpInfoCount);
    // }
};
</script>

<style scoped lang="scss">
@import '@/common/sakuraArms.scss';
@import '@/common/boardGameTool.scss';

.menu {
    position: relative;

    // 环型菜单
    .circle-menu {
        &.unactivated {
            width: 0;
            height: 0;
            position: absolute;
            left: 50%;
            top: 50%;

            // 外圈边框
            .menu-border {
                display: none;
                width: 0;
                height: 0;
                background: conic-gradient(
                    from 180deg at 50% 50%,
                    #f0f1f2 -26.25deg,
                    #f2d5db 50.63deg,
                    rgba(102, 93, 115, 0.84375) 127.5deg,
                    rgba(120, 119, 140, 0.609447) 210deg,
                    #b0c1d9 279.38deg,
                    #f0f1f2 333.75deg,
                    #f2d5db 410.62deg
                );
                position: absolute;
                left: 50%;
                top: 50%;
                translate: -50% -50%;
            }

            // 按钮轮盘
            .btn-wheel {
                .btn {
                    width: 0;
                    height: 0;
                    rotate: 180deg;

                    position: absolute;
                    left: 50%;
                    top: 50%;
                    translate: -50% -50%;

                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    &:nth-child(1) {
                        rotate: 0deg;
                    }

                    .btn-icon {
                        width: 0px;
                        height: 0px;
                    }

                    .btn-name {
                        font-size: 0px;
                        line-height: 0px;
                    }
                }
            }
        }

        // 激活时的环型菜单
        &.activated {
            // 外圈边框
            .menu-border {
                width: $menu-border-size;
                height: $menu-border-size;
                border-radius: 50%;
                background: conic-gradient(
                    from 180deg at 50% 50%,
                    #f0f1f2 -26.25deg,
                    #f2d5db 50.63deg,
                    rgba(102, 93, 115, 0.84375) 127.5deg,
                    rgba(120, 119, 140, 0.609447) 210deg,
                    #b0c1d9 279.38deg,
                    #f0f1f2 333.75deg,
                    #f2d5db 410.62deg
                );
                position: absolute;
                left: 50%;
                top: 50%;
                translate: -50% -50%;
            }

            // 按钮轮盘
            .btn-wheel {
                width: $menu-btn-wheel-size;
                height: $menu-btn-wheel-size;
                background: #f7f8fc;
                border-radius: 50%;

                position: absolute;
                left: 50%;
                top: 50%;
                translate: -50% -50%;

                // 按钮
                .btn {
                    width: $menu-btn-width;
                    height: $menu-btn-height;

                    position: absolute;
                    left: 50%;
                    top: 50%;
                    translate: -50% 50px;

                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .btn-icon {
                        width: $menu-btn-icon-size;
                        height: $menu-btn-icon-size;
                    }

                    .btn-name {
                        font-size: $menu-btn-name-font-size;
                        line-height: $menu-btn-name-font-size;
                    }

                    // 将其中一个按钮旋转到对侧
                    &:nth-child(1) {
                        transform-origin: center -50px;
                        // translate: -50% -100px;
                        rotate: 180deg;
                    }
                }
            }
        }
    }

    // 中心按钮
    .center-btn {
        // transition: 1s all;
        position: relative;

        // 按钮背景
        .center-btn-bg {
            width: $menu-center-btn-bg-size;
            height: $menu-center-btn-bg-size;

            background: #d3d3d3;
            border-radius: $menu-center-btn-bg-border-size;
            transform: rotate(-45deg);
        }

        // 打开菜单按钮关键帧
        @keyframes show-btn {
            0% {
                display: none;
            }
            1% {
                width: 0;
                height: 0;
            }
            100% {
                width: $menu-btn-open-n-close-size;
                height: $menu-btn-open-n-close-size;
            }
        }

        // 打开菜单按钮
        .btn-open {
            position: absolute;
            left: 50%;
            top: 50%;
            translate: -50% -50%;

            // 未激活状态
            &.unactivated {
                animation: show-btn 0.2s forwards;
            }
            // 已激活状态
            &.activated {
                animation: show-btn 0.2s reverse forwards;
            }
            // 打开菜单按钮矩形
            .rect {
                position: absolute;
                // 矩形动画关键帧

                // 打开菜单按钮矩形关键帧-1
                @keyframes show-btn-open-rect-1 {
                    0% {
                        display: none;
                    }
                    1% {
                        width: 0;
                        height: 0;

                        transform-origin: center;
                        left: 50%;
                        top: 50%;
                        translate: -50% -50%;
                        rotate: 50deg;
                    }

                    90% {
                        width: $menu-btn-open-rect-width;
                        height: $menu-btn-open-rect-height;
                        border-radius: $menu-btn-open-n-close-rect-border-radius;
                        background: #000000;

                        transform-origin: center;
                        left: calc(50% - $menu-btn-open-rect-width / 2);
                        top: calc(50% - $menu-btn-open-rect-height);
                        rotate: -5deg;

                        translate: 0 $menu-btn-open-rect-translateY;
                    }

                    100% {
                        width: $menu-btn-open-rect-width;
                        height: $menu-btn-open-rect-height;
                        border-radius: $menu-btn-open-n-close-rect-border-radius;
                        background: #000000;

                        transform-origin: center;
                        left: calc(50% - $menu-btn-open-rect-width / 2);
                        top: calc(50% - $menu-btn-open-rect-height);

                        translate: 0 $menu-btn-open-rect-translateY;
                    }
                }
                // 打开菜单按钮矩形关键帧-2
                @keyframes show-btn-open-rect-2 {
                    0% {
                        display: none;
                    }
                    1% {
                        width: 0;
                        height: 0;

                        // transform-origin: center;
                        left: 50%;
                        top: 50%;
                        translate: -50% -50%;
                        rotate: 50deg;
                    }

                    90% {
                        width: $menu-btn-open-rect-width;
                        height: $menu-btn-open-rect-height;
                        border-radius: $menu-btn-open-n-close-rect-border-radius;
                        background: #000000;

                        transform-origin: center;
                        left: calc(50% - $menu-btn-open-rect-width / 2);
                        top: calc(50% - $menu-btn-open-rect-height);
                        rotate: -5deg;
                    }

                    100% {
                        width: $menu-btn-open-rect-width;
                        height: $menu-btn-open-rect-height;
                        border-radius: $menu-btn-open-n-close-rect-border-radius;
                        background: #000000;

                        transform-origin: center;
                        left: calc(50% - $menu-btn-open-rect-width / 2);
                        top: calc(50% - $menu-btn-open-rect-height);
                    }
                }
                // 打开菜单按钮矩形关键帧-3
                @keyframes show-btn-open-rect-3 {
                    0% {
                        display: none;
                    }
                    1% {
                        width: 0;
                        height: 0;

                        // transform-origin: center;
                        left: 50%;
                        top: 50%;
                        translate: -50% -50%;
                        rotate: 50deg;
                    }

                    90% {
                        width: $menu-btn-open-rect-width;
                        height: $menu-btn-open-rect-height;
                        border-radius: $menu-btn-open-n-close-rect-border-radius;
                        background: #000000;

                        transform-origin: center;
                        left: calc(50% - $menu-btn-open-rect-width / 2);
                        top: calc(50% - $menu-btn-open-rect-height);
                        translate: 0 calc(0px - $menu-btn-open-rect-translateY);
                        rotate: -5deg;
                    }

                    100% {
                        width: $menu-btn-open-rect-width;
                        height: $menu-btn-open-rect-height;
                        border-radius: $menu-btn-open-n-close-rect-border-radius;
                        background: #000000;

                        transform-origin: center;
                        left: calc(50% - $menu-btn-open-rect-width / 2);
                        top: calc(50% - $menu-btn-open-rect-height);
                        translate: 0 calc(0px - $menu-btn-open-rect-translateY);
                    }
                }
                // 未激活状态
                &.unactivated {
                    &:nth-child(1) {
                        animation: show-btn-open-rect-1 0.2s forwards;
                    }
                    &:nth-child(2) {
                        animation: show-btn-open-rect-2 0.2s forwards;
                    }
                    &:nth-child(3) {
                        animation: show-btn-open-rect-3 0.2s forwards;
                    }
                }
                // 已激活状态
                &.activated {
                    &:nth-child(1) {
                        animation: show-btn-open-rect-1 0.2s reverse backwards;
                    }
                    &:nth-child(2) {
                        animation: show-btn-open-rect-2 0.2s reverse backwards;
                    }
                    &:nth-child(3) {
                        animation: show-btn-open-rect-3 0.2s reverse backwards;
                    }
                }
            }
        }

        // 关闭菜单按钮
        .btn-close {
            position: absolute;
            left: 50%;
            top: 50%;
            translate: -50% -50%;

            // 未激活状态
            &.unactivated {
                animation: show-btn 0.2s reverse forwards;
            }
            // 已激活状态
            &.activated {
                animation: show-btn 0.2s forwards;
            }
            // 关闭菜单按钮矩形
            .rect {
                position: absolute;
                // 关闭菜单按钮矩形关键帧-1
                @keyframes show-btn-close-rect-1 {
                    0% {
                        display: none;
                    }
                    1% {
                        width: 0;
                        height: 0;
                        left: 50%;
                        top: 50%;
                        translate: -50% -50%;
                        rotate: -45deg;
                    }
                    100% {
                        width: $menu-btn-close-rect-width;
                        height: $menu-btn-close-rect-height;
                        border-radius: $menu-btn-open-n-close-rect-border-radius;
                        background: #000000;

                        left: 50%;
                        top: 50%;
                        translate: -50% -50%;
                        rotate: -45deg;
                    }
                }

                // 关闭菜单按钮矩形关键帧-2
                @keyframes show-btn-close-rect-2 {
                    0% {
                        display: none;
                    }
                    1% {
                        width: 0;
                        height: 0;
                        left: 50%;
                        top: 50%;
                        translate: -50% -50%;
                        rotate: 45deg;
                    }
                    100% {
                        width: $menu-btn-close-rect-width;
                        height: $menu-btn-close-rect-height;
                        border-radius: $menu-btn-open-n-close-rect-border-radius;
                        background: #000000;

                        left: 50%;
                        top: 50%;
                        translate: -50% -50%;
                        rotate: 45deg;
                    }
                }

                // 未激活状态
                &.unactivated {
                    &:nth-child(1) {
                        animation: show-btn-close-rect-1 0.2s reverse forwards;
                    }
                    &:nth-child(2) {
                        animation: show-btn-close-rect-2 0.2s reverse forwards;
                    }
                }
                // 已激活状态
                &.activated {
                    &:nth-child(1) {
                        animation: show-btn-close-rect-1 0.2s forwards;
                    }
                    &:nth-child(2) {
                        animation: show-btn-close-rect-2 0.2s forwards;
                    }
                }
            }
        }
    }

    .helpInfo {
        font-size: $popup-body-font-size;
    }
}
</style>
