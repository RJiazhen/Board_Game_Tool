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
    ...mapState('m_sa', ['shared', 'movementParas'])
  },
  methods: {
    ...mapMutations('m_sa', ['moveSakuraToken', 'resetMovementParas', 'resetClass', 'saveToStorage']),
    saAreaClick(e) {

      const classIndex = `${this.TopAreaName}.${e.currentTarget.dataset.area}.class`
      const countIndex = `${this.TopAreaName}.${e.currentTarget.dataset.area}.count`
      console.log(classIndex);
      console.log(countIndex);
      // 如果「虚」的class是move-to-enhancement，则判定为现在的添加附与牌，进行特殊行动
      if (this.shared.shadow.class === 'move-to-enhancement') {
        // 如果点击的不是class为move-to-enhancement的区域
        if (_.get(this.$store.state.m_sa, classIndex) != 'move-to-enhancement') {
          uni.showToast({
            title: '请先确认完成',
            icon: "error"
          })
          return
        }
        // 设定移动参数并移动token
        this.movementParas.from = countIndex;
        this.moveSakuraToken()
        return
      }

      // 修改样式
      _.set(this.$store.state.m_sa, classIndex, 'active')
      console.log(this.movementParas);

      // 如果和上一次点击的区域相同
      if (this.movementParas.from === countIndex) {
        console.log('reset');
        // 重置移动参数和Class
        this.resetMovementParas()
        this.resetClass()
        this.saveToStorage()
        console.log(this.movementParas);
        return
      }
      // 如果已经准备移动token
      if (this.movementParas.isReadyToMove) {
        this.movementParas.to = countIndex;
        // 延时移动token，以防样式变化太快
        let timer = setTimeout(() => {
          this.moveSakuraToken()
          clearTimeout(timer)
        }, 300)
        return
      }
      // 如果是首次点击该区域
      this.movementParas.from = countIndex
      this.movementParas.amount = 1
      this.movementParas.isReadyToMove = true
    }
  }

}
