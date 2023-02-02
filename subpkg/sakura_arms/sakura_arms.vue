<template>
    <view class="container">
        <view class="game-board">
            <sa-player class="player player1" playerName="player1"></sa-player>
            <sa-player class="player player2" playerName="player2"></sa-player>
            <!-- 中心菜单 -->
            <sa-menu class="menu"></sa-menu>
        </view>
    </view>
</template>

<script setup lang="ts">
import { useSakuraArms } from '@/store/sakuraArms';

import { onReady } from '@dcloudio/uni-app';

const sakuraArms = useSakuraArms();
onReady(() => {
    sakuraArms.getFromStorage();
});
</script>
<style scoped lang="scss">
@import '@/common/sakuraArms.scss';
@import '@/common/boardGameTool.scss';

.test-rect {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: red;
    transform: translateX(-50%) translateY(-50%);
}
.container {
    height: 100vh;
    width: 100vw;
    position: fixed;
    background: linear-gradient(180.05deg, #b0c1d9 -2.17%, #f2d5db 99.95%);
    padding: 10px 0 10px;

    // 游戏版图
    .game-board {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;

        .player {
            // 玩家面板之间有8px的间距
            height: calc(50% - 4px);
        }

        .player:nth-child(1) {
            margin-bottom: 8px;
        }

        .player1 {
            transform: rotate(180deg);
        }

        .player2 {
            left: 0%;
        }
    }

    // 中心菜单
    .menu {
        position: absolute;
        left: calc(50% - calc($menu-center-btn-bg-size / 2));
        top: calc(50% - calc($menu-center-btn-bg-size / 2));
    }
}
</style>
