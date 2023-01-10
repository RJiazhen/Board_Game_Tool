import {
    defineStore
} from 'pinia';
import { ref } from 'vue'
import _ from "lodash"

export const useSakuraArms = defineStore('sakuraArms', () => {
    // 初始状态 考虑到未来的功能扩展，仍保留回合数，回合玩家等数据
    const initialState = {
        // 当前回合
        turn: {
            turnCount: 1,
            turnPlayer: 'player1'
        },
        // 公共区域
        shared: {
            distance: {
                count: 10,
                limit: 10,
            },
            shadow: {
                count: 0,
                limit: null,
            }
        },
        // 玩家一
        player1: {
            // 装
            aura: {
                count: 3,
                limit: 5,
            },
            // 命
            life: {
                count: 10,
                limit: null,
            },
            // 气
            flare: {
                count: 0,
                limit: null,
            },
            // 付与牌
            enhancement: {
                A: {
                    count: 0,
                    show: false,
                },
                B: {
                    count: 0,
                    show: false,
                },
                C: {
                    count: 0,
                    show: false,
                },
                D: {
                    count: 0,
                    show: false,
                },
                E: {
                    count: 0,
                    show: false,
                },
                F: {
                    count: 0,
                    show: false,
                },
                G: {
                    count: 0,
                    show: false,
                },
            }
        },
        // 玩家二
        player2: {
            // 装
            aura: {
                count: 3,
                limit: 5,
            },
            // 命
            life: {
                count: 10,
                limit: null,
            },
            // 气
            flare: {
                count: 0,
                limit: null,
            },
            // 付与牌
            enhancement: {
                A: {
                    count: 0,
                    show: false,
                },
                B: {
                    count: 0,
                    show: false,
                },
                C: {
                    count: 0,
                    show: false,
                },
                D: {
                    count: 0,
                    show: false,
                },
                E: {
                    count: 0,
                    show: false,
                },
                F: {
                    count: 0,
                    show: false,
                },
                G: {
                    count: 0,
                    show: false,
                },
            }
        }
    }

    // 当前状态
    const currentState = ref({})

    // 恢复初始状态
    const resetState = () => {
        // 清除本地存储数据
        uni.removeStorage({
            key: 'sakuraArms',
            success() { }
        })
        // 将当前状态重置回初始状态
        currentState.value = JSON.parse(JSON.stringify(initialState))
    }
    return { resetState }
})