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
                order: "A",
                count: 0,
                show: true,
                limit: null,
            },
            enhancementB: {
                order: "B",
                count: 0,
                show: true,
                limit: null,
            },
            enhancementC: {
                order: "C",
                count: 0,
                show: true,
                limit: null,
            },
            enhancementD: {
                order: "D",
                count: 0,
                show: false,
                limit: null,
            },
            enhancementE: {
                order: "E",
                count: 0,
                show: false,
                limit: null,
            },
            enhancementF: {
                order: "F",
                count: 0,
                show: false,
                limit: null,
            },
            enhancementG: {
                order: "G",
                count: 0,
                show: false,
                limit: null,
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
                order: "A",
                count: 0,
                show: true,
                limit: null,
            },
            enhancementB: {
                order: "B",
                count: 0,
                show: true,
                limit: null,
            },
            enhancementC: {
                order: "C",
                count: 0,
                show: true,
                limit: null,
            },
            enhancementD: {
                order: "D",
                count: 0,
                show: false,
                limit: null,
            },
            enhancementE: {
                order: "E",
                count: 0,
                show: false,
                limit: null,
            },
            enhancementF: {
                order: "F",
                count: 0,
                show: false,
                limit: null,
            },
            enhancementG: {
                order: "G",
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

    // 显示付与牌
    const addEnhanCard = (primaryIndex: string) => {
        for (let i in currentState.value[primaryIndex]) {
            // 将编号最靠前的、show为false的付与牌设置为显示
            if (i.indexOf('enhancement') != -1 && !currentState.value[primaryIndex][i]['show']) {
                currentState.value[primaryIndex][i]['show'] = true
                return
            }
        }
    }

    return { resetState, currentState, minusToken, addToken, addEnhanCard }
})