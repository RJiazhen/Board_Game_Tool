"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      player1: {
        life: 10,
        life_limit: 10,
        aura: 3,
        aura_limit: 5,
        flare: 0,
        flare_limit: null
      },
      shared: {
        distance: 10,
        distance_limit: 10,
        shadow: 0,
        shadow_limit: null
      },
      player2: {
        life: 10,
        life_limit: 10,
        aura: 3,
        aura_limit: 5,
        flare: 0,
        flare_limit: null
      }
    };
  },
  methods: {
    forWardMovement(e) {
      console.log(e.currentTarget.parentNode);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.forWardMovement($event)),
    b: common_vendor.t($data.player1.aura),
    c: common_vendor.t($data.player1.aura_limit),
    d: common_vendor.t($data.player1.flare),
    e: common_vendor.t($data.player1.flare_limit || "\u221E"),
    f: common_vendor.t($data.player1.life),
    g: common_vendor.t($data.player1.life_limit),
    h: common_vendor.t($data.shared.distance),
    i: common_vendor.t($data.shared.distance_limit),
    j: common_vendor.t($data.shared.shadow),
    k: common_vendor.t($data.shared.shadow_limit)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/OneDrive/200-Learning/220-Computer/2-Front_End/3-MyProject/Board_Game_Tool/subpkg/sakura_arms/sakura_arms.vue"]]);
wx.createPage(MiniProgramPage);
