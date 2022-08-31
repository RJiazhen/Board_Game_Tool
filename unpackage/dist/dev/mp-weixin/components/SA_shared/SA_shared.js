"use strict";
var __defProp = Object.defineProperty;
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
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "SA_shared",
  data() {
    return {
      from: "",
      to: ""
    };
  },
  computed: __spreadValues({}, common_vendor.mapState("m_sa", ["shared"])),
  methods: __spreadValues({}, common_vendor.mapMutations("m_sa", ["moveSakuraToken"]))
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t(_ctx.shared.distance),
    b: common_vendor.t(_ctx.shared.distance_limit),
    c: common_vendor.t(_ctx.shared.shadow),
    d: common_vendor.t(_ctx.shared.shadow_limit)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/OneDrive/200-Learning/220-Computer/2-Front_End/3-MyProject/Board_Game_Tool/components/SA_shared/SA_shared.vue"]]);
wx.createComponent(Component);
