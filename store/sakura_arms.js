export default {
  namespaced: true,
  state: () => ({
    // 玩家一的相关数值
    player1: {},
    // 公用区域
    shared: {},
    player2: {},
    // 移动token时的相关参数
    movementParas: {
      // 控制token在下次点击时是否应该移动
      isReadyToMove: false,
      from1: '',
      from2: '',
      to1: '',
      to2: '',
      amount: 1,
    }
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
      // uni.setStorageSync('sa_player2', JSON.stringify(state.player2))
      uni.removeStorage({
        key: 'sa_shared',
        success: () => {
          return
        }
      })

      this.commit('m_sa/getFromStorage')
    },

    // 把state存储到本地
    saveToStorage(state) {
      uni.setStorageSync('sa_player1', JSON.stringify(state.player1))
      // uni.setStorageSync('sa_player2', JSON.stringify(state.player2))
      uni.setStorageSync('sa_shared', JSON.stringify(state.shared))
    },

    // 从本地获取state数据，如无数据则设定为默认值
    getFromStorage(state) {
      state.shared = uni.getStorageSync('sa_shared').length != 0 ?
        JSON.parse(uni.getStorageSync('sa_shared')) : {
          distance: 10,
          distance_limit: 10,
          shadow: 0,
          shadow_limit: null,
        }

      state.player1 = uni.getStorageSync('sa_player1').length != 0 ?
        JSON.parse(uni.getStorageSync('sa_player1')) : {
          // 命
          life: 10,
          life_limit: 10,
          // 装
          aura: 3,
          aura_limit: 5,
          // 气
          flare: 0,
          flare_limit: null,
          // 付与牌
        }
    },

    // 移动樱花指示物
    moveSakuraToken(state) {
      state[state.movementParas.from1][state.movementParas.from2] -= state.movementParas.amount
      state[state.movementParas.to1][state.movementParas.to2] += state.movementParas.amount
      // 存储数据到本地
      this.commit('m_sa/saveToStorage')
      // 重置移动相关的参数
      this.commit('m_sa/resetMovementParas')

    },
    // 恢复移动相关数据
    resetMovementParas(state) {
      state.movementParas = {
        isReadyToMove: false,
        from1: '',
        from2: '',
        to1: '',
        to2: '',
        amount: 1,
      }
    },

    // 检查目标区域樱花指示物是否达到上限
    checkSakuraTokenAmount(state, payload) {
      return state[state.movementParas.to1][state.movementParas.to2] + state.movementParas.amount > state[state
          .movementParas.to1][state.movementParas.to2 + '_limit'] ?
        uni.$showMsg('fail') :
        true
    }
  }
}
