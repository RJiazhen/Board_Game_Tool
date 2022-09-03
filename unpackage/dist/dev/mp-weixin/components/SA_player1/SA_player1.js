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
      advanceHold: false,
      isActive: true,
      addEnhancementClicked: false
    };
  },
  props: {
    TopAreaName: {
      type: String
    }
  },
  computed: __spreadValues({}, common_vendor.mapState("m_sa", ["player1", "movementParas"])),
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations("m_sa", ["moveSakuraToken", "resetMovementParas", "resetClass", "saveToStorage"])), {
    areaClick(e) {
      const classIndex = e.currentTarget.dataset.area + "_class";
      this.player1[classIndex] = "active";
      if (this.movementParas.from1 == this.TopAreaName && this.movementParas.from2 == e.currentTarget.dataset.area) {
        this.resetMovementParas();
        this.resetClass();
        this.saveToStorage();
        return;
      }
      if (this.movementParas.isReadyToMove) {
        this.movementParas.to1 = this.TopAreaName;
        this.movementParas.to2 = e.currentTarget.dataset.area;
        let timer = setTimeout(() => {
          this.moveSakuraToken();
          clearTimeout(timer);
        }, 300);
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
    },
    addEnhancement() {
      if (this.addEnhancementClicked) {
        this.addEnhancementClicked = !this.addEnhancementClicked;
        return;
      }
      this.addEnhancementClicked = !this.addEnhancementClicked;
      const enhancement = this.player1.enhancement;
      for (let cardIndex in enhancement) {
        if (enhancement[cardIndex] === 0) {
          enhancement[cardIndex] = 1;
          break;
        }
      }
      console.log("player1:", this.player1.enhancement);
      console.log("test:", enhancement);
    }
  })
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t(_ctx.player1.aura),
    b: common_vendor.t(_ctx.player1.aura_limit),
    c: common_vendor.n(_ctx.player1.aura_class),
    d: common_vendor.o((...args) => $options.areaClick && $options.areaClick(...args)),
    e: common_vendor.t(_ctx.player1.flare),
    f: common_vendor.t(_ctx.player1.flare_limit || "\u221E"),
    g: common_vendor.n(_ctx.player1.flare_class),
    h: common_vendor.o((...args) => $options.areaClick && $options.areaClick(...args)),
    i: common_vendor.t(_ctx.player1.life),
    j: common_vendor.t(_ctx.player1.life_limit),
    k: common_vendor.n(_ctx.player1.life_class),
    l: common_vendor.o((...args) => $options.areaClick && $options.areaClick(...args)),
    m: common_vendor.o(($event) => $options.advance()),
    n: $data.advanceHold
  }, $data.advanceHold ? {
    o: common_vendor.o(($event) => $options.breakaway())
  } : {}, {
    p: common_vendor.o(($event) => $options.retreat()),
    q: common_vendor.o(($event) => $options.recover()),
    r: common_vendor.o(($event) => $options.focus()),
    s: common_vendor.f(this.player1.enhancement, (tokenCount, cardIndex, i0) => {
      return common_vendor.e({
        a: tokenCount > 0
      }, tokenCount > 0 ? {
        b: common_vendor.t(tokenCount),
        c: common_vendor.t(cardIndex)
      } : {}, {
        d: cardIndex
      });
    }),
    t: !$data.addEnhancementClicked
  }, !$data.addEnhancementClicked ? {
    v: common_vendor.p({
      type: "plus",
      size: "35",
      color: "#32527F"
    })
  } : {}, {
    w: !$data.addEnhancementClicked
  }, !$data.addEnhancementClicked ? {} : {}, {
    x: $data.addEnhancementClicked
  }, $data.addEnhancementClicked ? {
    y: common_vendor.p({
      type: "checkbox",
      size: "35",
      color: "green"
    })
  } : {}, {
    z: common_vendor.o((...args) => $options.addEnhancement && $options.addEnhancement(...args)),
    A: common_vendor.o((...args) => _ctx.playerClick && _ctx.playerClick(...args))
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/OneDrive/200-Learning/220-Computer/2-Front_End/3-MyProject/Board_Game_Tool/components/SA_player1/SA_player1.vue"]]);
wx.createComponent(Component);
