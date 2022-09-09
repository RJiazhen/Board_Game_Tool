import {
  createStore
} from "vuex"
// 引入《散樱乱武》模块
import moduleSakuraArms from "@/store/sakura_arms.js"

const store = createStore({
  modules: {
    m_sa: moduleSakuraArms,
  }
})

export default store
