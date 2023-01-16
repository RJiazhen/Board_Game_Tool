<template>
    <!-- 单张付与牌 -->
    <view class="enhan-card">
        <!-- 背景层 -->
        <view class="bg">
            <view class="bg-left" :class="minusActivate ? 'activated' : ''"></view>
            <view class="bg-right" :class="addActivate ? 'activated' : ''"></view>
        </view>
        <!-- 信息展示层 -->
        <view class="info">
            <!-- 序号 -->
            <view class="name">付{{ order }}</view>
            <!-- 图标 -->
            <view class="icon"><image class="icon-img" src="../../static/sakura_arms/shadow_icon.png" mode="aspectFit"></image></view>
            <!-- 变化数字弹出 -->
            <view class="change-count-area">
                <view class="change-count" :class="changeCountStyle">
                    <text v-if="changeCount > 0">+</text>
                    <text>{{ changeCount }}</text>
                </view>
            </view>
            <view class="token-count">{{ tokenCount }}</view>
            <!-- 减号 -->
            <view class="minus"><image class="sign" src="../../static/minus.svg" mode="aspectFit"></image></view>
            <!-- 加号 -->
            <view class="add"><image class="sign" src="../../static/add.svg" mode="aspectFit"></image></view>
        </view>
        <!-- 触摸层 -->
        <view class="touch">
            <view class="touch-left" @click="minus"></view>
            <view class="touch-right" @click="add"></view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useSakuraArms } from '@/store/sakuraArms';
import _ from 'lodash';

const sakuraArms = useSakuraArms();
const props = defineProps<{
    primaryAreaName: string;
    order: string;
}>();

// 区域名称
const areaName = `enhancement${props.order}`;

// 本区域token数量
const tokenCount = computed(() => {
    return _.get(sakuraArms.currentState, `${props.primaryAreaName}.${areaName}.count`);
});

// 控制按下按钮时的样式变化
const minusActivate = ref(false);
const addActivate = ref(false);

// 恢复减token相关的样式为未激活
const inactivateMinus = _.debounce(() => {
    minusActivate.value = false;
}, 700);
// 修改加token相关的样式为未激活
const inactivateAdd = _.debounce(() => {
    addActivate.value = false;
}, 700);

// 变化的量
const changeCount = ref(0);
// 变化的量对应的样式对应的样式
const changeCountStyle = computed(() => {
    if (changeCount.value === 0) {
        return 'no-change';
    }
    if (changeCount.value < 0) {
        return 'minus-count';
    }
    if (changeCount.value > 0) {
        return 'add-count';
    }
});
// 恢复changeCount为0
const resetChangeCount = _.debounce(() => {
    changeCount.value = 0;
}, 1000);

// 减少token
const minus = () => {
    console.log(props.primaryAreaName, areaName);
    console.log();
    // 成功减少则修改changeCount
    if (sakuraArms.minusToken(props.primaryAreaName, areaName)) {
        changeCount.value -= 1;
        // 将changeCount重置为0 （1s延迟）
        resetChangeCount();
    }
    // 修改样式
    minusActivate.value = true;
    // 然后恢复为未激活状态（500s延迟）
    inactivateMinus();
};
// 增加token
const add = () => {
    if (sakuraArms.addToken(props.primaryAreaName, areaName)) {
        changeCount.value += 1;
        // 将changeCount重置为0 （1s延迟）
        resetChangeCount();
    }
    // 修改样式
    addActivate.value = true;
    // 然后恢复为未激活状态（500s延迟）
    inactivateAdd();
};
</script>

<style scoped lang="scss">
@import '@/common/sakuraArms.scss';
.enhan-card {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    overflow: hidden;

    position: relative;

    // 背景层
    .bg {
        .bg-left {
            background: $area-enhan-bg-color;
        }

        .bg-right {
            background: $area-enhan-bg-color;
        }
    }

    // 信息展示层
    .info {
        // 序号
        .name {
            color: $area-enhan-name-color;
        }

        // 图标
        .icon {
            left: calc($area-name-font-size * 2);
        }

        .minus {
            left: 15%;
        }

        .add {
            right: 15%;
        }
    }
}
</style>
