"use strict";
var common_vendor = require("../common/vendor.js");
var moduleSakuraArms = {
  namespaced: true,
  state: () => ({
    initialState: {
      shared: {
        distance: 10,
        distance_limit: 10,
        distance_class: "",
        shadow: 0,
        shadow_limit: null,
        shadow_class: ""
      },
      player1: {
        life: 10,
        life_limit: 10,
        life_class: "",
        aura: 3,
        aura_limit: 5,
        aura_class: "",
        flare: 0,
        flare_limit: null,
        flare_class: "",
        enhancement: {
          A: {
            count: 0
          },
          B: 0,
          C: 0,
          D: 0,
          E: 0,
          F: 0,
          G: 0
        }
      }
    },
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
      state.shared = common_vendor.index.getStorageSync("sa_shared").length != 0 ? JSON.parse(common_vendor.index.getStorageSync("sa_shared")) : JSON.parse(JSON.stringify(state.initialState.shared));
      state.player1 = common_vendor.index.getStorageSync("sa_player1").length != 0 ? JSON.parse(common_vendor.index.getStorageSync("sa_player1")) : JSON.parse(JSON.stringify(state.initialState.player1));
      this.commit("m_sa/saveToStorage");
    },
    moveSakuraToken(state) {
      console.log("move");
      if (state[state.movementParas.from1][state.movementParas.from2] < state.movementParas.amount) {
        console.log("notEn");
        common_vendor.index.showToast({
          title: "token\u6570\u91CF\u4E0D\u8DB3",
          icon: "error"
        });
      } else if (state[state.movementParas.to1][state.movementParas.to2 + "_limit"] != null && state[state.movementParas.to1][state.movementParas.to2 + "_limit"] < state[state.movementParas.to1][state.movementParas.to2] + state.movementParas.amount) {
        console.log("overLimit");
        common_vendor.index.showToast({
          title: "token\u8D85\u8FC7\u4E0A\u9650",
          icon: "error"
        });
      } else {
        state[state.movementParas.from1][state.movementParas.from2] -= state.movementParas.amount;
        state[state.movementParas.to1][state.movementParas.to2] += state.movementParas.amount;
      }
      this.commit("m_sa/resetMovementParas");
      this.commit("m_sa/resetClass");
      this.commit("m_sa/saveToStorage");
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
    resetClass(state) {
      state.shared.distance_class = "";
      state.shared.shadow_class = "";
      state.player1.aura_class = "";
      state.player1.flare_class = "";
      state.player1.life_class = "";
      state.player2.aura_class = "";
      state.player2.flare_class = "";
      state.player2.life_class = "";
    },
    checkSakuraTokenAmount(state, payload) {
      return state[state.movementParas.to1][state.movementParas.to2] + state.movementParas.amount > state[state.movementParas.to1][state.movementParas.to2 + "_limit"] ? common_vendor.index.$showMsg("fail") : true;
    }
  }
};
exports.moduleSakuraArms = moduleSakuraArms;
