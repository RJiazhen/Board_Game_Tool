<template>
    <view class="container">
        <view class="game-board">
            <test-player class="player player1" playerName="player1"></test-player>
            <test-player class="player player2" playerName="player2"></test-player>
            <!-- 中心菜单 -->
            <sa-menu class="menu"></sa-menu>
        </view>
    </view>
</template>

<script setup lang="ts">
    import {
        useSakuraArms
    } from "@/store/sakuraArms"

    import {
        onReady
    } from '@dcloudio/uni-app'

    const sakuraArms = useSakuraArms()
    onReady(() => {
        sakuraArms.resetState()
    })
</script>

<style scoped lang="scss">
    .container {
        height: 100vh;
        width: 100vw;
        position: fixed;
        background: linear-gradient(180.05deg, #B0C1D9 -2.17%, #F2D5DB 99.95%);

        padding: 10px 0 36px;

        // 帮助说明
        .help-container {
            // position: absolute;
            // left: 50%;
            transform: translateX(50px) translateY(20px);
            width: calc(100% - 100px);


            .help {
                color: #fff;
                font-size: 18px;
                text-align: justify;

                view {
                    margin-top: 10px;
                    align-items: center;

                    .bold {
                        font-weight: bold;
                    }

                    text {
                        line-height: 100%;

                    }

                    .reset-icon {
                        display: inline-block;
                    }


                }

                // 反馈说明
                .feedback {
                    margin-top: 20px;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;

                    text {
                        font-size: 15px;
                    }

                    button {
                        margin-top: 5px;
                    }
                }

                // 关闭提示
                .close-tip {
                    margin-top: 20px;
                    display: flex;
                    justify-content: center;

                    text {}
                }


            }
        }

        // 重置按钮
        .reset {
            position: absolute;
            top: 50%;
            left: -10px;
            transform: translateY(-50%);
            z-index: 999999;
        }


        // 游戏版图
        .game-board {
            display: flex;
            flex-direction: column;
            height: 98vh;
            width: 100vw;

            .player:nth-child(1) {
                margin-bottom: 8px;
                // position: absolute;

            }

            .player1 {
                transform: rotate(180deg);
                // left: 0;
                // top: 4.97vh;
            }

            .player2 {
                left: 0%;
                // top: 48.27vh;
            }
        }

        // 中心菜单
        .menu {
            position: absolute;
            left: 50%;
            top: 46.3%;
            translate: -50% -50%;
        }
    }
</style>
