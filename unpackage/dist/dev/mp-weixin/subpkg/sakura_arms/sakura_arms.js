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
  data() {
    return {};
  },
  computed: {},
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations("m_sa", ["resetState", "getFromStorage"])), {
    reset() {
      this.resetState();
    }
  }),
  onLoad() {
    this.getFromStorage();
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_SA_shared2 = common_vendor.resolveComponent("SA_shared");
  const _easycom_SA_player12 = common_vendor.resolveComponent("SA_player1");
  (_easycom_uni_icons2 + _easycom_SA_shared2 + _easycom_SA_player12)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_SA_shared = () => "../../components/SA_shared/SA_shared.js";
const _easycom_SA_player1 = () => "../../components/SA_player1/SA_player1.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_SA_shared + _easycom_SA_player1)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.reset),
    b: common_vendor.p({
      type: "loop",
      size: "50"
    }),
    c: common_vendor.p({
      TopAreaName: "shared"
    }),
    d: common_vendor.p({
      TopAreaName: "player1"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/OneDrive/200-Learning/220-Computer/2-Front_End/3-MyProject/Board_Game_Tool/subpkg/sakura_arms/sakura_arms.vue"]]);
wx.createPage(MiniProgramPage);
