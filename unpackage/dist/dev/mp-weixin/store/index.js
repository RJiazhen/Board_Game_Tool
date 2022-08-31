"use strict";
var common_vendor = require("../common/vendor.js");
var store_sakura_arms = require("./sakura_arms.js");
const store = common_vendor.createStore({
  modules: {
    m_sa: store_sakura_arms.moduleSakuraArms
  }
});
exports.store = store;
