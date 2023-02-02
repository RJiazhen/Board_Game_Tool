<template>
    <view class="menu">
        <!-- 环型菜单 -->
        <view class="circle-menu" :class="isActive">
            <!-- 菜单边框 -->
            <view class="menu-border" :class="isActive"></view>
            <!-- 按钮轮盘 -->
            <view class="btn-wheel" :class="isActive">
                <view class="btn" :class="isActive" v-for="(btn, index) in btnList" :key="index" @click="btn.func()">
                    <image class="btn-icon" :class="isActive" :src="btn.icon" mode="aspectFit"></image>
                    <text class="btn-name" :class="isActive">{{ btn.name }}</text>
                </view>
            </view>
        </view>
        <!-- 中心按钮 -->
        <view class="center-btn" :class="isActive" @click="changeActive">
            <!-- 按钮背景 -->
            <view class="center-btn-bg"></view>
            <!-- 按钮图案 -->
            <image class="center-btn-img center-btn-open-img" :class="isActive" :src="centerBtnOpenImg" mode="aspectFit"></image>
            <image class="center-btn-img center-btn-close-img" :class="isActive" :src="centerBtnCloseImg" mode="aspectFit"></image>
        </view>
        <!-- 重置按钮弹窗 -->
        <uni-popup ref="resetPopup" type="dialog">
            <uni-popup-dialog type="warn" mode="base" content="确认重置吗？" :before-close="true" @close="closeReset" @confirm="confirmReset"></uni-popup-dialog>
        </uni-popup>

        <!-- 帮助按钮弹窗 -->
        <uni-popup ref="helpPopup" background-color="#fff">
            <view class="helpInfo">
                <h1 class="help-title">帮助说明</h1>
                <ul>
                    <li class="help-text">
                        <image class="help-text-img" src="./images/center_btn.svg" mode="aspectFit"></image>
                        <text>：打开菜单</text>
                    </li>
                    <li class="help-text">
                        <image class="help-text-img" src="./images/sakura_token_tip.svg" mode="aspectFit"></image>
                        <text>：指示物数量提示。</text>
                        <text class="help-text-highlight">点击</text>
                        <text>则将指示物放入「虚」或从「虚」中尽可能取走指示物</text>
                    </li>
                    <li class="help-text">
                        <image class="help-text-img" src="./images/help_tip.png" mode="aspectFit"></image>
                        <text class="help-text-highlight">左划</text>
                        <text>切换至「付与牌」面板</text>
                    </li>
                </ul>
                <button @click="closeHelp">确定</button>
            </view>
        </uni-popup>
    </view>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, onMounted, ref } from 'vue';
import { useSakuraArms } from '@/store/sakuraArms';

// 图片素材
import centerBtnOpenImg from './images/center_btn_open.svg';
import centerBtnCloseImg from './images/center_btn_close.svg';

const sakuraArms = useSakuraArms();
const cur = getCurrentInstance();

// 当前激活状态
const isActive = ref('unactivated');
// 控制按钮激活状态的变量
// const isBtnAcitve = ref('unactivated');

