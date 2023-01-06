<template>
    <view class="container">
        <view class="game-board">
            <test-player class="player player1" plyaerName="player1"></test-player>
            <test-player class="player player2" plyaerName="player2"></test-player>
            <!-- 中心菜单 -->
            <sa-menu class="menu"></sa-menu>
        </view>
    </view>
</template>

<script setup lang="ts">
    // import {
    //   mapState,
    //   mapMutations
    // } from 'vuex'
    // // 导入并混入添加分享功能 
    // import {
    //   showShareMenu
    // } from '@/common/showShareMenu.js'
    // export default {
    //   mixins: [showShareMenu],
    //   data() {
    //     return {
    //       toShowHelp: true
    //     };
    //   },
    //   computed: {},
    //   methods: {
    //     ...mapMutations('m_sa', ['resetState', 'getFromStorage']),
    //     // 显示帮助
    //     showHelp() {
    //       this.$refs.popup.open()
    //     },
    //     // 重置相关数值
    //     reset() {
    //       uni.showModal({
    //         content: '是否重置所有数值？',
    //         success: (res) => { // success是只要接口调用成功都会执行
    //           if (res.confirm) { // res.confirm才是点击确认才执行
    //             this.resetState()
    //           }
    //         }
    //       })
    //     }
    //   },
    //   // 加载时从本地存储获取数据
    //   onLoad() {
    //     // 获取游戏面板数据
    //     this.getFromStorage()
    //     // 获取是否显示帮助参数
    //     this.toShowHelp = uni.getStorageSync('sa_toShowHelp').length != 0 ?
    //       JSON.parse(uni.getStorageSync('sa_toShowHelp')) :
    //       this.toShowHelp
    //     // 判断是否显示帮助
    //     if (this.toShowHelp) {
    //       this.showHelp()
    //       uni.setStorageSync('sa_toShowHelp', JSON.stringify(false))
    //     }
    //   },
    //   // 点击分享按钮时的事件
    //   onShareAppMessage(res) {

    //   }
    // }
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
