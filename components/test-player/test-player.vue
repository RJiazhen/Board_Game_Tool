<template>
    <view class="player" id="player">
        <view class="boards">
            <swiper class="swiper" current="1">
                <swiper-item>
                    <!-- 面板一 -->
                    <view class="board board-1">
                        <!-- 公共区域 -->
                        <view class="shared">
                            <!-- 虚 -->
                            <sa-area primaryAreaName="shared" areaName="shadow" style="width: 50%">
                            </sa-area>
                            <!-- 距 -->
                            <sa-area primaryAreaName="shared" areaName="distance" style="width: 50%">
                            </sa-area>
                        </view>
                        <!-- 个人区域 -->
                        <view class="personal">
                            <!-- 装 -->
                            <sa-area :primaryAreaName="props.playerName" areaName="aura" style="width: 33%">
                            </sa-area>
                            <!-- 气 -->
                            <sa-area :primaryAreaName="props.playerName" areaName="flare" style="width: 33%">
                            </sa-area>
                            <!-- 命 -->
                            <sa-area :primaryAreaName="props.playerName" areaName="life" style="width: 33%">
                            </sa-area>
                        </view>
                        <!-- 樱花数量提示区域 -->
                        <sa-token-tip class="token-tip"></sa-token-tip>
                    </view>
                </swiper-item>
                <swiper-item>
                    <!-- 面板二 -->
                    <view class="board board-2" :style="`transform: translateY(${translateY}px);` "
                        @touchmove="moveBoard2($event)" @touchstart="touchStart($event)" @touchend="endTouch">
                        <!-- 付与牌区域 -->
                        <sa-enhan-card class="enhan-card" v-for="(card, index) in enhans" :key="index"
                            :primaryAreaName="props.playerName" :order="card.order"
                            @updateMaxTranslateY="updateMaxTranslateY()">
                        </sa-enhan-card>
                        <!-- 添加付与牌按钮 -->
                        <sa-enhan-btn-add class="enhan-btn-add" :primaryAreaName="props.playerName"></sa-enhan-btn-add>
                        <!-- 全部付与牌减一按钮 -->
                        <sa-enhan-btn-remove-all class="enhan-btn-remove-all" :primaryAreaName="props.playerName">
                        </sa-enhan-btn-remove-all>
                        <!-- token数量提示 -->
                        <sa-token-tip class="token-tip"></sa-token-tip>
                    </view>
                </swiper-item>
            </swiper>
        </view>
    </view>
</template>

<script setup lang="ts">
    import {
        computed,
        getCurrentInstance,
        onUpdated,
        ref
    } from 'vue'
    import {
        onReady
    } from '@dcloudio/uni-app'
    import {
        useSakuraArms
    } from '@/store/sakuraArms'

    const sakuraArms = useSakuraArms()
    const props = defineProps < {
        playerName: String
    } > ()
    // 面板高度变量（用于style部分）
    const playerHeight = `calc(44.25vh + 3px)`

    // 当前组件实例
    let cur = getCurrentInstance()

    // 当前要显示的付与牌列表
    const enhans = computed(() => {
        let enhans = []
        for (let i in sakuraArms.currentState[props.playerName]) {
            if (i.indexOf('enhancement') != -1 && sakuraArms.currentState[props.playerName][i]['show']) {
                enhans.push(sakuraArms.currentState[props.playerName][i])
            }
        }
        return enhans
    })

    // region 面板二沿Y轴移动功能

    // player节点实际高度
    let playerHeighttpx = 0
    // board2节点实际高度
    let board2Heightpx = 0
    // 最大向上偏移量
    let maxTranslateY = 0

    // 更新最大偏移值事件，让enhan-card组件在挂载后更新
    const updateMaxTranslateY = () => {
        let query = uni.createSelectorQuery().in(cur);
        let player = query.select('#player')
        let board2 = query.select('.board-2')
        player.boundingClientRect(data => {
            playerHeighttpx = data.height
        }).exec();
        board2.boundingClientRect(data => {
            board2Heightpx = data.height
            // 计算最大向上偏移量（负数，考虑10px的冗余）
            // 因为获取高度的这个函数是异步的，所以进行计算的步骤也要放在这里面，不然会使用默认值进行计算
            maxTranslateY = playerHeighttpx - board2Heightpx - 10
        }).exec()
    }

    // 面板二Y轴偏移量
    const translateY = ref(0)
    // 开始移动时的Y轴偏移量
    let startTranslateY = 0
    // 开始移动时的Y坐标
    let startY = 0

    // 开始移动面板二时存储其坐标
    const touchStart = (e) => {
        const touch = e.touches[0] || e.changeTouches[0]
        startY = touch.clientY
        startTranslateY = translateY.value
    }

    // 移动面板二
    const moveBoard2 = (e) => {
        const touch = e.touches[0] || e.changeTouches[0]
        let nowY = touch.clientY
        // 如果是player1则translateY的值为负值（移动方向相反）
        translateY.value = props.playerName === 'player1' ? -(startTranslateY + (nowY - startY)) : startTranslateY +
            (nowY - startY)
    }

    // 不再移动面板二时，判断是否超过设定范围
    const endTouch = () => {
        // 如果向下偏移了，则复原
        translateY.value = translateY.value > 0 ? 0 : translateY.value
        // 如果向上偏移，判断是否超过设定的最大向上偏移量，如果是，则设定为该偏移量
        translateY.value = translateY.value < maxTranslateY ? maxTranslateY : translateY.value
    }
    // endregion 
</script>

<style scoped lang="scss">
    .player {
        width: 100vw;
        height: v-bind(playerHeight);

        position: relative;

        .boards {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;

            .swiper {
                height: 100%;
                width: 100%;
            }

            .board {
                width: 100vw;
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

                    sa-area:nth-child(1) {
                        margin-right: 3px;
                    }
                }


                .personal {
                    height: 23.92vh;
                    display: flex;

                    margin-top: 3px;

                    sa-area:nth-child(-n+2) {
                        margin-right: 3px;
                    }
                }
            }

            // 面板二
            .board-2 {
                position: absolute;
                display: flex;
                flex-wrap: wrap;

                overflow: hidden;

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
                    margin-top: 3px;
                }

                // 全部付与牌减一按钮
                .enhan-btn-remove-all {
                    width: calc((100vw - 26px) / 3);
                    height: 24vh;
                    margin-left: 3px;
                    margin-top: 3px;
                }

                // token数量提示区域
                .token-tip {
                    position: absolute;
                    top: 24vh;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
    }
</style>