// 改变激活状态
const changeActive = () => {
    // 需要先设置样式为空，然后再切换样式，以保证动画能再次执行
    if (isActive.value === 'unactivated') {
        isActive.value = 'activated';
    } else {
        isActive.value = 'unactivated';
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
        icon: '../../static/sakura_arms/help_icon.svg',
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
// 首次打开时自动打开帮助说明
onMounted(() => {
    // 获取本次存储的数据判断是否是首次打开
    const isFirst = uni.getStorageSync('isFirst').length != 0 ? false : true;
    // 如果是首次打开则显示帮助信息
    if (isFirst) {
        const timer = setTimeout(() => {
            cur.refs.helpPopup.open();
            clearTimeout(timer);
        }, 500);
    }
    uni.setStorageSync('isFirst', false);
});
</script>

<style scoped lang="scss">
@import '@/common/sakuraArms.scss';
@import '@/common/boardGameTool.scss';

.menu {
    position: relative;

    // 环型菜单
    .circle-menu {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        transition: all $menu-animation-time;

        // 未激活状态的circle-menu
        &.unactivated {
            width: 0;
            height: 0;
        }
        // 已激活状态的circle-menu
        &.activated {
            width: $menu-border-size;
            height: $menu-border-size;
        }

        // 外圈边框
        .menu-border {
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
            transform: translate(-50%, -50%);
            transition: all $menu-animation-time;

            // 未激活状态的menu-border
            &.unactivated {
                width: 0;
                height: 0;
            }
            // 已激活状态的menu-border
            &.activated {
                width: $menu-border-size;
                height: $menu-border-size;
            }
        }

        // 按钮轮盘
        .btn-wheel {
            width: 0;
            height: 0;
            background: #f7f8fc;
            border-radius: 50%;

            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: all $menu-animation-time;

            // 已激活状态的btn-wheel
            &.activated {
                width: $menu-btn-wheel-size;
                height: $menu-btn-wheel-size;
            }

            // 按钮
            .btn {
                width: 0;
                height: 0;
                left: 50%;
                top: 50%;
                transform: translateY(0);

                position: absolute;

                display: flex;
                flex-direction: column;
                align-items: center;

                transition: all $menu-animation-time;
                &:nth-child(1) {
                    transform: rotate(180deg);
                }
                // 已激活状态的btn
                &.activated {
                    width: $menu-btn-width;
                    height: $menu-btn-height;
                    left: calc(50% - $menu-btn-width/2);
                    top: calc(50% - $menu-btn-height/2);
                    // 将按钮偏离中心一个按钮的距离
                    transform: translateY(calc($menu-btn-height));
                    // 将第一个按钮旋转到对侧
                    &:nth-child(1) {
                        transform: rotate(180deg) translateY(calc($menu-btn-height));
                    }
                }

                // 按钮图标
                .btn-icon {
                    width: 0;
                    height: 0;
                    transition: all $menu-animation-time;

                    // 已激活状态的btn-icon
                    &.activated {
                        width: $menu-btn-icon-size;
                        height: $menu-btn-icon-size;
                    }
                }

                // 按钮名称
                .btn-name {
                    font-size: 0;
                    line-height: 0;
                    transition: all $menu-animation-time;

                    // 已激活状态的btn-name
                    &.activated {
                        font-size: $menu-btn-name-font-size;
                        line-height: $menu-btn-name-font-size;
                    }
                }
            }
        }
    }

    // 中心按钮
    .center-btn {
        position: relative;

        // 按钮背景
        .center-btn-bg {
            width: $menu-center-btn-bg-size;
            height: $menu-center-btn-bg-size;

            background: #d3d3d3;
            border-radius: $menu-center-btn-bg-border-size;
            transform: rotate(-45deg);
        }
        // 打开菜单按钮图片
        .center-btn-img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: all $menu-animation-time;
        }
        .center-btn-open-img {
            width: $menu-center-btn-open-img-size;
            height: $menu-center-btn-open-img-size;
            &.activated {
                width: 0;
            }
        }
        // 关闭菜单按钮图片
        .center-btn-close-img {
            width: 0;
            height: 0;
            &.activated {
                width: $menu-center-btn-close-img-size;
                height: $menu-center-btn-close-img-size;
            }
        }
    }

    .uni-popup__wrapper {
        border-radius: 15px;
    }

    // 帮助弹窗
    .helpInfo {
        width: 80vw;
        padding: 10px 15px;
        .help-title {
            font-size: 20px;
            font-weight: 700;
            text-align: center;
            margin-bottom: 10px;

            position: relative;
            // 分割线
            &::after {
                position: absolute;
                left: 50%;
                top: calc(100% + 2px);
                transform: translate(-50%, -50%);

                content: '';
                width: 100%;
                height: 0.5px;
                border-radius: 50%;
                background-color: #757575;
            }
        }
        // 单段说明文本
        .help-text {
            width: 100%;
            margin: 0 auto 10px;
            text-align: justify;

            .help-text-img {
                width: 50px;
                height: 30px;
                vertical-align: middle;
            }

            .help-text-highlight {
                font-weight: 600;
            }

            // 最后那张说明图片
            &:nth-child(3) {
                .help-text-img {
                    display: block;
                    width: 90%;
                    height: 52vw;
                }
            }
        }
    }
}
</style>
