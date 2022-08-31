"use strict";
var common_vendor = require("../common/vendor.js");
var moduleSakuraArms = {
  namespaced: true,
  state: () => ({
    player1: {},
    shared: {},
    player2: {}
  }),
  mutations: {
    resetState() {
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
      console.log("save");
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
    moveSakuraToken(state, payload) {
      state[payload.from1][payload.from2] -= payload.amount;
      state[payload.to1][payload.to2] += payload.amount;
      this.commit("m_sa/saveToStorage");
    },
    checkSakuraTokenAmount(state, payload) {
      return state[payload.to1][payload.to2] + payload.amount > state[payload.to1][payload.to2 + "_limit"] ? common_vendor.index.$showMsg("fail") : true;
    }
  }
};
exports.moduleSakuraArms = moduleSakuraArms;
