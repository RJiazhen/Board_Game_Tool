<template>
  <view class="player" data-player="player">
    <!-- 樱花结晶面板 -->
    <view class="personal-status">
      <!-- 装 -->
      <view class="aura area" :class="player.aura.class" data-area="aura" @click="areaClick">
        <view class="area-token-num">
          <text class="area-token-count">{{player.aura.count}}</text>
          <text class="area-token-limit">/{{player.aura.limit}}</text>
        </view>
        <view class="area-title">装</view>
      </view>
      <!-- 气 -->
      <view class="flare area" :class="player.flare.class" data-area="flare" @click="areaClick">
        <view class="area-token-num">
          <text class="area-token-count">{{player.flare.count}}</text>
          <text class="area-token-limit">/{{player.flare.limit||"∞"}}</text>
        </view>
        <view class="area-title">气</view>
      </view>
      <!-- 命 -->
      <view class="life area" :class="player.life.class" data-area="life" @click="areaClick">
        <view class="area-token-num">
          <text class="area-token-count">{{player.life.count}}</text>
          <text class="area-token-limit">/{{player.life.limit}}</text>
        </view>
        <view class="area-title">命</view>
      </view>
    </view>
    <!-- 动作 -->
    <view class="action">
      <!-- 基础动作 -->
      <view class="basic-action" data-test="test">
        <view class="action-button advance" @click="advance()" data-player="test">前进</view>
        <view class="action-button" @click="retreat()">后退</view>
        <view class="action-button" @click="recover()">装附</view>
        <view class="action-button" @click="focus()">聚气</view>
      </view>
      <!-- 其他动作 -->
      <view class="other-action">
        <!-- 打出付与牌 -->
        <view class="action-button enhancement">
          <!-- 循环遍历生成付与牌 -->
          <view v-for="(cardState,cardIndex) in player.enhancement" :key="cardIndex" class="enhancement-cards">
            <view class="enhancement-card" :class="player.enhancement[cardIndex]['class']"
              v-if="cardState.count>0 || cardState.show" @click="areaClick" :data-area="'enhancement.'+cardIndex">
              <text class="token-count">{{cardState.count}}</text>
              <text class="card-num">{{cardIndex}}</text>
            </view>
          </view>
          <view class="plus-button" @click="addEnhancement">
            <uni-icons v-if="!addEnhancementClicked" type="plus" size="35" color="#32527F"></uni-icons>
            <text v-if="!addEnhancementClicked" class="tips">打出付与牌</text>
            <uni-icons v-if="addEnhancementClicked" type="checkbox" size="35" color="green"></uni-icons>
          </view>
        </view>
        <!-- 脱离 -->
        <view class="action-button breakaway" @click="breakaway()">脱离</view>
        <!-- 结束回合 -->
        <view class="action-button endTurn" size="mini" @click="endTurn">结束回合</view>
        <!-- <view class="action-button" size="mini">重铸牌库</view> -->
      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from "vuex"
  import {
    saMixin
  } from '@/common/saAreaClick.js'
  import _ from "lodash"
  export default {
    mixins: [saMixin],
    name: "SA_player",
    data() {
      return {
        // 控制脱离按钮是否显示
        advanceHold: false,
        isActive: true,
      }
    },
    props: {
      TopAreaName: {
        type: String,
      }
    },
    computed: {
      ...mapState('m_sa', ['shared', 'movementParas']),
      player() {
        return this.$store.state.m_sa[this.TopAreaName]
      },
      // 根据「装」和「虚」的class判断目前是否为添加付与牌的状态
      addEnhancementClicked() {
        return this.player.aura.class === 'move-to-enhancement' &&
          this.shared.shadow.class === 'move-to-enhancement'
      },
    },
    methods: {
      ...mapMutations('m_sa', ['moveSakuraToken', 'resetEnhancementShow', 'resetMovementParas',
        'enhancementCountMinusOne'
      ]),
      // 区域点击
      areaClick(e) {
        console.log('click');
        // 调用混入的saAreaClick方法
        this.saAreaClick(e)
      },
      // 前进
      advance() {
        this.movementParas.from = 'shared.distance.count'
        this.movementParas.to = `${this.TopAreaName}.aura.count`
        this.movementParas.amount = 1;
        this.moveSakuraToken()
      },
      // 脱离
      breakaway() {
        this.movementParas.from = 'shared.shadow.count'
        this.movementParas.to = 'shared.distance.count'
        this.movementParas.amount = 1;
        this.moveSakuraToken()
      },
      // 后退
      retreat() {
        this.movementParas.from = `${this.TopAreaName}.aura.count`
        this.movementParas.to = 'shared.distance.count'
        this.movementParas.amount = 1;
        this.moveSakuraToken()
      },
      // 装附
      recover() {
        this.movementParas.from = 'shared.shadow.count'
        this.movementParas.to = `${this.TopAreaName}.aura.count`
        this.movementParas.amount = 1;
        this.moveSakuraToken()
      },
      // 聚气
      focus() {
        this.movementParas.from = `${this.TopAreaName}.aura.count`
        this.movementParas.to = `${this.TopAreaName}.flare.count`
        this.movementParas.amount = 1;
        this.moveSakuraToken()
      },
      // 结束回合
      endTurn() {
        // 所有付与牌count-1
        console.log('end');
        this.enhancementCountMinusOne()
      },
      // 重铸牌库
      // 打出付与牌
      addEnhancement() {
        // 在按下的状态下再按下则重置相关状态
        if (this.addEnhancementClicked) {
          // 重置「虚」和「装」的样式，按钮样式也会跟着重置
          this.shared.shadow.class = ''
          this.player.aura.class = ''
          // 重置付与牌的show为false
          this.resetEnhancementShow()
          // 重置移动参数
          this.resetMovementParas()
          return
        }
        // 变换「虚」和「装」的样式，按钮样式也会跟着改变
        this.shared.shadow.class = 'move-to-enhancement'
        this.player.aura.class = 'move-to-enhancement'
        for (let cardIndex in this.player.enhancement) {
          // 显示编号最靠前的，且count为0的付与牌
          console.log('cardIndex:', cardIndex);
          console.log(this.player.enhancement[cardIndex]);
          if (this.player.enhancement[cardIndex]['count'] === 0) {
            this.player.enhancement[cardIndex]['show'] = true
            // 修改移动token的相关变量为该附与牌
            this.movementParas.to = `${this.TopAreaName}.enhancement.${cardIndex}.count`;
            this.movementParas.isReadyToMove = true
            break
          }
        }
      },

    },
  }
