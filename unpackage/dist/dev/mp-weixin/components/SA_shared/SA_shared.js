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
  name: "SA_shared",
  data() {
    return {
      from: "",
      to: ""
    };
  },
  props: {
    TopAreaName: {
      type: String
    }
  },
  computed: __spreadValues({}, common_vendor.mapState("m_sa", ["shared", "movementParas"])),
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations("m_sa", ["moveSakuraToken", "resetMovementParas", "resetClass", "saveToStorage"])), {
    areaClick(e) {
      const classIndex = e.currentTarget.dataset.area + "_class";
      this.shared[classIndex] = "active";
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
    }
  })
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t(_ctx.shared.shadow),
    b: common_vendor.t(_ctx.shared.shadow_limit ? _ctx.shared.shadow_limit : "\u221E"),
    c: common_vendor.n(_ctx.shared.shadow_class),
    d: common_vendor.o((...args) => $options.areaClick && $options.areaClick(...args)),
    e: common_vendor.t(_ctx.shared.distance),
    f: common_vendor.t(_ctx.shared.distance_limit),
    g: common_vendor.t(_ctx.shared.distance),
    h: common_vendor.t(_ctx.shared.distance_limit),
    i: common_vendor.n(_ctx.shared.distance_class),
    j: common_vendor.o((...args) => $options.areaClick && $options.areaClick(...args)),
    k: common_vendor.t(_ctx.shared.shadow),
    l: common_vendor.t(_ctx.shared.shadow_limit ? _ctx.shared.shadow_limit : "\u221E"),
    m: common_vendor.n(_ctx.shared.shadow_class),
    n: common_vendor.o((...args) => $options.areaClick && $options.areaClick(...args)),
    o: common_vendor.n(_ctx.shared.shadow_class)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/OneDrive/200-Learning/220-Computer/2-Front_End/3-MyProject/Board_Game_Tool/components/SA_shared/SA_shared.vue"]]);
wx.createComponent(Component);
