import _ from "lodash"
export default {
  namespaced: true,
  state: () => ({
    // 初始状态数据
    initialState: {
      // 当前回合
      turn: "player2",
      shared: {
        distance: {
          count: 10,
          limit: 10,
          class: '',
        },
        shadow: {
          count: 0,
          limit: null,
          class: '',
        }
      },
      player: {
        // 装
        aura: {
          count: 3,
          limit: 5,
          class: ""
        },
        // 命
        life: {
          count: 10,
          limit: 10,
          class: '',
        },
        // 气
        flare: {
          count: 0,
          limit: null,
          class: '',
        },
        // 付与牌
        enhancement: {
          A: {
            count: 0,
            show: false,
            class: "",
          },
          B: {
            count: 0,
            show: false,
            class: "",
          },
          C: {
            count: 0,
            show: false,
            class: "",
          },
          D: {
            count: 0,
            show: false,
            class: "",
          },
          E: {
            count: 0,
            show: false,
            class: "",
          },
          F: {
            count: 0,
            show: false,
            class: "",
          },
          G: {
            count: 0,
            show: false,
            class: "",
          },
        }
      }
    },
    // 当前回合
    turn: '',
    // 玩家一
    player1: {},
    // 公用区域
    shared: {},
    // 玩家二
    player2: {},
    // 移动token时的相关参数
    movementParas: {
      // 控制token在下次点击时是否应该移动
      from: '',
      to: '',
      isReadyToMove: false,
      amount: 1,
    },
  }),


  mutations: {
    // 恢复初始状态
    resetState(state) {
      uni.removeStorage({
        key: 'sa_player1',
        success: () => {
          return
        }
      })
      uni.removeStorage({
        key: 'sa_shared',
        success: () => {
          return
        }
      })
      uni.removeStorage({
        key: 'sa_player2',
        success: () => {
          return
        }
      })
      uni.removeStorage({
        key: 'sa_turn',
        success: () => {
          return
        }
      })

      this.commit('m_sa/getFromStorage')
    },

    // 把state存储到本地
    saveToStorage(state) {
      uni.setStorageSync('sa_player1', JSON.stringify(state.player1))
      uni.setStorageSync('sa_player2', JSON.stringify(state.player2))
      uni.setStorageSync('sa_shared', JSON.stringify(state.shared))
      uni.setStorageSync('sa_turn', JSON.stringify(state.turn))
    },

    // 从本地获取state数据，如无数据则设定为默认值
    getFromStorage(state) {
      // 获取公用区域相关数据
      state.shared = uni.getStorageSync('sa_shared').length != 0 ?
        JSON.parse(uni.getStorageSync('sa_shared')) :
        JSON.parse(JSON.stringify(state.initialState.shared))
      // 获取player1相关数据
      state.player1 = uni.getStorageSync('sa_player1').length != 0 ?
        JSON.parse(uni.getStorageSync('sa_player1')) :
        JSON.parse(JSON.stringify(state.initialState.player))
      // 获取player2相关数据
      state.player2 = uni.getStorageSync('sa_player2').length != 0 ?
        JSON.parse(uni.getStorageSync('sa_player2')) :
        JSON.parse(JSON.stringify(state.initialState.player))
      // 获取turn相关数据
      state.turn = uni.getStorageSync('sa_turn').length != 0 ?
        JSON.parse(uni.getStorageSync('sa_turn')) :
        JSON.parse(JSON.stringify(state.initialState.turn))
      // 更新本地存储
      this.commit('m_sa/saveToStorage')
    },

    // 移动樱花指示物
    moveSakuraToken(state) {
      const moveTokenAmout = state.movementParas.amount //要移动的token数量
      const fromAreaTokenCount = _.get(state, state.movementParas.from) // 移出区域的token数量
      const toAreaTokenCount = _.get(state, state.movementParas.to) // 目标区域的token数量
      const toAreaTokenLimit = _.get(state, state.movementParas.to.replace('count', 'limit')) // 目标区域的token上限

      // 如果来源区域没有有足够的token数量
      if (fromAreaTokenCount < moveTokenAmout) {
        uni.showToast({
          title: 'token数量不足',
          icon: "error"
        })
      }
      // 如果移动后是否超过目标区域的token上限
      else if (toAreaTokenLimit != null && toAreaTokenLimit < (toAreaTokenCount + moveTokenAmout)) {
        uni.showToast({
          title: 'token超过上限',
          icon: "error"
        })
      }
      // 上述检查均通过后
      else {
        _.update(state, state.movementParas.from, (n) => n - state.movementParas.amount)
        _.update(state, state.movementParas.to, (n) => n + state.movementParas.amount)
      }

      // 当不是移动付与牌的状态时才能重置参数
      if (state.shared.shadow.class != 'move-to-enhancement') {
        // 重置移动相关的参数
        this.commit('m_sa/resetMovementParas')
        // 重置样式
        this.commit('m_sa/resetClass')
      }
      // 存储数据到本地
      this.commit('m_sa/saveToStorage')
    },

    // 重置移动相关数据
    resetMovementParas(state) {
      state.movementParas = {
        isReadyToMove: false,
        from: '',
        to: '',
        amount: 1,
      }
    },

    // 重置样式相关数据
    resetClass(state) {
      state.shared.distance.class = ''
      state.shared.shadow.class = ''
      state.player1.aura.class = ''
      state.player1.flare.class = ''
      state.player1.life.class = ''
      state.player2.aura.class = ''
      state.player2.flare.class = ''
      state.player2.life.class = ''
      for (let cardIndex in state.player1.enhancement) {
        state.player1.enhancement[cardIndex]['class'] = ''
      }
      for (let cardIndex in state.player2.enhancement) {
        state.player1.enhancement[cardIndex]['class'] = ''
      }
    },

    // 重置付与牌的show为false
    resetEnhancementShow(state) {
      for (let cardIndex in state.player1.enhancement) {
        state.player1.enhancement[cardIndex]['show'] = false
      }
      for (let cardIndex in state.player2.enhancement) {
        state.player2.enhancement[cardIndex]['show'] = false
      }
      // 更新本地存储
      this.commit('m_sa/saveToStorage')
    },
    // 变更回合
    changeTurn(state) {
      console.log('endTurn');
      state.turn = state.turn === 'player1' ? 'player2' : 'player1'
      console.log(state.turn);
    },
    // 全部付与牌的count-1
    enhancementCountMinusOne(state) {
      for (let cardIndex in state.player1.enhancement) {
        // 只有count大于0才会减1
        if (state.player1.enhancement[cardIndex]['count'] > 0) {
          state.player1.enhancement[cardIndex]['count'] -= 1

          // 减去的token由「虚」接收
          state.shared.shadow['count'] += 1
        }
      }
      for (let cardIndex in state.player2.enhancement) {
        // 只有count大于0才会减1
        if (state.player2.enhancement[cardIndex]['count'] > 0) {
          state.player2.enhancement[cardIndex]['count'] -= 1

          // 减去的token由「虚」接收
          state.shared.shadow['count'] += 1
        }
      }
      // 更新本地存储
      this.commit('m_sa/saveToStorage')

    }
  }
}