</script>

<style lang="scss">
  .active {
    background-color: #f7e887 !important;
  }

  .move-to-enhancement {
    background-color: #689766 !important;
  }

  // 个人状态
  .personal-status {
    height: 14vh;
    display: flex;
    justify-content: space-between;
    padding-top: 0.5vh;
    // 控制激活时样式变化效果
    transition: 1s all;

    .area {
      background-color: #fff;
      width: 32%;
      height: 13.5vh;
      position: relative;
      border-radius: 5px;
      // border: solid 1px #a2a2a2;
      transition: .1s all;
      box-shadow: // 立体阴影
        7px 7px 6px rgba(0, 0, 0, .4),
        -7px -7px 12px rgba(255, 255, 255, .9);


      .area-title {
        position: absolute;
        font-size: 30px;
        right: 5%;
        bottom: 3%;

      }

      .area-token-num {
        position: absolute;
        top: 40%;
        left: 40%;
        transform: translate(-50%, -50%);

        .area-token-count {
          font-size: 55px;

        }

        .area-token-limit {
          font-size: 10px;
          color: #0f0f0f;
        }
      }

    }
  }

  // 动作
  .action {
    display: flex;
    height: 26vh;
    padding: 0 1vw;

    // 动作按钮
    .action-button {
      height: 11vh;
      font-size: 23px;
      text-align: center;
      line-height: 11vh;
      margin-top: 5px;
      background-color: #fff;
      border-radius: 20px;
      // 立体阴影
      box-shadow:
        7px 7px 6px rgba(0, 0, 0, .4),
        -7px -7px 12px rgba(255, 255, 255, .9);
    }

    // 基本动作
    .basic-action {
      width: 40vw;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      align-content: flex-start;

      .action-button {
        width: 19vw;
      }
    }

    // 其他动作
    .other-action {
      width: 59vw;
      margin-left: 2px;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start; // 清除换行产生的空隙


      .enhancement {
        width: 100%;
        display: flex;
        justify-content: space-between;
        overflow: hidden;

        .enhancement-cards {
          display: flex;
          background-color: #689766;


          .enhancement-card {
            position: relative;
            align-content: flex-start;
            box-sizing: border-box;
            border-right: 1px solid #595959;
            width: 7vw;

            .token-count {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              height: 25px;
              line-height: 25px;
              font-size: 25px;
            }

            .card-num {
              position: absolute;
              bottom: 3px;
              right: 1px;
              height: 15px;
              line-height: 15px;
              font-size: 15px;

            }
          }
        }

        .plus-button {
          width: 100%;
          position: relative;

          .tips {
            position: absolute;
            bottom: 10px;
            right: 50%;
            transform: translateX(50%);
            font-size: 10px;
            line-height: 10px;
          }
        }
      }

      // 脱离按钮
      .breakaway {
        width: 19vw;
      }

      .endTurn {
        background-color: #D9534F;
        color: #fff;
        border: solid 2px #D43F3A;
        box-sizing: border-box;
        width: 39vw;
      }

    }
  }
</style>
