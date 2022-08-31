export default {
  namespaced: true,
  state: () => ({
    // 玩家一的相关数值
    player1: {},
    // 公用区域
    shared: {},
    player2: {},
  }),

  mutations: {
    // 恢复初始状态
    resetState() {
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
      console.log('save');
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
    moveSakuraToken(state, payload) {
      state[payload.from1][payload.from2] -= payload.amount
      state[payload.to1][payload.to2] += payload.amount
      // 存储数据到本地
      this.commit('m_sa/saveToStorage')
    },

    // 检查目标区域樱花指示物是否达到上限
    checkSakuraTokenAmount(state, payload) {
      return state[payload.to1][payload.to2] + payload.amount > state[payload.to1][payload.to2 + '_limit'] ?
        uni.$showMsg('fail') :
        true
    }
  }
}
