import {
  mapState,
  mapMutations
} from "vuex"
import _ from 'lodash'

export const saMixin = {
  data() {
    return {}
  },
  computed: {
    ...mapState('m_sa', ['movementParas'])
  },
  methods: {
    ...mapMutations('m_sa', ['moveSakuraToken', 'resetMovementParas', 'resetClass', 'saveToStorage']),
    saAreaClick(e) {
      console.log(e);
      // 修改样式
      const classIndex = `${this.TopAreaName}.${e.currentTarget.dataset.area}_class`
      const clickedArea = `${this.TopAreaName}.${e.currentTarget.dataset.area}`
      _.set(this, classIndex, 'active')
      // 如果和上一次点击的区域相同
      if (this.movementParas.from === clickedArea) {
        // 重置移动参数和Class
        this.resetMovementParas()
        this.resetClass()
        this.saveToStorage()
        return
      }
      // 如果已经准备移动token
      if (this.movementParas.isReadyToMove) {
        this.movementParas.to = clickedArea;
        // 延时移动token，以防样式变化太快
        let timer = setTimeout(() => {
          this.moveSakuraToken()
          clearTimeout(timer)
        }, 300)
        return
      }
      // 如果是首次点击该区域
      this.movementParas.from = clickedArea
      this.movementParas.amount = 1
      this.movementParas.isReadyToMove = true
      console.log(this.movementParas);
    }
  }

}
