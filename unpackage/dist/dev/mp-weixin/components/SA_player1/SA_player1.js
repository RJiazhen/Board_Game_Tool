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
      advanceHold: false
    };
  },
  props: {
    TopAreaName: {
      type: String
    }
  },
  computed: __spreadValues({}, common_vendor.mapState("m_sa", ["player1", "movementParas"])),
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations("m_sa", ["moveSakuraToken", "resetMovementParas"])), {
    areaClick(e) {
      if (this.movementParas.from1 == this.TopAreaName && this.movementParas.from2 == e.currentTarget.dataset.area) {
        this.resetMovementParas();
        return;
      }
      if (this.movementParas.isReadyToMove) {
        this.movementParas.to1 = this.TopAreaName;
        this.movementParas.to2 = e.currentTarget.dataset.area;
        this.moveSakuraToken();
        return;
      }
      this.movementParas.from1 = this.TopAreaName;
      this.movementParas.from2 = e.currentTarget.dataset.area;
      this.movementParas.amount = 1;
      this.movementParas.isReadyToMove = true;
    },
    advance() {
      this.movementParas.from1 = "shared";
      this.movementParas.from2 = "distance";
      this.movementParas.to1 = this.TopAreaName;
      this.movementParas.to2 = "aura";
      this.movementParas.amount = 1;
      this.moveSakuraToken();
    },
    breakaway() {
      this.movementParas.from1 = "shared";
      this.movementParas.from2 = "shadow";
      this.movementParas.to1 = "shared";
      this.movementParas.to2 = "distance";
      this.movementParas.amount = 1;
      this.moveSakuraToken();
    },
    retreat() {
      this.movementParas.from1 = this.TopAreaName;
      this.movementParas.from2 = "aura";
      this.movementParas.to1 = "shared";
      this.movementParas.to2 = "distance";
      this.movementParas.amount = 1;
      this.moveSakuraToken();
    },
    recover() {
      this.movementParas.from1 = "shared";
      this.movementParas.from2 = "shadow";
      this.movementParas.to1 = this.TopAreaName;
      this.movementParas.to2 = "aura";
      this.movementParas.amount = 1;
      this.moveSakuraToken();
    },
    focus() {
      this.movementParas.from1 = this.TopAreaName;
      this.movementParas.from2 = "aura";
      this.movementParas.to1 = this.TopAreaName;
      this.movementParas.to2 = "flare";
      this.movementParas.amount = 1;
      this.moveSakuraToken();
    }
  })
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t(_ctx.player1.aura),
    b: common_vendor.t(_ctx.player1.aura_limit),
    c: common_vendor.o((...args) => $options.areaClick && $options.areaClick(...args)),
    d: common_vendor.t(_ctx.player1.flare),
    e: common_vendor.t(_ctx.player1.flare_limit || "\u221E"),
    f: common_vendor.o((...args) => $options.areaClick && $options.areaClick(...args)),
    g: common_vendor.t(_ctx.player1.life),
    h: common_vendor.t(_ctx.player1.life_limit),
    i: common_vendor.o((...args) => $options.areaClick && $options.areaClick(...args)),
    j: common_vendor.o(($event) => $options.advance()),
    k: $data.advanceHold
  }, $data.advanceHold ? {
    l: common_vendor.o(($event) => $options.breakaway())
  } : {}, {
    m: common_vendor.o(($event) => $options.retreat()),
    n: common_vendor.o(($event) => $options.recover()),
    o: common_vendor.o(($event) => $options.focus()),
    p: common_vendor.o((...args) => _ctx.playerClick && _ctx.playerClick(...args))
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/OneDrive/200-Learning/220-Computer/2-Front_End/3-MyProject/Board_Game_Tool/components/SA_player1/SA_player1.vue"]]);
wx.createComponent(Component);
