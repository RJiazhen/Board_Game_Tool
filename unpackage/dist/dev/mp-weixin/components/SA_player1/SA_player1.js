"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "SA_player1",
  data() {
    return {
      areaName: "player1",
      advanceHold: false
    };
  },
  computed: __spreadValues({}, common_vendor.mapState("m_sa", ["player1"])),
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations("m_sa", ["moveSakuraToken", "test"])), {
    advance() {
      const para = {
        from1: "shared",
        from2: "distance",
        to1: this.areaName,
        to2: "aura",
        amount: 1
      };
      this.moveSakuraToken(para);
    },
    breakaway() {
      const para = {
        from1: "shared",
        from2: "shadow",
        to1: "shared",
        to2: "distance",
        amount: 1
      };
      this.moveSakuraToken(para);
    },
    retreat() {
      const para = {
        from1: this.areaName,
        from2: "aura",
        to1: "shared",
        to2: "distance",
        amount: 1
      };
      this.moveSakuraToken(para);
    },
    recover() {
      const para = {
        from1: "shared",
        from2: "shadow",
        to1: this.areaName,
        to2: "aura",
        amount: 1
      };
      this.moveSakuraToken(para);
    },
    focus() {
      const para = {
        from1: this.areaName,
        from2: "aura",
        to1: this.areaName,
        to2: "flare",
        amount: 1
      };
      this.moveSakuraToken(para);
    }
  })
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t(_ctx.player1.aura),
    b: common_vendor.t(_ctx.player1.aura_limit),
    c: common_vendor.t(_ctx.player1.flare),
    d: common_vendor.t(_ctx.player1.flare_limit || "\u221E"),
    e: common_vendor.t(_ctx.player1.life),
    f: common_vendor.t(_ctx.player1.life_limit),
    g: common_vendor.o(($event) => $options.advance()),
    h: $data.advanceHold
  }, $data.advanceHold ? {
    i: common_vendor.o(($event) => $options.breakaway())
  } : {}, {
    j: common_vendor.o(($event) => $options.retreat()),
    k: common_vendor.o(($event) => $options.recover()),
    l: common_vendor.o(($event) => $options.focus()),
    m: common_vendor.o((...args) => _ctx.changeTargetPlayer && _ctx.changeTargetPlayer(...args))
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/OneDrive/200-Learning/220-Computer/2-Front_End/3-MyProject/Board_Game_Tool/components/SA_player1/SA_player1.vue"]]);
wx.createComponent(Component);
