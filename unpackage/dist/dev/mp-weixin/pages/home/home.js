"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      href: "https://uniapp.dcloud.io/component/README?id=uniui"
    };
  },
  methods: {
    gotoTool(pagename) {
      common_vendor.index.navigateTo({
        url: `/subpkg/${pagename}/${pagename}`
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.gotoTool("sakura_arms"))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/OneDrive/200-Learning/220-Computer/2-Front_End/3-MyProject/Board_Game_Tool/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
