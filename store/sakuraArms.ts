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
            enhancementA: {
                count: 0,
                show: false,
            },
            enhancementB: {
                count: 0,
                show: false,
            },
            enhancementC: {
                count: 0,
                show: false,
            },
            enhancementD: {
                count: 0,
                show: false,
            },
            enhancementE: {
                count: 0,
                show: false,
            },
            enhancementF: {
                count: 0,
                show: false,
            },
            enhancementG: {
                count: 0,
                show: false,
            },
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
            enhancementA: {
                count: 0,
                show: false,
                limit: null,
            },
            enhancementB: {
                count: 0,
                show: false,
                limit: null,
            },
            enhancementC: {
                count: 0,
                show: false,
                limit: null,
            },
            enhancementD: {
                count: 0,
                show: false,
                limit: null,
            },
            enhancementE: {
                count: 0,
                show: false,
                limit: null,
            },
            enhancementF: {
                count: 0,
                show: false,
                limit: null,
            },
            enhancementG: {
                count: 0,
                show: false,
                limit: null,
            },
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

    // 减token数量，无法再减则返回false，否则返回true
    const minusToken = (primaryIndex: string, areaName: string) => {
        // 如果当前token数量小于等于零，则不修改
        if (_.get(currentState.value, `${primaryIndex}.${areaName}.count`) <= 0) {
            return false
        }
        _.update(currentState.value, `${primaryIndex}.${areaName}.count`, (n) => n - 1)
        return true
    }

    // 加token数量，无法再添加则返回false，否则返回true
    const addToken = (primaryIndex: string, areaName: string) => {
        let limit = _.get(currentState.value, `${primaryIndex}.${areaName}.limit`)
        // 如果有上限且当前token数量已达/超过上限，则不变化
        if (limit != null) {
            if (_.get(currentState.value, `${primaryIndex}.${areaName}.count`) >= limit) {
                return false
            }
        }
        _.update(currentState.value, `${primaryIndex}.${areaName}.count`, (n) => n + 1)
        return true
    }


    return { resetState, currentState, minusToken, addToken }
})