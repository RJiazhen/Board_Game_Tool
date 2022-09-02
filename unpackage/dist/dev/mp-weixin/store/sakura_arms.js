"use strict";
var common_vendor = require("../common/vendor.js");
var moduleSakuraArms = {
  namespaced: true,
  state: () => ({
    player1: {},
    shared: {},
    player2: {},
    movementParas: {
      isReadyToMove: false,
      from1: "",
      from2: "",
      to1: "",
      to2: "",
      amount: 1
    }
  }),
  mutations: {
    resetState(state) {
      common_vendor.index.removeStorage({
        key: "sa_player1",
        success: () => {
          return;
        }
      });
      common_vendor.index.removeStorage({
        key: "sa_shared",
        success: () => {
          return;
        }
      });
      this.commit("m_sa/getFromStorage");
    },
    saveToStorage(state) {
      common_vendor.index.setStorageSync("sa_player1", JSON.stringify(state.player1));
      common_vendor.index.setStorageSync("sa_shared", JSON.stringify(state.shared));
    },
    getFromStorage(state) {
      state.shared = common_vendor.index.getStorageSync("sa_shared").length != 0 ? JSON.parse(common_vendor.index.getStorageSync("sa_shared")) : {
        distance: 10,
        distance_limit: 10,
        shadow: 0,
        shadow_limit: null
      };
      state.player1 = common_vendor.index.getStorageSync("sa_player1").length != 0 ? JSON.parse(common_vendor.index.getStorageSync("sa_player1")) : {
        life: 10,
        life_limit: 10,
        aura: 3,
        aura_limit: 5,
        flare: 0,
        flare_limit: null
      };
    },
    moveSakuraToken(state) {
      state[state.movementParas.from1][state.movementParas.from2] -= state.movementParas.amount;
      state[state.movementParas.to1][state.movementParas.to2] += state.movementParas.amount;
      this.commit("m_sa/saveToStorage");
      this.commit("m_sa/resetMovementParas");
    },
    resetMovementParas(state) {
      state.movementParas = {
        isReadyToMove: false,
        from1: "",
        from2: "",
        to1: "",
        to2: "",
        amount: 1
      };
    },
    checkSakuraTokenAmount(state, payload) {
      return state[state.movementParas.to1][state.movementParas.to2] + state.movementParas.amount > state[state.movementParas.to1][state.movementParas.to2 + "_limit"] ? common_vendor.index.$showMsg("fail") : true;
    }
  }
};
exports.moduleSakuraArms = moduleSakuraArms;
